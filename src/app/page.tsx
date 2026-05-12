"use client";
import { LanguageProvider } from "@/context/LanguageContext";
import TransitionWrapper from "@/components/TransitionWrapper";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <TransitionWrapper>
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </TransitionWrapper>
    </LanguageProvider>
  );
}
