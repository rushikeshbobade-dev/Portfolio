import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import chatImg from "@/assets/project-chat.jpg";
import aiImg from "@/assets/project-ai.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce site with user authentication, product listings, cart functionality, and Stripe payment integration. Features include advanced search, product reviews, and an admin dashboard.",
      image: ecommerceImg,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Real-time Chat Application",
      description: "A modern chat application demonstrating WebSocket usage for real-time messaging, user presence indicators, typing notifications, and message history with MongoDB persistence.",
      image: chatImg,
      technologies: ["React", "Socket.io", "Express", "MongoDB", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "AI-powered Sentiment Analyzer",
      description: "A web application integrating a machine learning model for sentiment analysis. Upload text or connect social media to analyze sentiment patterns with interactive visualizations.",
      image: aiImg,
      technologies: ["Python", "Flask", "TensorFlow", "React", "D3.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my skills and experience in computer engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="group relative animate-fade-in"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={(el) => {
        if (!el) return;
        el.style.setProperty("--animation-delay", `${index * 150}ms`);
      }}
    >
      {/* Spotlight effect */}
      {isHovering && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl project-spotlight"
          ref={(el) => {
            if (!el) return;
            // set CSS variables used by .project-spotlight
            el.style.setProperty("--mouse-x", `${mousePosition.x}px`);
            el.style.setProperty("--mouse-y", `${mousePosition.y}px`);
          }}
        />
      )}

      <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Project image with overlay */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Floating badge */}
          <div className="absolute top-4 right-4 z-20 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            View Project
          </div>
        </div>

        {/* Project content */}
        <div className="relative p-6 space-y-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Open live demo for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4 text-primary" />
                <span className="sr-only">Open live demo</span>
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Open GitHub repository for ${project.title}`}
              >
                <Github className="w-4 h-4 text-primary" />
                <span className="sr-only">Open repository</span>
              </a>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed text-sm">
            {project.description}
          </p>

          {/* Technologies with stagger animation */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech: string, idx: number) => (
              <TechTag key={tech} idx={idx}>
                {tech}
              </TechTag>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="default"
              size="sm"
              className="flex-1 group/btn"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                Live Demo
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 group/btn"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                View Code
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

  const TechTag: React.FC<{ idx: number; children: React.ReactNode }> = ({ idx, children }) => {
    const ref = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.setProperty("--stagger-delay", `${idx * 50}ms`);
    }, [idx]);

    return (
      <span
        ref={ref}
        className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/20 hover:scale-105 delay-var"
      >
        {children}
      </span>
    );
  };
