import { Smartphone, Calendar, Award, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import jenryMockup from '@assets/generated_images/Jenry_app_iPhone_mockup_cb7cf8bf.png';

const features = [
  {
    icon: Smartphone,
    title: 'Professional Network',
    description: 'Connect with venues, colleagues, and customers in one unified platform'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Take control of your time with intelligent scheduling tools'
  },
  {
    icon: Award,
    title: 'Career Growth',
    description: 'Track achievements and showcase your skills as you grow'
  },
  {
    icon: TrendingUp,
    title: 'Fair Compensation',
    description: 'Manage earnings and get paid what you\'re worth with transparency'
  }
];

export default function SolutionSection() {
  return (
    <section className="py-20 md:py-32 bg-accent/30" data-testid="section-solution">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <img 
              src={jenryMockup} 
              alt="Jenry App Interface" 
              className="max-w-sm w-full drop-shadow-2xl"
              data-testid="img-jenry-mockup"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <Badge className="bg-chart-2 text-foreground hover:bg-chart-2" data-testid="badge-coming-soon">
                Coming Soon
              </Badge>
              <h2 className="font-semibold text-4xl md:text-5xl text-foreground">
                Meet Jenry: Your Career, Your Terms
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The first platform designed specifically for hospitality professionals who want to take control of their careers and earnings.
              </p>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index} 
                    className="flex gap-4"
                    data-testid={`feature-${index}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
