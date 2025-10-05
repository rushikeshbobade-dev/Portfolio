import { GraduationCap, Award, Code2, Rocket, Target, Users, TrendingUp, Lightbulb } from "lucide-react";

export const About = () => {
  const professionalHighlights = [
    {
      icon: GraduationCap,
      title: "Career Objective",
      description: "Motivated and curious learner with expertise in C++, Python, and problem-solving.",
      detail: "Seeking opportunities to sharpen skills, contribute to impactful engineering solutions, and grow continuously."
    },
    {
      icon: Code2,
      title: "Technical Skills",
      description: "Languages: C, C++, JavaScript (familiar with Python & Java).",
      detail: "Web Development: HTML, CSS, JavaScript, ejs, Node.js, Express.js, Next.js."
    },
    {
      icon: TrendingUp,
      title: "Database & Frameworks",
      description: "Database: SQL, MongoDB.",
      detail: "Frameworks: Bootstrap, Tailwind CSS, ShadCN, Asernity UI."
    },
    {
      icon: Award,
      title: "Developer Tools & Soft Skills",
      description: "Developer Tools: Git, GitHub, Linux (basic).",
      detail: "Soft Skills: Communication, Leadership, Team Management."
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Strategic Thinking",
      description: "I approach complex problems with analytical thinking and systematic solutions that deliver measurable results."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong believer in teamwork and collaborative development practices that enhance project outcomes."
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "Passionate about staying at the forefront of technology through continuous education and innovation."
    },
    {
      icon: Rocket,
      title: "Impact-Driven",
      description: "Focused on creating solutions that not only meet requirements but exceed expectations and drive real value."
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-darker-navy/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Professional Profile</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
            Engineering Tomorrow's 
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Merging academic excellence with hands-on experience to deliver innovative technology solutions that drive business success.
          </p>
        </div>

        {/* Professional Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Professional Background */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">My Professional Journey</h3>
          <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full"></div>
                  <div className="absolute left-1.5 top-5 w-0.5 h-24 bg-gradient-to-b from-primary to-transparent"></div>
                  <div>
                    <h4 className="font-semibold text-lg">Bachelor of Technology in Information Technology</h4>
                    <p className="text-muted-foreground mb-2">JSPM’s Rajarshi Shahu College of Engineering, Tathawade</p>
                    <p className="text-sm text-foreground/70">Nov. 2023 - May 2027 | CGPA : 9.01 (Sem-4)</p>
                  </div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-secondary rounded-full"></div>
                  <div className="absolute left-1.5 top-5 w-0.5 h-24 bg-gradient-to-b from-secondary to-transparent"></div>
                  <div>
                    <h4 className="font-semibold text-lg">Higher Secondary Certificate (HSC)</h4>
                    <p className="text-muted-foreground mb-2">Shri Bhairavnath Secondary and Higher Secondary College, Bhosari</p>
                    <p className="text-sm text-foreground/70">Jun. 2021 - Mar. 2023 | Percentage :80.50</p>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-accent rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-lg">Secondary School Certificate (SSC)</h4>
                    <p className="text-muted-foreground mb-2">Sheth Ramdhari Ramchandra Agarwal School, Bhosari</p>
                    <p className="text-sm text-foreground/70">Jun. 2018 – Mar. 2021 | Percentage :93.20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Skills Overview */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Technical Capabilities</h3>
              <div className="space-y-4">
                {professionalHighlights.map((item, index) => (
                  <div key={item.title} className="p-4 bg-card/50 border border-primary/10 rounded-lg hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg mt-1">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-muted-foreground text-sm mb-1">{item.description}</p>
                        <p className="text-xs text-primary font-medium">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-primary">Professional Values</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The principles that guide my approach to technology and collaboration in professional environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="group p-6 bg-gradient-to-br from-card to-card/80 border border-primary/10 rounded-xl hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold mb-3">{value.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Streamlined Call to Action */}
        <div className="text-center mt-16 p-6 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-xl border border-primary/10">
          <h3 className="text-xl font-bold mb-3 text-primary">Ready to Collaborate?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            I'm passionate about building innovative solutions and contributing to meaningful projects. Let's create something extraordinary together.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-all duration-300"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
};