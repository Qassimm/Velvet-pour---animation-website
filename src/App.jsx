import React, { useEffect } from 'react'
import Lenis from 'lenis';
import {ScrollTrigger, SplitText} from 'gsap/all';
import gsap from 'gsap';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger, SplitText);




const App = () => {

   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, 
      easing: (t) => 1 - Math.pow(1 - t, 4), 
      smooth: true,
      smoothTouch: false, 
    });

  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
  }, []);

  return (
    <main>
     <Navbar
      <Hero />
      <Cocktails />
      <About  />
      <Art />
      <Menu />
      <Contact />
    </main>
  )
}

export default App
App