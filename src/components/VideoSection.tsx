import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface VideoSectionProps {
  title: string;
  year: string;
  children: ReactNode;
  imagePath: string;
  className?: string;
}

export const VideoSection = ({ 
  title, 
  year, 
  children, 
  imagePath,
  className = "" 
}: VideoSectionProps) => {
  return (
    <section className={`py-20 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
          {/* Контент */}
          <div className={`space-y-6 animate-fade-up`}>
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
          <div>
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border/20 shadow-romantic hover:shadow-romantic/80 transition-all duration-500 group">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <video className="w-full h-full object-cover" src={`${imagePath}`} // убрали /public 
                controls // добавляет кнопки управления
                preload="metadata" // загружает метаданные
              ></video>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
