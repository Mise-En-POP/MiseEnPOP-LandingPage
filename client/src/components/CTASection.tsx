import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist signup:', email);
    setEmail('');
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-chart-2" data-testid="section-cta">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h2 className="font-bold text-4xl md:text-5xl text-white leading-tight">
            Ready to Transform Hospitality?
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Be among the first to experience the future of hospitality work. Join our waitlist and get exclusive early access to Jenry and Bar Connect.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/95 border-white/20 text-foreground placeholder:text-muted-foreground min-h-12"
                data-testid="input-email"
              />
              <Button 
                type="submit"
                size="lg"
                variant="secondary"
                className="bg-foreground text-white hover:bg-foreground/90 min-h-12 px-8"
                data-testid="button-join-waitlist"
              >
                Join Waitlist
              </Button>
            </div>
          </form>
          
          <p className="text-sm text-white/70">
            Be first to experience the future of hospitality. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}
