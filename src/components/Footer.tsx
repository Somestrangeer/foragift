export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-dark border-t border-border/20">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h3 className="text-3xl font-script text-primary animate-glow">
          С любовью ❤️
        </h3>
        <p className="text-muted-foreground">
          Каждый день с тобой — это подарок
        </p>
        <div className="flex justify-center space-x-2 text-primary/60">
          <span className="animate-float">✨</span>
          <span className="animate-float delay-300">💕</span>
          <span className="animate-float delay-700">✨</span>
        </div>
      </div>
    </footer>
  );
};