
import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  center?: boolean;
}

const SectionTitle = ({ children, center = false }: SectionTitleProps) => {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold font-display mb-8 relative inline-block ${center ? 'text-center w-full' : ''}`}>
      {children}
      <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-purple rounded-full"></span>
    </h2>
  );
};

export default SectionTitle;
