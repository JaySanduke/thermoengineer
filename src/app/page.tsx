import React from 'react';

// Sections
import HeroSection from '../components/sections/hero/hero.tsx';
import AboutSection from '../components/sections/about/about.tsx';

export default function Home() {
  return (
    <main id="main" className="">
      {/* <Head>
        <title>My page title</title>
      </Head> */}
      <HeroSection />
      <AboutSection />
    </main>
  )
}
