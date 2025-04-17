
import SectionTitle from "@/components/ui/section-title";
import SkillBadge from "@/components/ui/skill-badge";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const skills = {
    programming: ["Java", "JavaScript", "PHP", "Kotlin", "C++"],
    frontend: ["HTML", "CSS", "Tailwind CSS", "React", "Next.js"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
    tools: ["Git", "Docker", "Firebase", "Postman", "Nginx", "CI/CD"],
    soft: ["Leadership", "Problem-Solving", "Teamwork", "Project Management", "Communication", "Selling"]
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle center>About Me</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-fade-in">
            <p className="text-neutral-gray text-lg">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. I love building responsive, user-friendly applications and solving complex problems.
            </p>
            <p className="text-neutral-gray text-lg">
              My journey in tech began with a strong foundation in Computer Science, and I've since grown into a versatile developer capable of handling both frontend and backend development.
            </p>
            <p className="text-neutral-gray text-lg">
              Currently pursuing BTech in Computer Science & Engineering at Lovely Professional University, I balance my academic pursuits with practical projects and entrepreneurial ventures.
            </p>

            <div className="pt-4">
              <a href="/assets/updatecv4.pdf" download>
                <Button className="bg-purple hover:bg-purple-secondary flex items-center gap-2">
                  <Download size={18} />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-xl font-bold mb-3 text-neutral-dark">Programming Languages</h3>
              <div className="flex flex-wrap">
                {skills.programming.map((skill, index) => (
                  <SkillBadge key={index}>{skill}</SkillBadge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-neutral-dark">Frontend</h3>
              <div className="flex flex-wrap">
                {skills.frontend.map((skill, index) => (
                  <SkillBadge key={index}>{skill}</SkillBadge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-neutral-dark">Backend</h3>
              <div className="flex flex-wrap">
                {skills.backend.map((skill, index) => (
                  <SkillBadge key={index}>{skill}</SkillBadge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-neutral-dark">Databases</h3>
              <div className="flex flex-wrap">
                {skills.databases.map((skill, index) => (
                  <SkillBadge key={index}>{skill}</SkillBadge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-neutral-dark">Tools</h3>
              <div className="flex flex-wrap">
                {skills.tools.map((skill, index) => (
                  <SkillBadge key={index}>{skill}</SkillBadge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-neutral-dark">Soft Skills</h3>
              <div className="flex flex-wrap">
                {skills.soft.map((skill, index) => (
                  <SkillBadge key={index}>{skill}</SkillBadge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
