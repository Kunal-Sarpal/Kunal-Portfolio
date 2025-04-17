
import SectionTitle from "@/components/ui/section-title";
import ContactForm from "@/components/ui/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle center>Contact Me</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-lg text-neutral-gray">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through the form or via my contact details.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-purple/10 p-3 rounded-full">
                  <Mail className="text-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-dark">Email</h3>
                  <a href="mailto:sarpalkunal8@gmail.com" className="text-neutral-gray hover:text-purple transition-colors">
                    sarpalkunal8@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple/10 p-3 rounded-full">
                  <Phone className="text-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-dark">Phone</h3>
                  <a href="tel:+917814505429" className="text-neutral-gray hover:text-purple transition-colors">
                    +91 7814505429
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple/10 p-3 rounded-full">
                  <MapPin className="text-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-dark">Location</h3>
                  <p className="text-neutral-gray">
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
