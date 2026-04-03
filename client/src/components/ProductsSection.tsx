import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import almibarLogo from '@assets/almibar-logo-horizontal.png';

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

          <div className="p-10 md:p-12 lg:p-16 space-y-6 relative z-10">
            <div className="text-center">
              <span
                className="block mb-7 text-[21px] italic font-semibold tracking-wide"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: '#C4956C' }}
              >
                Introducing
              </span>

              <img
                src={almibarLogo}
                alt="almíbar logo"
                className="h-[80px] sm:h-[80px] h-[56px] mx-auto"
              />

              <p className="mt-6 mb-6 mx-auto max-w-[340px]" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                <span className="text-xl font-normal" style={{ color: '#1e293b' }}>Hospitality </span>
                <span
                  className="text-[22px] italic font-normal"
                  style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: '#E86835' }}
                >
                  for
                </span>
                <span className="text-xl font-normal" style={{ color: '#1e293b' }}> Hospitality</span>
              </p>

              <p className="text-base leading-relaxed text-muted-foreground max-w-[680px] mx-auto mb-9">
                Where world-class talent builds their legacy, premium brands discover tastemakers, venues reach new audiences, and enthusiasts follow the flavor.
              </p>

              <a
                href="https://almibar.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg text-base font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5"
                style={{
                  backgroundColor: '#1e293b',
                  color: '#F0E0CC',
                  border: '1px solid #1e293b',
                  boxShadow: '0 2px 8px rgba(30, 42, 94, 0.15)',
                }}
                data-testid="button-early-access"
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = '#FF7151';
                  el.style.color = '#ffffff';
                  el.style.borderColor = '#FF7151';
                  el.style.boxShadow = '0 6px 16px rgba(255, 113, 81, 0.35)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = '#1e293b';
                  el.style.color = '#F0E0CC';
                  el.style.borderColor = '#1e293b';
                  el.style.boxShadow = '0 2px 8px rgba(30, 42, 94, 0.15)';
                }}
              >
                Get Early Access
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
