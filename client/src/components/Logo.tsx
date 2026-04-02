import logoTransparent from '@assets/Mise En Pop - Linear, Minimalistic Logo - Color Scale_1761160307478.png';
import logoOnBackground from '@assets/Mise En Pop - Linear, Minimalistic Logo - Color Scale (1)_1761161663341.png';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  isScrolled?: boolean;
}

export default function Logo({ variant = 'light', className = '', isScrolled = false }: LogoProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToTop}
      className={`${className} cursor-pointer`} 
      data-testid="logo"
      aria-label="Return to top"
    >
      <img 
        src={isScrolled ? logoOnBackground : logoTransparent} 
        alt="Mise En POP" 
        className="h-32 w-auto"
      />
    </button>
  );
}
