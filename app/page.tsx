"use client";

import Hero from "./components/home/hero/Hero";
import About from "./components/home/about/About";
import Services from "./components/home/services/Services";
import WhyChooseUs from "./components/home/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
    </div>
  );
}
