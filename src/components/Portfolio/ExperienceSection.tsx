import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Quantum ITES Private Limited",
      position: "Full Stack Developer",
      location: "Hyderabad",
      duration: "Oct 2023 - May 2025",
      project: "ampmjobs",
      description: "Worked as a Full Stack Developer on the ampmjobs project, a platform that enables individuals, especially students, to earn money using their skills in their free time. The platform connects users to part-time earning opportunities such as event organizing, city/tour guides, designing, and other opportunities.",
      technologies: ["Java", "Spring MVC", "PostgreSQL", "REST APIs"],
      achievements: [
        "Developed modular web pages for Students, Employers, and internal workflows",
        "Writing optimized SQL queries and functions",
        "Integrated backend services using Spring MVC",
        "Building RESTful APIs and implemented debugging workflows",
        "Successfully deployed project to the server"
      ]
    },
    {
      company: "Inkif Infotech LLP",
      position: "Web Developer",
      location: "Vijayawada",
      duration: "Oct 2022 - Sep 2023",
      project: "Printshoppy",
      description: "Worked as a Web Developer on the Printshoppy project an e-commerce website offering a wide range of products related to decoration and fashion. Responsible for developing responsive web pages based on Figma design specifications to enhance the overall user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      achievements: [
        "Designed responsive e-commerce pages based on Figma specifications",
        "Enhanced overall user experience through intuitive design",
        "Successfully delivered projects within tight deadlines",
        "Collaborated effectively with design and development teams"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in software development with hands-on experience in full-stack development
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-portfolio-gradient-start mb-2">
                    {exp.position}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span className="text-lg font-medium">{exp.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2">Project: {exp.project}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-portfolio-surface-hover">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;