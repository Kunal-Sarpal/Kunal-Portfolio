
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  link, 
  github 
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden border border-border/40 transition-all duration-300 h-full bg-white hover:shadow-lg hover:shadow-purple/5 hover:border-purple/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48 flex justify-center items-center ">
        <img 
          src={image} 
          alt={title} 
          className={`w-20 h-20 object-cover transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-display text-neutral-dark">{title}</CardTitle>
        <div className="flex flex-wrap mt-2">
          {technologies.map((tech, index) => (
            <span key={index} className="text-xs mr-2 mb-1 px-2 py-1 bg-secondary rounded-full font-medium text-neutral-gray">
              {tech}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-neutral-gray">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2">
        {github && (
          <Button 
            variant="outline" 
            size="sm" 
            className="text-sm gap-1 hover:text-purple hover:border-purple"
            asChild
          >
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> Code
            </a>
          </Button>
        )}
        {link && (
          <Button 
            variant="default" 
            size="sm" 
            className="text-sm gap-1 bg-purple hover:bg-purple-secondary"
            asChild
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} /> Visit
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
