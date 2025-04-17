
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: ReactNode;
  link?: string;
}

const ExperienceCard = ({ 
  title, 
  company, 
  period, 
  description,
  link
}: ExperienceCardProps) => {
  return (
    <Card className="mb-6 border-l-4 border-l-purple animate-fade-in hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <CardTitle className="text-xl font-display">
            {title}
          </CardTitle>
          <div className="flex items-center text-sm text-neutral-gray font-medium">
            <CalendarDays size={14} className="mr-1" />
            {period}
          </div>
        </div>
        <CardDescription className="font-medium text-base text-purple">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {company}
            </a>
          ) : (
            company
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {description}
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
