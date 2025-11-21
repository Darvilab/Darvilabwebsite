import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { ProductShowcase } from './components/ProductShowcase';
import { SDLCProcess } from './components/SDLCProcess';
import { Testimonials } from './components/Testimonials';
import { NepalAdvantage } from './components/NepalAdvantage';
import { Culture } from './components/Culture';
import { ChatWidget } from './components/ChatWidget';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'case-studies', 'process', 'about'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navigation activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <TrustBar />
        
        <section id="services">
          <Services />
        </section>
        
        <Testimonials />
        
        <section id="case-studies">
          <CaseStudies />
        </section>
        
        <ProductShowcase />
        
        <section id="process">
          <SDLCProcess />
        </section>
        
        <section id="about">
          <NepalAdvantage />
          <Culture />
        </section>
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
}