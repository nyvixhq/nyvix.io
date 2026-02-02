
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Discovery } from './components/Discovery';
import { ProductivityList } from './components/ProductivityList';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Discovery />
        <ProductivityList />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
