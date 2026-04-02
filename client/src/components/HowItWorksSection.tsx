const steps = [
  {
    number: '1',
    title: 'Sign Up',
    description: 'Create your profile and showcase your skills and experience'
  },
  {
    number: '2',
    title: 'Connect',
    description: 'Build relationships with venues, colleagues, and customers'
  },
  {
    number: '3',
    title: 'Manage',
    description: 'Control your schedule, earnings, and professional presence'
  },
  {
    number: '4',
    title: 'Thrive',
    description: 'Track progress, earn rewards, and grow your career'
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32 bg-foreground relative overflow-hidden" data-testid="section-how-it-works">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-chart-2 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-semibold text-4xl md:text-5xl text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Getting started is simple and takes just minutes
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative" data-testid={`step-${index}`}>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 border-t-2 border-dashed border-primary/30" />
              )}
              
              <div className="relative text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-chart-2 flex items-center justify-center relative z-10">
                    <span className="font-bold text-5xl text-foreground">
                      {step.number}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-2xl text-white">
                  {step.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
