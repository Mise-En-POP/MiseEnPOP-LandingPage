import { useState, useEffect } from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Switch to scrolled state when past the hero section (viewport height - header height)
      const heroHeight = window.innerHeight - 100;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    // Wait for menu animation to start, then navigate
    setTimeout(() => {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Update URL hash
      window.history.pushState(null, '', target);
    }, 100);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/70 backdrop-blur-sm shadow-sm border-b border-white/20' 
            : 'bg-transparent'
        }`}
        data-testid="header"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between relative">
            <Logo variant={isScrolled ? 'light' : 'dark'} isScrolled={isScrolled} />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-20 absolute left-1/2 -translate-x-1/2">
              <a 
                href="#products" 
                className={`text-xl font-bold transition-colors ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-chart-2'
                }`}
                data-testid="link-products"
              >
                Our Flagship
              </a>
              <a 
                href="#team" 
                className={`text-xl font-bold transition-colors ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-chart-2'
                }`}
                data-testid="link-team"
              >
                Our Team
              </a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(true)}
              data-testid="button-mobile-menu"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Desktop Contact Button */}
            <Button 
              size="sm"
              className={`hidden md:inline-flex ${isScrolled ? '' : 'bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20'}`}
              variant={isScrolled ? 'default' : 'outline'}
              data-testid="button-contact-us"
              onClick={() => {
                console.log('Contact Us clicked');
                window.location.href = 'mailto:info@miseenpop.com?subject=Inquiry%20About%20Mise%20En%20POP';
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-foreground md:hidden animate-in slide-in-from-right duration-300"
          data-testid="mobile-menu"
        >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <Logo variant="dark" isScrolled={false} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white"
              data-testid="button-close-mobile-menu"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-8 px-6">
            <a
              href="#products"
              className="text-3xl font-bold text-white hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, '#products')}
              data-testid="link-products-mobile"
            >
              Our Flagship
            </a>
            <a
              href="#team"
              className="text-3xl font-bold text-white hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, '#team')}
              data-testid="link-team-mobile"
            >
              Our Team
            </a>
            <Button
              size="lg"
              className="mt-8"
              data-testid="button-contact-us-mobile"
              onClick={() => {
                window.location.href = 'mailto:info@miseenpop.com?subject=Inquiry%20About%20Mise%20En%20POP';
                setMobileMenuOpen(false);
              }}
            >
              Contact Us
            </Button>
          </nav>
        </div>
        </div>
      )}
    </>
  );
}
