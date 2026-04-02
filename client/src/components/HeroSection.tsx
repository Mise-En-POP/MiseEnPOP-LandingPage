import heroImage from '@assets/generated_images/Wide_angle_bar_scene_0e3f8492.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/70" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 md:py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl tracking-hero leading-tight hero-animated-title max-w-6xl mx-auto">Elevating the People Who Craft the Experience</h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-normal">Mise En POP is a hospitality-first product studio built on a simple conviction: People Over Places. We create the digital tools that empower hospitality's elite talent to own their professional journey.</p>
        </div>
      </div>
    </section>
  );
}
