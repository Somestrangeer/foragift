import heroImage from "@/assets/hero-beautiful-couple.jpg";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToMemories = () => {
    const memoriesSection = document.getElementById('memories');
    memoriesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/90" />
      </div>
      
      {/* Контент */}
      <div className="relative z-10 text-center px-4 animate-fade-up">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-8xl font-script text-primary animate-glow">
              5 лет
            </h1>
            <h2 className="text-2xl lg:text-4xl font-romantic font-light text-foreground">
              нашей невероятной истории
            </h2>
          </div>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Каждый момент с тобой — это драгоценное воспоминание, 
            которое я храню в своем сердце
          </p>
          
          <Button 
            onClick={scrollToMemories}
            className="bg-gradient-romantic hover:scale-105 transform transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-romantic hover:shadow-romantic/80"
          >
            Наши воспоминания ✨
          </Button>
        </div>
      </div>
      
      {/* Плавающие элементы */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-float delay-700" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-float delay-1000" />
      </div>
    </section>
  );
};