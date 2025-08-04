import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skills = [
    { category: "Frontend", skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 }
    ]},
    { category: "Backend", skills: [
      { name: "Node.js", level: 80 },
      { name: "Java", level: 75 },
      { name: "Spring MVC", level: 70 }
    ]},
    { category: "Database", skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "SQLite", level: 85 }
    ]},
    { category: "Data Analysis", skills: [
      { name: "Microsoft Excel", level: 85 },
      { name: "Tableau", level: 80 },
      { name: "NumPy", level: 70 }
    ]},
    { category: "Tools & Technologies", skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "Postman", level: 80 },
      { name: "Express.js", level: 75 }
    ]}
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various technologies and tools
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category) => (
            <Card key={category.category} className="p-6 bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-portfolio-gradient-start">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;