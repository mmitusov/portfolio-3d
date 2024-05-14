"use client";

import { StarsCanvas } from '@/components/canvas';
import * as Components from '@/components';
const { Navbar, Hero, About, Experience, Tech, Work, Feedback, Contact } = Components;

export default function Home() {
  return ( 
    <main className="relative z-0 bg-primary text-white">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> {/* We created 'bg-hero-pattern' background inside tailwind.config.ts */}
        <Navbar />
        <Hero />
      </div>

      <About />
      <Experience />
      <Tech />
      <Work />
      <Feedback />

      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </main>
  )
}
