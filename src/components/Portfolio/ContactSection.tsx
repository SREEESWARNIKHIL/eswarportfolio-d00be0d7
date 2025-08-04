import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "eswarnikhil449@gmail.com",
      href: "mailto:eswarnikhil449@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 94926 36455",
      href: "tel:+919492636455"
    },
    {
      icon: Phone,
      label: "Alternative Phone",
      value: "+91 8985669288",
      href: "tel:+918985669288"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vijayawada, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/eswarnikhil/",
      color: "text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/srieswarnikhil/ampmjobs-portal/tree/main/ampmjobs_develop_v1",
      color: "text-foreground"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? Let's connect!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Contact Information */}
            <Card className="p-8 bg-gradient-card border-0 shadow-elegant">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="p-2 bg-portfolio-gradient-start/10 rounded-lg group-hover:bg-portfolio-gradient-start/20 transition-colors">
                        <IconComponent className="h-5 w-5 text-portfolio-gradient-start" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        {contact.href !== "#" ? (
                          <a
                            href={contact.href}
                            className="font-medium hover:text-portfolio-gradient-start transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="font-medium">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-8 bg-gradient-card border-0 shadow-elegant">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
              </p>
              
              <div className="space-y-4 mb-6">
                <Button asChild className="w-full shadow-glow">
                  <a href="mailto:eswarnikhil449@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <a href="tel:+919492636455">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:shadow-glow transition-all"
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <IconComponent className={`h-4 w-4 ${social.color}`} />
                          {social.label}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-primary border-0 shadow-glow">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Whether you're looking for a dedicated developer for your team or need help bringing your ideas to life, 
                I'm here to help make it happen.
              </p>
              <Button variant="secondary" size="lg" asChild className="shadow-elegant">
                <a href="mailto:eswarnikhil449@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Start a Conversation
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;