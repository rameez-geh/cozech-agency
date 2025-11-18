"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Process from "@/components/Process/Process";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import CTA from "@/components/CTA/CTA";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import BotpressChatbot from "@/components/BotpressChatbot/BotpressChatbot";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  useEffect(() => {

    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    }
  }, []); 

  return (
    <>
      <Navbar />
      <Hero />
      <Process />
      <Services />
      <Projects />
      <Testimonial />
      <About />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BotpressChatbot />
    </>
  );
}