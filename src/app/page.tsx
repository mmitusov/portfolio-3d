import * as Components from '@/components';
const { About, Contact, Experience, Feedbacks, Hero, Loader, Navbar, Tech, Works } = Components;
// import { About, Contact, Experience, Feedbacks, Hero, Loader, Navbar, Tech, Works } from '@/components'

// import Navbar from "@/components/Navbar";

export default function Home() {
  return ( 
    <main className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
    </main>
  )
}
