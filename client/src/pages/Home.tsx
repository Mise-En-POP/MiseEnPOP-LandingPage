import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProductsSection from '@/components/ProductsSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <div id="products">
        <ProductsSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <Footer />
    </div>
  );
}
