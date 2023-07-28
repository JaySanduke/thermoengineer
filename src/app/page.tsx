import React from 'react';

// Sections
import HeroSection from '@/components/sections/hero/hero.tsx';
import AboutSection from '@/components/sections/about/about.tsx';
import ServicesSection from '@/components/sections/services/services.tsx';
import CompanyLogo from '@/components/sections/company_logo/companyLogo.tsx';
import Contact from '@/components/sections/contact/contact';

export default function Home() {
  return (
    <main id="main" className="">
      {/* <Head>
        <title>My page title</title>
      </Head> */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CompanyLogo />
      <Contact />
    </main>
  )
}
