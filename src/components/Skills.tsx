import React, { useState } from "react";
import { Code2, Database, Globe, Cloud, Shield, Zap } from "lucide-react";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Modern web applications with cutting-edge user experiences",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 50, experience: "6 months" },
        { name: "Next.js", level: 60, experience: "8 months" },
        { name: "TypeScript", level: 50, experience: "6 months" },
        { name: "Tailwind CSS", level: 75, experience: "1 years" },
        { name: "HTML5/CSS3", level: 98, experience: "4 years" },
        { name: "JavaScript ES6+", level: 93, experience: "3 years" },
      ],
    },
    {
      title: "Backend Engineering",
      description: "Scalable server-side solutions and API development",
      icon: Code2,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 70, experience: "2 years" },
        { name: "Python", level: 60, experience: "2 years" },
        { name: "Express.js", level: 75, experience: "2 years" },
        { name: "Django", level: 20, experience: "1 year" },
        { name: "FastAPI", level: 10, experience: "1 year" },
        { name: "RESTful APIs", level: 90, experience: "1 years" },
      ],
    },
    {
      title: "Database & Cloud",
      description: "Data management and cloud infrastructure solutions",
      icon: Database,
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "MySQL", level: 88, experience: "2 years" },
        { name: "MongoDB", level: 80, experience: "2 years" },
        { name: "Vercel", level: 85, experience: "2 years" },  
         { name: "Supabase", level: 90, experience: "1 year" },

      ],
    },
    {
      title: "DevOps & Tools",
      description: "Development workflow optimization and deployment",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git/GitHub", level: 95, experience: "4 years" },
        { name: "Linux", level: 82, experience: "2 years" },
        { name: "VS Code", level: 95, experience: "4 years" },
      ],
    },
    {
      title: "Machine Learning",
      description: "AI and data science applications",
      icon: Zap,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Python ML Libraries", level: 78, experience: "1 year" },
        { name: "TensorFlow", level: 70, experience: "6 months" },
        { name: "Scikit-learn", level: 75, experience: "1 year" },
        { name: "Pandas", level: 80, experience: "1 year" },
        { name: "NumPy", level: 77, experience: "1 year" },
        { name: "Jupyter", level: 80, experience: "1 year" },
      ],
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile application development",
      icon: Cloud,
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "React Native", level: 10, experience: "6 months" },
        { name: "Flutter", level: 20, experience: "4 months" },
        { name: "Mobile Design", level: 75, experience: "8 months" },
        { name: "App Deployment", level: 73, experience: "6 months" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-darker-navy/30 via-background to-darker-navy/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Technical Expertise</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6">
            Skills &
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical proficiency across modern development stacks, cloud platforms, and emerging technologies.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-card border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/40'
              }`}
            >
              <category.icon className="w-4 h-4 inline mr-2" />
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Skills */}
        <div className="bg-card/50 border border-primary/20 hover:border-primary/30 rounded-2xl p-8 transition-all duration-500">
          {/* Category Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${skillCategories[activeCategory].color}/20`}>
                {React.createElement(skillCategories[activeCategory].icon, { className: "w-8 h-8 text-primary" })}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">
                {skillCategories[activeCategory].title}
              </h3>
              <p className="text-muted-foreground">
                {skillCategories[activeCategory].description}
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative p-6 bg-gradient-to-br from-card/80 to-card/40 border border-primary/10 rounded-xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 animation-delay-${index * 100}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-lg">{skill.name}</h4>
                  <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg w-[${skill.level}%]`}
                    />
                  </div>
                </div>
                
                {/* Experience */}
                <p className="text-sm text-muted-foreground">
                  {skill.experience} experience
                </p>

                {/* Skill Level Indicator */}
                <div className="mt-3 flex gap-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`w-2 h-2 rounded-full ${
                        level <= skill.level / 20
                          ? 'bg-primary'
                          : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Certifications & Achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-primary">Professional Standouts</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl">
              <h4 className="font-bold mb-2 text-blue-400">Rapid Learner</h4>
              <p className="text-sm text-muted-foreground">
                Consistently mastering new technologies and frameworks within weeks of introduction.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
              <h4 className="font-bold mb-2 text-green-400">Problem Solver</h4>
              <p className="text-sm text-muted-foreground">
                Strong analytical thinking skills with a track record of solving complex technical challenges.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-xl">
              <h4 className="font-bold mb-2 text-purple-400">Team Player</h4>
              <p className="text-sm text-muted-foreground">
                Collaborative development approach with excellent communication and mentorship abilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};