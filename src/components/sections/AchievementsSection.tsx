
import SectionTitle from "@/components/ui/section-title";
import AchievementCard from "@/components/ui/achievement-card";
import { Award, Code, GraduationCap } from "lucide-react";

const AchievementsSection = () => {
  const certificates = [
    {
      title: "Ethical Hacking",
      description: "NPTEL - Gained a strong foundation in networking, penetration testing, and cybersecurity concepts."
    },
    {
      title: "Frontend & Backend Development",
      description: "Sheryians Coding School - Built and deployed 10+ full-stack projects, enhancing problem-solving and debugging skills."
    },
    {
      title: "Complete Web Development",
      description: "100xDevs.com - Strengthened expertise in system design, state management, and microservices architecture."
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle center>Achievements & Certifications</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <AchievementCard 
            title="LeetCode"
            description="400+ DSA problems solved, global rank <300K, 200+ active days, strong problem-solving skills."
            icon={<Code className="text-purple" />}
          />
          <AchievementCard 
            title="Geeks for Geeks"
            description="100+ problems solved, rank <6500 among 35K+ students, expertise in DSA topics."
            icon={<Code className="text-purple" />}
          />
        </div>
        
        <h3 className="text-2xl font-bold mb-6 text-neutral-dark">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <AchievementCard 
              key={index}
              title={cert.title}
              description={cert.description}
              icon={
                index === 0 ? 
                <GraduationCap className="text-purple" /> : 
                <Award className="text-purple" />
              }
            />
          ))}
        </div>
        
        <div className="mt-12">
          <SectionTitle>Education</SectionTitle>
          <div className="space-y-6">
            <div className="border-l-4 border-purple pl-6 py-2 animate-fade-in">
              <h3 className="text-xl font-bold text-neutral-dark">BTech - Computer Science & Engineering</h3>
              <p className="text-purple font-medium">Lovely Professional University</p>
              <p className="text-neutral-gray">July 2022 - 2026</p>
              <p className="text-neutral-gray">CGPA: 7.0</p>
            </div>
            <div className="border-l-4 border-purple pl-6 py-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold text-neutral-dark">XII</h3>
              <p className="text-purple font-medium">Bhagwan Mahavir Public School</p>
              <p className="text-neutral-gray">April 2022</p>
              <p className="text-neutral-gray">Percentage: 80%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
