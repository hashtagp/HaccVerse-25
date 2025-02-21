import React, { useState, useEffect } from "react";
import Hero from "../src/components/hero/Hero";
import AboutUs from "../src/components/aboutus/AboutUs";
import Prizes from "../src/components/prizes/Prizes";
import Sponsors from "../src/components/sponsors/Sponsors";
import timeline from "../src/assets/timeline.svg";
import "./App.css";
import FAQ from "./components/FAQ/FAQ";
import Footer from './components/footer/Footer';
import ContactUs from './components/contactus/ContactUs';

const App = () => {
  const [visibility, setVisibility] = useState("hidden");

  useEffect(() => {
    console.log("useEffect called");
    const starsContainer = document.getElementById("stars");

    if (starsContainer) {
      const createStars = () => {
        const starCount = Math.ceil(window.innerWidth * window.innerHeight / 5000);
        for (let i = 0; i < starCount; i++) {
          const star = document.createElement("div");
          star.className = "star";

          const size = Math.random() * 3 + 1;
          star.style.width = `${size}px`;
          star.style.height = `${size}px`;

          star.style.top = `${Math.random() * 100}vh`;
          star.style.left = `${Math.random() * 100}vw`;

          const moveX = `${(Math.random() - 0.5) * 50}px`;
          const moveY = `${(Math.random() - 0.5) * 50}px`;
          star.style.setProperty("--move-x", moveX);
          star.style.setProperty("--move-y", moveY);

          star.style.animationDuration = `${Math.random() * 10 + 10}s`;
          starsContainer.appendChild(star);
        }
      };
      createStars();
    }

    const handleClick = (event) => {
      const shootingStar = document.createElement("div");
      shootingStar.className = "shooting-star";
      document.body.appendChild(shootingStar);

      const startX = event.clientX;
      const startY = event.clientY;
      const endX = Math.random() * window.innerWidth;
      const endY = Math.random() * window.innerHeight;

      shootingStar.style.left = `${startX}px`;
      shootingStar.style.top = `${startY}px`;

      shootingStar.style.setProperty("--end-x", `${endX}px`);
      shootingStar.style.setProperty("--end-y", `${endY}px`);

      shootingStar.addEventListener("animationend", () => {
        shootingStar.remove();
      });
    };

    document.addEventListener("click", handleClick);

    const screenHeight = window.innerHeight;

    const handleScroll = () => {
      console.log("Scroll event triggered");
      console.log("ScrollY:", window.scrollY);
      console.log("Screen Height:", window.innerHeight);
    
      if (window.scrollY > window.innerHeight) {
        setVisibility("visible");
        console.log("visible");
      } else {
        setVisibility("hidden");
        console.log("hidden");
      }
    };
    

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);


    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className="app">
      <div id="stars" className="stars"></div>
      <Hero />
      <AboutUs />
      <h1 className="timeline-heading" id="timeline">Timeline</h1>
      <img src={timeline} alt="timeline" className="timeline" />
      <Prizes />
      <Sponsors />
      <FAQ />
      <Footer />
      <a href="#home" className={`scroll-to-top ${visibility==="visible"?"":"hidden"}`}>&#8593;</a>
      </div>
    </div>
  );
};

export default App;