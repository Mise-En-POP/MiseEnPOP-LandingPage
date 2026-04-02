import { useState } from 'react';
import Logo from './Logo';
import { Mail } from 'lucide-react';
import PrivacyTermsModal from './PrivacyTermsModal';

const footerLinks = {
  company: [
    { label: 'About', href: '#features' }
  ]
};

export default function Footer() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  return (
    <footer className="bg-foreground text-white py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <Logo variant="dark" />
            <p className="text-white/70 leading-relaxed">
              Elevating the people who are the heart of the experience.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                    data-testid={`link-${link.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <button 
                  onClick={() => setPrivacyModalOpen(true)}
                  className="text-white/70 hover:text-primary transition-colors text-left"
                  data-testid="button-privacy-terms"
                >
                  Privacy & Terms
                </button>
              </li>
            </ul>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Contact</h4>
              <a 
                href="mailto:info@miseenpop.com?subject=Inquiry%20About%20Mise%20En%20POP"
                className="flex items-center gap-2 text-primary hover:text-chart-2 transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4" />
                info@miseenpop.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Mise En POP LLC. All rights reserved.</p>
        </div>
      </div>
      
      <PrivacyTermsModal open={privacyModalOpen} onOpenChange={setPrivacyModalOpen} />
    </footer>
  );
}
