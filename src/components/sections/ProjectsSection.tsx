
import SectionTitle from "@/components/ui/section-title";
import ProjectCard from "@/components/ui/project-card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Pocket India",
      description: "Cost-effective OTT subscription platform serving 1,000+ users and handling 200+ orders efficiently.",
      image: "https://logos-download.com/wp-content/uploads/2018/07/Project_logo_eng.svg",
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "https://pocketindia.shop",
      github: "https://github.com/Kunal-Sarpal/pocketindia"
    },
    {
      title: "Ann Data",
      description: "Dynamic front-end prototype app connecting farmers and consumers with real-time product pricing.",
      image: "https://logos-download.com/wp-content/uploads/2018/07/Project_logo_eng.svg",
      technologies: ["Kotlin", "Firebase"],
      link: "https://anndata.example.com",
      github: "https://github.com/Kunal-Sarpal/AnnaData-App"
    },
    {
      title: "Medium",
      description: "Full-featured blogging platform where users can create, update, and delete blogs with a seamless UI.",
      image: "https://logos-download.com/wp-content/uploads/2018/07/Project_logo_eng.svg",
      technologies: ["TypeScript", "React.js", "Tailwind CSS", "PostgreSQL"],
      link: "https://medium-clone.example.com",
      github: "https://github.com/Kunal-Sarpal/Medium"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle center>Projects</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
