
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileDown, ArrowRight, Sparkles } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Full-Stack Developer",
    "Software Engineer",
    "Machine Learning Engineer",
    "DevOps Practitioner",
    "AI/ML Enthusiast",
    "Innovation Catalyst"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient glow effects */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-electric-purple/20 rounded-full blur-[100px] animate-float animation-delay-2000" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Responsive grid: left = content, right = image */}
        <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[500px]">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center h-full text-center lg:text-left order-2 lg:order-1 pt-16 lg:pt-24 lg:pl-12">
            {/* Name, Designation, Roles */}
            <div className="mb-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-1 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
                Rushikesh Bobade
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-1">
                Computer Engineering Student
              </p>
              <div className="text-base sm:text-lg lg:text-xl font-medium mb-2 min-h-[2rem] flex items-center justify-center lg:justify-start">
                <span className="relative min-w-[220px] lg:min-w-[280px] text-center lg:text-left">
                  {roles.map((role, index) => (
                    <span
                      key={role}
                      className={`absolute left-0 w-full transition-all duration-700 ${
                        index === currentRole
                          ? 'opacity-100 translate-y-0 text-primary font-semibold'
                          : index === (currentRole - 1 + roles.length) % roles.length
                          ? 'opacity-0 -translate-y-4 text-muted-foreground font-normal'
                          : 'opacity-0 translate-y-4 text-muted-foreground font-normal'
                      }`}
                    >
                      {role}
                    </span>
                  ))}
                </span>
              </div>
            </div>

            {/* Tagline / Mission Statement */}
            <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-5 leading-relaxed">
              Transforming innovative ideas into scalable digital solutions. Passionate about creating impactful technology that drives business growth and enhances user experiences.
            </p>

            {/* Skill Categories */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-5">
              {[
                'React & Next.js',
                'Python & ML',
                'Database Design', 
                'API Development'
              ].map((tag, index) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-gradient-to-r from-card to-card/90 border border-primary/10 rounded-lg text-xs font-medium text-primary hover:border-primary/40 hover:bg-primary/5 hover:scale-105 transition-all duration-300 cursor-default shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-5">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="px-6 py-4 group hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Explore My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="px-6 py-4 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto"
              >
                Let's Collaborate
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-primary/30 rounded-full hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-primary/30 rounded-full hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="p-3 bg-card border border-primary/30 rounded-full hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                aria-label="Download Resume"
              >
                <FileDown className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Professional Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Professional Image Frame */}
              <div className="relative">
                {/* Gradient Border */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl" />
                
                {/* Main Image */}
                <img
                  src={heroPortrait}
                  alt="Rahul Sharma - Software Engineer"
                  className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-xl object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Professional Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg border border-white/20">
                  Software Engineer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};