"use client";
import * as Components from '@/components';
const { About, Contact, Experience, Feedbacks, Hero, Loader, Navbar, Tech, Works } = Components;

export default function Home() {
  return ( 
    <main className="relative z-0 bg-primary text-white">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>

      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />

      <div className='relative z-0'>
        <Contact />
      </div>
    </main>
  )
}
