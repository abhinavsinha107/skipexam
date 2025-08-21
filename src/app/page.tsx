import HeroSection from '@/components/sections/HeroSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import WhatWeCoverSection from '@/components/sections/WhatWeCoverSection';
import GuaranteesSection from '@/components/sections/GuaranteesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import UniversitiesSection from '@/components/sections/UniversitiesSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <HeroSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <WhatWeCoverSection />
      <GuaranteesSection />
      <TestimonialsSection />
      <UniversitiesSection />
      <TechnologiesSection />
      <FinalCTASection />
    </div>
  );
}
