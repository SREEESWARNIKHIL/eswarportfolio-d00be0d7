import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, ShoppingCart, Users } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "PrintShoppy",
      description: "E-commerce platform offering decoration and fashion products with responsive design based on Figma specifications.",
      icon: ShoppingCart,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Figma"],
      features: [
        "Responsive e-commerce pages",
        "Figma design implementation",
        "Enhanced user experience",
        "Cross-platform compatibility"
      ],
      type: "E-commerce Platform"
    },
    {
      title: "ampmjobs",
      description: "Platform connecting students and individuals to part-time earning opportunities using their skills.",
      icon: Users,
      technologies: ["Java", "Spring MVC", "PostgreSQL", "REST APIs", "SQL"],
      features: [
        "Modular web pages for multiple user types",
        "Optimized SQL queries and functions",
        "RESTful API integration",
        "Debugging workflows implementation",
        "Server deployment"
      ],
      type: "Job Platform",
      github: "https://github.com/srieswarnikhil/ampmjobs-portal/tree/main/ampmjobs_develop_v1"
    },
    {
      title: "Hotel Booking Dashboard",
      description: "Data visualization dashboard for hotel booking analysis with interactive charts and reports.",
      icon: BarChart3,
      technologies: ["Tableau", "Microsoft Excel", "Data Analysis", "Pivot Tables"],
      features: [
        "Interactive visualizations with Tableau",
        "Bar charts, pie charts, and line charts",
        "Excel reports and pivot tables",
        "Trend analysis and customer behavior insights",
        "Revenue monitoring capabilities"
      ],
      type: "Data Visualization"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development work across different domains and technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="p-6 bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-portfolio-gradient-start/10 rounded-lg">
                    <IconComponent className="h-6 w-6 text-portfolio-gradient-start" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.type}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-portfolio-surface-hover text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Details
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;