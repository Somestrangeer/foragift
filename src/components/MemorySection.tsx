import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface MemorySectionProps {
  title: string;
  year: string;
  children: ReactNode;
  imagePath: string;
  imagePosition?: 'left' | 'right';
  className?: string;
}

export const MemorySection = ({ 
  title, 
  year, 
  children, 
  imagePath,
  imagePosition = 'left',
  className = "" 
}: MemorySectionProps) => {
  return (
    <section className={`py-20 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${
          imagePosition === 'right' ? 'lg:grid-flow-col-dense' : ''
        }`}>
          {/* Контент */}
          <div className={`space-y-6 animate-fade-up ${
            imagePosition === 'right' ? 'lg:col-start-1' : ''
          }`}>
            <div className="space-y-2">
              <span className="text-primary font-script text-2xl animate-glow">
                {year}
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-romantic text-foreground">
                {title}
              </h2>
            </div>
            <div className="text-lg text-muted-foreground leading-relaxed">
              {children}
            </div>
          </div>
          
          {/* Медиа контейнер */}
          <div className={`${imagePosition === 'right' ? 'lg:col-start-2' : ''}`}>
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border/20 shadow-romantic hover:shadow-romantic/80 transition-all duration-500 group">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <img src={`/${imagePath}`} alt="Описание фото" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};