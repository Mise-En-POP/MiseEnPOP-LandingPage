import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';
import ceoImage from '@assets/Gemini_Generated_Image_3o16r3o16r3o16r3_1761165750715.png';
import ctoImage from '@assets/Gemini_Generated_Image_xk8l63xk8l63xk8l_1761165805305.png';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const team = [
  {
    name: 'Jucely Marie Rivera',
    role: 'CEO',
    image: ceoImage,
    bio: 'After 16 years in enterprise technology, now combining analytical expertise with creative problem-solving to build solutions for the hospitality industry. Fell in love with NYC\'s hospitality community and witnessed firsthand where technology could genuinely serve this human-centered industry. An expert at wearing multiple hats, passionate about creating solutions that support users through transitions while honoring hospitality\'s relationship-driven nature.',
    linkedin: 'https://www.linkedin.com/in/jucely/'
  },
  {
    name: 'Samuel Rivera',
    role: 'CTO',
    image: ctoImage,
    bio: 'Senior Full Stack Engineer with 15 years building scalable web applications, specializing in React, TypeScript, and modern full-stack development. Track record of shipping high-impact features and leading critical technical migrations at AI startups and education platforms. Thrives at the intersection of design and engineering, passionate about AI-assisted development and building products that solve real problems.',
    linkedin: 'https://www.linkedin.com/in/samrivera-eng/'
  }
];

export default function TeamSection() {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section 
      ref={ref}
      className={`py-20 md:py-32 bg-white transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`} 
      data-testid="section-team">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-semibold text-4xl md:text-5xl text-foreground mb-6">
            Meet Our Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experienced leaders committed to revolutionizing the hospitality industry
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`team-card-${index}`}
            >
              <div className="h-2 bg-gradient-to-r from-primary to-chart-2" />
              
              <div className="p-8 space-y-6">
                <div className="flex items-start gap-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover ring-4 ring-accent"
                    data-testid={`img-team-${index}`}
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-2xl text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-lg mb-4">
                      {member.role}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="gap-2"
                      data-testid={`button-linkedin-${index}`}
                      onClick={() => {
                        console.log(`LinkedIn clicked for ${member.name}`);
                        window.open(member.linkedin, '_blank');
                      }}
                    >
                      <Linkedin className="w-4 h-4" />
                      Connect
                    </Button>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
