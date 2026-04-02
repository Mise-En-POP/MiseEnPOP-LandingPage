import { Card } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const features = [
  {
    category: 'For Professionals',
    title: 'Take Control',
    items: [
      'Build your professional profile',
      'Showcase your skills and experience',
      'Connect with venues and customers'
    ]
  },
  {
    category: 'For Brands',
    title: 'Connect with Talent',
    items: [
      'Access vetted professionals',
      'Build lasting relationships',
      'Get events Analytics and insights'
    ]
  },
  {
    category: 'For Customers',
    title: 'Deepen Relationships',
    items: [
      'Support your favorite bar talent',
      'Discover new bartenders to connect with',
      'Enjoy tailored experiences'
    ]
  }
];

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section 
      id="features"
      ref={ref}
      className={`py-[100px] bg-white transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`} 
      data-testid="section-features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-semibold text-4xl md:text-5xl text-foreground mb-6">
            Built for Everyone in Hospitality
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform creates value for every stakeholder in the hospitality ecosystem
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="feature-card p-8 space-y-6 hover-elevate transition-shadow duration-300 bg-white"
              data-testid={`feature-card-${index}`}
            >
              <div className="space-y-2">
                <p className="feature-category font-medium text-primary">
                  {feature.category}
                </p>
                <h3 className="feature-title font-semibold text-2xl">
                  {feature.title}
                </h3>
              </div>
              
              <ul className="feature-list space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className="text-muted-foreground"
                    data-testid={`feature-item-${index}-${itemIndex}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
