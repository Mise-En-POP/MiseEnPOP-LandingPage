import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const metrics = [
  {
    number: 'ONE',
    label: 'Mission',
    description: 'Empowering hospitality talent through human centered technology.'
  },
  {
    number: 'ONE',
    label: 'Product',
    description: 'Flagship Networking Platform: Launching 2026.'
  },
  {
    number: 'INFINITE',
    label: 'Possibilities',
    description: 'Building an ecosystem where the craft of the individual is the foundation of every experience.'
  }
];

export default function ImpactSection() {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section 
      ref={ref}
      className={`py-20 md:py-32 relative overflow-hidden transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ background: 'radial-gradient(circle at center, #f39c12 0%, #d35400 40%, #1c2555 100%)' }}
      data-testid="section-impact">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-semibold text-4xl md:text-5xl text-white mb-6" style={{ textShadow: '0px 2px 10px rgba(0, 0, 0, 0.5)' }}>
            Our Impact
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto" style={{ textShadow: '0px 2px 10px rgba(0, 0, 0, 0.5)' }}>
            Building the future of hospitality, one connection at a time
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto rounded-2xl p-8"
          style={{ 
            backdropFilter: 'blur(8px)', 
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center space-y-4"
              data-testid={`metric-${index}`}
            >
              <div className="text-4xl md:text-5xl text-white impact-one" style={{ textShadow: '0px 2px 10px rgba(0, 0, 0, 0.5)' }}>
                {metric.number}
              </div>
              
              <div>
                <div className="text-xl font-bold mb-2" style={{ color: '#fdf5e6', letterSpacing: '0.15rem', textShadow: '0px 2px 10px rgba(0, 0, 0, 0.5)' }}>
                  {metric.label}
                </div>
                <div className="font-medium" style={{ color: '#FFFFFF', textShadow: '0px 2px 10px rgba(0, 0, 0, 0.5)' }}>
                  {metric.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
