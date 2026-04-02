import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function ProblemSection() {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section 
      ref={ref}
      className={`py-[100px] md:py-[100px] bg-accent/30 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`} 
      data-testid="section-philosophy">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-5xl text-foreground mb-8 text-center px-2">
          Our Philosophy:<br className="sm:hidden" /> People Over Places
        </h2>
        
        <p className="philosophy-text text-muted-foreground">
          <span className="philosophy-hook">In</span> the culinary world, <em>mise en place</em> is the foundational ritual of 'putting everything in its place.' It is the art of being ready. At Mise En POP, we believe the heart of that readiness is the person rather than the tools or the setting. We elevate the exceptional individuals who are the core of the hospitality experience, providing the digital infrastructure they need to thrive wherever their journey takes them.
        </p>
      </div>
    </section>
  );
}
