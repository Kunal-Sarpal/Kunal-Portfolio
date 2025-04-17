
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

interface AchievementCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const AchievementCard = ({ 
  title, 
  description,
  icon = <Award className="text-purple" />
}: AchievementCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border border-border/30 hover:border-purple/20">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="bg-purple/10 p-2 rounded-full">
          {icon}
        </div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-neutral-gray">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default AchievementCard;
