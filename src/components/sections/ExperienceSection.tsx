
import SectionTitle from "@/components/ui/section-title";
import ExperienceCard from "@/components/ui/experience-card";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle>Experience</SectionTitle>
        
        <div className="space-y-6">
          <ExperienceCard
            title="Founder & Lead Developer"
            company="Benzo"
            period="Feb 2024 - Present"
            link="https://benzo.example.com"
            description={
              <ul className="list-disc list-inside space-y-2 text-neutral-gray">
                <li>Developed Benzo, an e-commerce platform enabling users to create and manage online shops, similar to YouTube channels</li>
                <li>Engineered scalable features, support small businesses in expanding globally, increasing visibility and customer reach</li>
                <li>Built a customer recommendation algorithm that personalizes product visibility based on user preferences, boosting engagement by 30%</li>
                <li><span className="text-purple font-medium">Tech stack:</span> React, Next.js, Node.js, MongoDB</li>
              </ul>
            }
          />
          
          <ExperienceCard
            title="Freelancer"
            company="Web Development"
            period="April 2023 - Present"
            link="https://portfolio.example.com"
            description={
              <ul className="list-disc list-inside space-y-2 text-neutral-gray">
                <li>Designed and developed a business portfolio website for an American client, delivering a professional responsive design</li>
                <li>Successfully delivered within deadline, earning $60, demonstrating strong problem-solving and independent work skills</li>
              </ul>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
