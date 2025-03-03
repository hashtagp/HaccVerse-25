import React, { useState, useEffect } from "react";
import Hero from "../src/components/hero/Hero";
import AboutUs from "../src/components/aboutus/AboutUs";
import Prizes from "../src/components/prizes/Prizes";
import Sponsors from "../src/components/sponsors/Sponsors";
import timeline from "../src/assets/timeline.svg";
import spaceman from "../src/assets/spaceman.svg";
import "./App.css";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import HackathonTracks from "./components/HackathonTracks/HackathonTracks";

const App = () => {
  const [visibility, setVisibility] = useState("hidden");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    console.log("useEffect called");

    // Detect screen width for timeline switching
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

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

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight/2) {
        setVisibility("visible");
      } else {
        setVisibility("hidden");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for timeline items
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    });

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      <div className="app">
        <div id="stars" className="stars"></div>
        <Hero />
        <AboutUs />
        <HackathonTracks/>
        <h1 className="timeline-heading" id="timeline">Timeline</h1>

        {isMobile ? (
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>27TH FEBRUARY</h3>
                <p><strong>Registration starts</strong><br />Begin your journey! Register your team and prepare for an epic hackathon experience.</p>
              </div>
            </div>

            <div className="timeline-item">
            <img src={spaceman} className="spaceman" alt="Spaceman" />
              <div className="timeline-content">
                <h3>13TH MARCH</h3>
                <p><strong>Registration ends</strong><br />Last chance to join! Make sure your team is registered before the deadline.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>15TH MARCH</h3>
                <p><strong>Final Team Announcement</strong><br />The selected teams will be revealed! Check if your team has made it to the main event.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>17TH MARCH</h3>
                <p><strong>Last Date for RSVP</strong><br />Finalists...Make sure to RSVP</p>
              </div>
            </div>

            <div className="timeline-item">
            <img src={spaceman} className="spaceman" alt="Spaceman" />
              <div className="timeline-content">
                <h3>21ST MARCH</h3>
                <p><strong>Hackathon Begins</strong><br />The main event starts! 32 hours of coding challenges await.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>22ND MARCH</h3>
                <p><strong>Hackathon Ends</strong><br />Time to showcase your work! Submit your projects for evaluation.</p>
              </div>
            </div>

            <div className="timeline-item">
              <img src={spaceman} className="spaceman" alt="Spaceman" />
              <div className="timeline-content">
                <h3>22ND MARCH</h3>
                <p><strong>Result Announcement</strong><br />The winning teams will be revealed! Check if your team has made it to the top.</p>
              </div>
            </div>
          </div>
        ) : (
          <img src={timeline} alt="timeline" className="timeline-img" />
        )}

        <Prizes />
        <Sponsors />
        <FAQ />
        <Footer />
        <a href="#home" className={`scroll-to-top ${visibility === "visible" ? "" : "hidden"}`}>&#8593;</a>
      </div>
    </div>
  );
};

export default App;