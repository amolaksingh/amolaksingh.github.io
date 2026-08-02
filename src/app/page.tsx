"use client";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import HireModal from "@/components/hire/HireModal"
import { useState } from "react";

export default function Home() {
   const [openHire, setOpenHire] = useState(false);
   
  return (
    <>
      <Navbar />
       <Hero onOpenHire={() => setOpenHire(true)} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact onOpenHire={() => setOpenHire(true)} />
      <Footer />
       <HireModal
        open={openHire}
        onClose={() => setOpenHire(false)}
      />
    </>
  );
}