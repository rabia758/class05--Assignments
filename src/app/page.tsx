"use client";

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Home() {
  useEffect (()=>{
    Aos.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    })
    Aos.refresh();
  }, [])
  return (
    <div>
      <Hero/>
      <Contact/>
  
    </div>
  );
}

