import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function ProductsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`py-20 md:py-32 bg-gradient-to-b from-accent/20 via-accent/30 to-accent/20 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      data-testid="section-products">
      <div className="max-w-5xl mx-auto px-6">
        <Card className="group relative overflow-visible border border-primary/15 shadow-2xl bg-gradient-to-br from-white via-white to-accent/20 transition-all duration-500 hover:shadow-3xl hover:-translate-y-1" style={{ boxShadow: '0 25px 50px -12px rgba(30, 42, 94, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.8)' }} data-testid="teaser-card">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500 pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-chart-2 to-primary" />

          <div className="p-8 md:p-12 lg:p-16 space-y-8 relative z-10">
            <div className="text-center space-y-6">
              <Badge className="bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 font-medium" data-testid="badge-coming-soon">
                Coming Soon
              </Badge>

              <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                Something Big is Brewing
              </h2>

              <p className="text-xl md:text-2xl font-medium" style={{ color: '#E86835' }}>
                Your Network. Your Regulars. Your Career.
              </p>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We are crafting a human-centered ecosystem that puts the talent first. One platform to cultivate your connections, amplify your work, and take ownership of your craft.</p>
            </div>

            <div className="flex flex-col items-center gap-4 pt-4">
              <Button
                size="lg"
                className="text-lg px-8"
                asChild
                data-testid="button-early-access"
              >
                <a href="https://almibar.app" target="_blank" rel="noopener noreferrer">
                  <Users className="mr-2 w-5 h-5" />
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                For bartenders, ambassadors, and hospitality professionals
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
