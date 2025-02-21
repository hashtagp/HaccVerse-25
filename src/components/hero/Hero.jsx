import React, { useEffect, useState } from "react";
import "./Hero.css";
import left_astro from "../../assets/astronut_left.svg";
import right_astro from "../../assets/astronut_right.svg";
import devfolio_logo from "../../assets/devfolio_logo.svg";
import crash_rocket from "../../assets/crash_rocket.png";
import logo from "../../assets/reva_logo.png";
import hacc_logo from "../../assets/logo_hacc.png";
import hamburger from "../../assets/hamburger.svg";

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

  const hamburgerHandle = ()=>{
    if(active==="active"){
      setActive("inactive");
    }
    else{
      setActive("active");
    }
  }

  useEffect(() => {
    const hackathonDate = new Date("2025-03-21T00:00:00");

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

  return (
    <div className="hero" id="home">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="REVA Logo"/>
        </div>
        <div className="hacc-logo">
          <img src={hacc_logo} alt="HACC Logo"/>
        </div>
        <img src={hamburger} alt="hamburger" className="hamburger" onClick={hamburgerHandle}/>
        <nav className={`nav ${active==="active"?"active":""}`}>
          <h1 className={`cross ${active==="active"?"active":""}`} onClick={hamburgerHandle}>&#10005;</h1>
          <a href="#about-us" onClick={()=>setMenu("about-us")}>About</a>
          <a href="#timeline"  onClick={()=>setMenu("timeline")}>Timeline</a>
          <a href="#prizes"  onClick={()=>setMenu("prizes")}>Prizes</a>
          <a href="#sponsors"  onClick={()=>setMenu("sponsors")}>Sponsors</a>
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

        <div className="countdown">
          {Object.entries(countdown).map(([unit, value]) => (
            <div key={unit}>
              <span>{value}</span>
              {unit.toUpperCase()}
            </div>
          ))}
        </div>

        <a href="#" className={`apply-button ${disabled}`} >
        <img src={disabled === "disabled" ? crash_rocket : devfolio_logo} alt="Devfolio Logo" className="h-8" />
          {text}
        </a>

        <div className="ellipse"></div>
        <div className="association">
          <p>IN ASSOCIATION WITH</p>
          <img src={devfolio_logo} alt="Devfolio Logo" />
        </div>
      </main>

      <img
        src={left_astro}
        alt="Astronaut Left"
        className="astronaut astronaut-left"
      />
      <img
        src={right_astro}
        alt="Astronaut Right"
        className="astronaut astronaut-right"
      />
    </div>
  );
};

export default Hero;