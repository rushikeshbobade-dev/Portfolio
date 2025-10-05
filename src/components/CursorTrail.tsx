import { useEffect, useRef } from 'react';

export const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const trail = useRef<Array<{ x: number; y: number; age: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Add new trail point
      trail.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
      });

      // Limit trail length
      if (trail.current.length > 30) {
        trail.current.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw trail
      trail.current.forEach((point, index) => {
        point.age += 1;
        
        const opacity = 1 - point.age / 30;
        const size = 8 - (point.age / 30) * 6;
        
        // Gradient circle
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, size * 2);
        gradient.addColorStop(0, `hsla(234, 89%, 61%, ${opacity * 0.8})`);
        gradient.addColorStop(0.5, `hsla(271, 81%, 66%, ${opacity * 0.5})`);
        gradient.addColorStop(1, `hsla(183, 76%, 45%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Connect points with lines
        if (index > 0) {
          const prevPoint = trail.current[index - 1];
          ctx.strokeStyle = `hsla(234, 89%, 61%, ${opacity * 0.3})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(prevPoint.x, prevPoint.y);
          ctx.lineTo(point.x, point.y);
          ctx.stroke();
        }
      });

      // Remove old trail points
      trail.current = trail.current.filter(point => point.age < 30);

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9999]"
      />
      <style>{`
        * {
          cursor: none !important;
        }
        
        body::after {
          content: '';
          position: fixed;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: radial-gradient(circle, hsl(234 89% 61% / 0.8), hsl(271 81% 66% / 0.4));
          pointer-events: none;
          z-index: 10000;
          transform: translate(-50%, -50%);
          animation: cursor-pulse 2s ease-in-out infinite;
        }
        
        @keyframes cursor-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }
      `}</style>
    </>
  );
};
