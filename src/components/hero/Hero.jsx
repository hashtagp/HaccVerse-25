import React, { useEffect, useState } from "react";
import "./Hero.css";
import left_astro from "../../assets/astronut_left.svg";
import right_astro from "../../assets/astronut_right.svg";
import devfolio_logo from "../../assets/devfolio_logo.svg";
import crash_rocket from "../../assets/crash_rocket.png";
import logo from "../../assets/reva_logo.png";
import hacc_logo from "../../assets/logo_hacc.png";
import hamburger from "../../assets/hamburger.svg";
import nest_logo from "../../assets/Nest_logo.png";

const Hero = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [text, setText] = useState("APPLY ON DEVFOLIO");
  const [disabled, setDisabled] = useState("");
  const [menu, setMenu] = useState("home");
  const [active, setActive] = useState("inactive");

  const hamburgerHandle = () => {
    if (active === "active") {
      setActive("inactive");
    } else {
      setActive("active");
    }
  };

  useEffect(() => {
    const hackathonDate = new Date("2025-03-14T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const timeDiff = hackathonDate - now;

      if (timeDiff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setText("You missed it!");
        setDisabled("disabled");
      } else {
        setCountdown({
          days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
        });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="hero" id="home">
      <header className="header">
        <div className="logo">
          <a href="https://www.reva.edu.in/" target="_blank" rel="noreferrer">
          <img src={logo} alt="REVA Logo" />
          </a>
        </div>
        <div className="hacc-logo">
          <a href="https://hacc.co.in/" target="_blank" rel="noreferrer">
          <img src={hacc_logo} alt="HACC Logo" />
          </a>
        </div>
        <img src={hamburger} alt="hamburger" className="hamburger" onClick={hamburgerHandle} />
        <nav className={`nav ${active === "active" ? "active" : ""}`}>
          <h1 className={`cross ${active === "active" ? "active" : ""}`} onClick={hamburgerHandle}>
            &#10005;
          </h1>
          <a href="#about-us" onClick={() => {setMenu("about-us");hamburgerHandle()}}>
            About
          </a>
          <a href="#timeline" onClick={() => {setMenu("timeline");hamburgerHandle()}}>
            Timeline
          </a>
          <a href="#prizes" onClick={() => {setMenu("prizes");hamburgerHandle()}}>
            Prizes
          </a>
          <a href="#sponsors" onClick={() => {setMenu("sponsors");hamburgerHandle()}}>
            Sponsors
          </a>
          <a href="#tracks" onClick={() => {setMenu("tracks");hamburgerHandle()}}>
            PPT Template
          </a>
        </nav>
      </header>

      <main className="main">
        <div className="name">
          <h1 className="line1">HACC</h1>
          <h1 className="line2">VERSE</h1>
          <div className="line3">
            <p>21 MAR - 22 MAR</p>
            <p>32 HOUR HACKATHON</p>
          </div>
        </div>

        <div className="association">
          <a href="https://revanest.com/" target="_blank" rel="noreferrer">
            <img src={nest_logo} alt="REVA NEST" />
          </a>
        </div>

        <div className="countdown">
          {Object.entries(countdown).map(([unit, value]) => (
            <div key={unit}>
              <span>{value}</span>
              {unit.toUpperCase()}
            </div>
          ))}
        </div>

        <div
          className="apply-button"
          data-hackathon-slug="haccverse"
          data-button-theme="light"
          style={{ height: "44px", width: "312px" }}
        ></div>

        <div className="ellipse"></div>
      </main>

      <img src={left_astro} alt="Astronaut Left" className="astronaut astronaut-left" />
      <img src={right_astro} alt="Astronaut Right" className="astronaut astronaut-right" />
    </div>
  );
};

export default Hero;