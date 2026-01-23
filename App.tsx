import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import ServiceFeature from './components/ServiceFeature';
import ClinicalResults from './components/ClinicalResults';
import ProblemValue from './components/ProblemValue';
import Expertise from './components/Expertise';
import UserReviews from './components/UserReviews';
import BrainFitness from './components/BrainFitness';
import DiagnosisReport from './components/DiagnosisReport';


import Features from './components/Features';
import UserExperience from './components/UserExperience';
import B2BSolutions from './components/B2BSolutions';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-primary-dark overflow-x-hidden selection:bg-accent selection:text-white relative">
      {/* Global Background Wallpaper (Visible in all sections except Hero) */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#FFE0B2]/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#FFCCBC]/30 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-[#FFECB3]/20 rounded-full blur-[100px]" />

        {/* Design Objects (Floating Shapes) */}
        <div className="absolute top-[5%] left-[5%] w-[300px] md:w-[500px] opacity-[0.08] animate-float-slow">
          <img src="/bg-obj-orange.png" alt="" className="w-full h-auto" />
        </div>
        <div className="absolute bottom-[20%] left-[-5%] w-[250px] md:w-[400px] opacity-[0.08] animate-float-delayed">
          <img src="/bg-obj-green.png" alt="" className="w-full h-auto" />
        </div>
        <div className="absolute top-[20%] right-[-10%] w-[200px] md:w-[350px] opacity-[0.08] animate-float-reverse">
          <img src="/bg-obj-leaf.png" alt="" className="w-full h-auto" />
        </div>
        <div className="absolute bottom-[-5%] right-[10%] w-[300px] md:w-[600px] opacity-[0.08] animate-float-slow">
          <img src="/bg-obj-yellow.png" alt="" className="w-full h-auto" />
        </div>
      </div>

      <Navbar />
      <main className="relative z-10">
        {/* Hero Section (Opaque Background to exclude Global Wallpaper) */}
        <section id="home" className="min-h-screen flex flex-col justify-center snap-start snap-always bg-white relative z-20">
          <Hero />
        </section>

        {/* New Section: Brand Story */}
        <section id="brand-story" className="min-h-screen flex flex-col justify-center snap-start snap-always relative z-10">
          <BrandStory />
        </section>

        {/* New Section: Service Feature */}
        <section id="service-feature" className="min-h-screen flex flex-col justify-center snap-start snap-always">
          <ServiceFeature />
        </section>

        {/* New Section: Clinical Results */}
        <section id="clinical-results" className="min-h-screen flex flex-col justify-center snap-start snap-always">
          <ClinicalResults />
        </section>

        {/* No.2 Part 1: Authority & Patents */}
        <section id="expertise" className="min-h-screen flex flex-col justify-center snap-start snap-always">
          <Expertise />
        </section>

        {/* New Section: User Reviews */}
        <section id="user-reviews" className="min-h-screen flex flex-col justify-center snap-start snap-always">
          <UserReviews />
        </section>

        {/* New Section: Brain Fitness */}
        <section id="brain-fitness" className="min-h-screen flex flex-col justify-center snap-start snap-always">
          <BrainFitness />
        </section>

        {/* New Section: Diagnosis Report */}
        <section id="diagnosis-report" className="min-h-screen flex flex-col justify-center snap-start snap-always">
          <DiagnosisReport />
        </section>

        {/* No.1 Market Trend/Problem */}
        <section id="problem-value" className="min-h-screen flex flex-col justify-center snap-start snap-always">
          <ProblemValue />
        </section>







        {/* Reverted Section: Features (6 All-in-one Features) */}
        <section id="features" className="min-h-screen flex flex-col justify-center snap-start snap-always">
          <Features />
        </section>

        {/* No.5 UX & Gamification */}
        <section id="ux" className="min-h-screen flex flex-col justify-center snap-start snap-always">
          <UserExperience />
        </section>

        {/* No.6 B2B Solutions */}
        <section id="b2b-solutions" className="min-h-screen flex flex-col justify-center snap-start snap-always">
          <B2BSolutions />
        </section>

        {/* No.7 Final CTA */}
        <section id="download" className="min-h-screen flex flex-col justify-center snap-start snap-always">
          <FinalCTA />
        </section>

        {/* Contact Form */}
        <section id="contact" className="min-h-screen flex flex-col justify-center snap-start snap-always">
          <Contact />
        </section>
      </main>
      <section className="scroll-snap-align-start snap-start snap-always">
        <Footer />
      </section>
    </div>
  );
};

export default App;