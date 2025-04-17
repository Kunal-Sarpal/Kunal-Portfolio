
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20 lg:py-0">
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-light/30 rounded-full filter blur-3xl opacity-70 -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple/20 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex flex-col space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold font-display text-neutral-dark animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Hi, I'm <span className="text-purple">Kunal Sarpal</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-neutral-gray font-medium animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Full Stack Developer
            </h2>
          </div>
          
          <p className="text-lg text-neutral-gray max-w-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Building innovative web solutions with modern technologies.
            Specializing in React, Next.js, Node.js, and more.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button className="bg-purple hover:bg-purple-secondary transition-colors duration-300">
              <a href="#contact" className="flex items-center gap-2">
                <Mail size={18} /> Contact Me
              </a>
            </Button>
            <Button variant="outline" className="border-purple text-purple hover:bg-purple hover:text-white transition-colors duration-300">
              <a href="#projects" className="flex items-center gap-2">
                View Projects
              </a>
            </Button>
          </div>
          
          <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
            <a 
              href="https://www.linkedin.com/in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-gray hover:text-purple transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-gray hover:text-purple transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a 
              href="mailto:sarpalkunal8@gmail.com"
              className="text-neutral-gray hover:text-purple transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
            <a 
              href="tel:+917814505429"
              className="text-neutral-gray hover:text-purple transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone size={22} />
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center items-center animate-float">
        
          <div className="w-64 relative h-64 md:w-80 md:h-80 bg-gradient-to-br  from-purple to-purple-light rounded-full relative flex items-center justify-center overflow-hidden border-8 border-white shadow-lg">
          
            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg" 
              alt="Kunal Sarpal" 
              className="w-full absolute  h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown className="text-purple" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
