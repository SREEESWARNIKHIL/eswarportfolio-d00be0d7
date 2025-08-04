import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const education = {
    degree: "B.TECH. in Computer Science",
    institution: "LINGAYAS Institute of Technology",
    location: "Vijayawada",
    duration: "Jun 2018 - Jul 2022",
    description: "Comprehensive computer science education with focus on programming, algorithms, and software development."
  };

  const course = {
    title: "MERN Stack Development",
    provider: "Nxtwave",
    description: "Intensive full-stack development course covering MongoDB, Express.js, React, and Node.js with hands-on projects."
  };

  const achievements = [
    "Successfully handled end-to-end development of front-end applications with minimal supervision",
    "Successfully worked with a team to deliver projects within tight deadlines, ensuring smooth collaboration and task coordination",
    "Developed expertise in multiple programming languages and frameworks",
    "Built and deployed production-ready web applications"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional accomplishments in software development
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education */}
          <Card className="p-8 bg-gradient-card border-0 shadow-elegant">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-portfolio-gradient-start/10 rounded-lg">
                <GraduationCap className="h-8 w-8 text-portfolio-gradient-start" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
                <h4 className="text-lg font-semibold text-portfolio-gradient-start mb-2">
                  {education.institution}
                </h4>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{education.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{education.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {education.description}
                </p>
              </div>
            </div>
          </Card>

          {/* Course */}
          <Card className="p-8 bg-gradient-card border-0 shadow-elegant">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-portfolio-accent/10 rounded-lg">
                <Award className="h-8 w-8 text-portfolio-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <h4 className="text-lg font-semibold text-portfolio-accent mb-4">
                  {course.provider}
                </h4>
                <p className="text-muted-foreground">
                  {course.description}
                </p>
                <div className="flex gap-2 mt-4">
                  <Badge className="bg-portfolio-gradient-start/10 text-portfolio-gradient-start">
                    MERN Stack
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Achievements */}
          <Card className="p-8 bg-gradient-card border-0 shadow-elegant">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="p-2 bg-portfolio-warning/10 rounded-lg">
                <Award className="h-6 w-6 text-portfolio-warning" />
              </div>
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-portfolio-surface-hover rounded-lg">
                  <div className="w-2 h-2 bg-portfolio-gradient-start rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;