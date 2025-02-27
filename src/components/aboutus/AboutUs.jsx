import React,{ useState, useEffect } from "react";
import "./AboutUs.css";
import astronaut from "../../assets/aboutus_astronaut.svg";
import moonPhases from "../../assets/moon_phases.svg";
import hackathon1 from "../../assets/haccathon1.jpeg";
import hackathon2 from "../../assets/haccathon5.jpeg";
import hackathon3 from "../../assets/haccathon7.jpeg";
import hackathon4 from "../../assets/haccathon8.jpeg";

const AboutUs = () => {

    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-us");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) { // Adjust threshold as needed
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger check on initial render

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`about-us ${isVisible ? "active" : ""}`} id="about-us">
        <div class="experience">
            <h1 className="animate-item">ABOUT US</h1>
            <div class="our-experience animate-item">
                <h1>EXPERIENCE</h1>
                <p>HaccVerse 25, the annual hackathon by the Hackathon and Coding Club (HACC), in association with REVA NEST Incubation Cell, invites developers, designers, and innovators to come together for an unforgettable experience of collaboration and creativity. Participants will tackle real-world challenges, build innovative solutions, and compete for exciting prizes while expanding their skills and network.</p>
            </div>
        </div>
        <div class="aboutus-name">
            <div class="left">
                <h1 className="animate-item">HACC VERSE 2K25</h1>
                <div class="text animate-item">
                <img class="aboutus-astronaut" src={astronaut} alt="Astronaut"/>
                <h2>JOIN US FOR A THRILLING EVENT SHOWCASING THE LATEST IN TECHNOLOGY!</h2>
                <p>BE PART OF THE EXPERIENCE!</p>
                </div>
                <img class="moon-phases animate-item" src={moonPhases} alt="Moon Phases"/>
                <p>CREATE UNFORGETTABLE MOMENTS WITH US!</p>
            </div>
            <div class="right">
                <img className="animate-item" src={hackathon1} alt="hackathon1"/>
                <img className="animate-item" src={hackathon2} alt="hackathon2" />
                <img className="animate-item" src={hackathon3} alt="hackathon3" />
                <img className="animate-item" src={hackathon4} alt="hackathon4" />
            </div>
        </div>
    </div>
  );
};

export default AboutUs;
