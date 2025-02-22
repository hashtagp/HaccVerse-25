import React from "react";
import "./AboutUs.css";
import astronaut from "../../assets/aboutus_astronaut.svg";
import moonPhases from "../../assets/moon_phases.svg";
import hackathon1 from "../../assets/haccathon1.jpeg";
import hackathon2 from "../../assets/haccathon5.jpeg";
import hackathon3 from "../../assets/haccathon7.jpeg";
import hackathon4 from "../../assets/haccathon8.jpeg";

const AboutUs = () => {
  return (
    <div class="about-us" id="about-us">
        <div class="experience">
            <h1>ABOUT US</h1>
            <div class="our-experience">
                <h1>EXPERIENCE</h1>
                <p>HaccVerse 25, the annual hackathon by the Hackathon and Coding Club (HACC), invites developers, designers, and innovators to come together for an unforgettable experience of collaboration and creativity. Participants will tackle real-world challenges, build innovative solutions, and compete for exciting prizes while expanding their skills and network.</p>
                <p>Join us for an exciting event filled with !</p>
            </div>
        </div>
        <div class="aboutus-name">
            <div class="left">
                <h1>HACC VERSE 2K25</h1>
                <div class="text">
                <img class="aboutus-astronaut" src={astronaut} alt="Astronaut"/>
                <h2>JOIN US FOR AN EXCITING EVENT FILLED WITH!</h2>
                <p>JOIN US</p>
                </div>
                <img class="moon-phases" src={moonPhases} alt="Moon Phases"/>
                <p>JOIN US FOR EXCITING MEMORIES!</p>
            </div>
            <div class="right">
                <img src={hackathon1} alt="hackathon1"/>
                <img src={hackathon2} alt="hackathon2" />
                <img src={hackathon3} alt="hackathon3" />
                <img src={hackathon4} alt="hackathon4" />
            </div>
        </div>
    </div>
  );
};

export default AboutUs;
