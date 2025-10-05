import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-darker-navy/30 to-background">
      <div className="max-w-6xl mx-auto">
        
        {/* Professional Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          
          {/* Professional Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Rushikesh Bobade
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Computer Engineering student specializing in full-stack development, machine learning, and innovative software solutions. Committed to creating impactful technology.
            </p>
            
            {/* Professional Status */}
            <div className="inline-flex items-center gap-2 text-sm bg-primary/10 px-3 py-2 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-primary font-medium">Available for collaboration</span>
            </div>
          </div>

          {/* Professional Links */}
          <div className="grid grid-cols-2 gap-8">
            
            {/* Navigation */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Navigation</h4>
              <ul className="space-y-3">
                {[
                  { label: "About", id: "about" },
                  { label: "Skills", id: "skills" }, 
                  { label: "Projects", id: "projects" },
                  { label: "Contact", id: "contact" }
                ].map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() =>
                        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="text-muted-foreground hover:text-primary transition-colors text-left w-full"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Social */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Connect</h4>
              <div className="space-y-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:rahul.sharma@email.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Bottom Bar */}
        <div className="pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center items-center gap-4">
            {/* Copyright */}
            <div className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Rushikesh Bobade. All rights reserved.
            </div>
            {/* Back to top */}
            <div className="flex items-center gap-6 text-sm">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
