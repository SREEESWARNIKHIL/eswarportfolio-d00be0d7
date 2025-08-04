import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-primary opacity-80" />
      <div className="absolute inset-0 bg-background/20" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            K. ESWAR
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-4 font-medium">
            Full Stack Developer
          </p>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate MERN Stack Developer with experience in building responsive web applications, 
            RESTful APIs, and data visualization solutions. Specialized in creating seamless user experiences 
            and robust backend systems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="default" size="lg" className="shadow-glow">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button variant="secondary" size="lg">
              <Github className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-6 text-foreground/60">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Vijayawada, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 94926 36455</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;