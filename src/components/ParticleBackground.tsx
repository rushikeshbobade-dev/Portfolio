import { useEffect, useRef } from 'react';

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      hue: number;
      pulsePhase: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.5,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.6 + 0.3,
        hue: Math.random() * 60 + 210, // Range between blue and purple
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      // Create gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, 'hsla(222, 47%, 11%, 0.05)');
      bgGradient.addColorStop(0.5, 'hsla(234, 89%, 61%, 0.03)');
      bgGradient.addColorStop(1, 'hsla(271, 81%, 66%, 0.05)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.pulsePhase += 0.02;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Pulsing effect
        const pulse = Math.sin(particle.pulsePhase) * 0.3 + 0.7;
        const currentSize = particle.size * pulse;
        const currentOpacity = particle.opacity * pulse;

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, currentSize * 3
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 89%, 61%, ${currentOpacity})`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 89%, 61%, ${currentOpacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 89%, 61%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentSize * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections with gradient
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            const opacity = 0.25 * (1 - distance / 150);
            gradient.addColorStop(0, `hsla(${p1.hue}, 89%, 61%, ${opacity})`);
            gradient.addColorStop(1, `hsla(${p2.hue}, 89%, 61%, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};
