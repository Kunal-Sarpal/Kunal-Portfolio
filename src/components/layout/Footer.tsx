
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-display mb-4">
              Kunal<span className="text-purple-light">.dev</span>
            </h3>
            <p className="text-neutral-gray text-sm mb-4">
              Full Stack Developer specializing in React, Next.js, Node.js, and more.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/Kunal-Sarpal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-gray hover:text-purple-light transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-gray hover:text-purple-light transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:sarpalkunal8@gmail.com"
                className="text-neutral-gray hover:text-purple-light transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+917814505429"
                className="text-neutral-gray hover:text-purple-light transition-colors duration-300"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-neutral-gray hover:text-purple-light transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-gray hover:text-purple-light transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-neutral-gray hover:text-purple-light transition-colors duration-300">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-neutral-gray hover:text-purple-light transition-colors duration-300">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">More</h4>
            <ul className="space-y-2">
              <li>
                <a href="#achievements" className="text-neutral-gray hover:text-purple-light transition-colors duration-300">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-gray hover:text-purple-light transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-gray hover:text-purple-light transition-colors duration-300">
                  Resume
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-neutral-gray">
                <strong className="text-white">Email:</strong> sarpalkunal8@gmail.com
              </li>
              <li className="text-neutral-gray">
                <strong className="text-white">Phone:</strong> +91 7814505429
              </li>
              <li className="text-neutral-gray">
                <strong className="text-white">Location:</strong> India
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-gray/20 mt-8 pt-8 text-center text-neutral-gray text-sm">
          <p>© {currentYear} Kunal Sarpal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
