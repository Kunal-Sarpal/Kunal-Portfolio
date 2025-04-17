
import { ReactNode } from "react";

interface SkillBadgeProps {
  children: ReactNode;
  className?: string;
}

const SkillBadge = ({ children, className = "" }: SkillBadgeProps) => {
  return (
    <span className={`inline-block px-3 py-1.5 bg-purple-light/30 text-purple-dark font-medium rounded-full text-sm mr-2 mb-2 transition-all hover:bg-purple hover:text-white ${className}`}>
      {children}
    </span>
  );
};

export default SkillBadge;
