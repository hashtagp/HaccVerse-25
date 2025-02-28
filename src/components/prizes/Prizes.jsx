import React from 'react';
import "./Prizes.css";
import silver_medal from "../../assets/silver_medal.svg";
import gold_medal from "../../assets/gold_medal.svg";
import bronze_medal from "../../assets/bronze_medal.svg";

const Prizes = () => {
  return (
    <div className="prizes" id="prizes">
      <h1>PRIZES</h1>
      <p className="incubation-offer">3 months free incubation at REVA NEST - Incubation Centre worth ₹18,000</p>
      <div className="prizes-container">
        {/* Silver Medal - Left */}
        <div className="card silver">
          <img src={silver_medal} alt="Silver Medal" className="medal" />
          <div className="title">2ND PRIZE</div>
          <div className="prize-amount">&#8377;12,000</div>
          <div className="badge">SILVER</div>
        </div>

        {/* Center Column - Gold + Track Winner */}
        <div className="center-column">
          <div className="card gold">
            <img src={gold_medal} alt="Gold Medal" className="medal" />
            <div className="title">1ST PRIZE</div>
            <div className="prize-amount">&#8377;15,000</div>
            <div className="badge">GOLD</div>
          </div>
          <div className="card track">
            <div className="title">TRACK WINNERS</div>
            <div className="prize-amount">&#8377;3,000</div>
          </div>
        </div>

        {/* Bronze Medal - Right */}
        <div className="card bronze">
          <img src={bronze_medal} alt="Bronze Medal" className="medal" />
          <div className="title">3RD PRIZE</div>
          <div className="prize-amount">&#8377;8,000</div>
          <div className="badge">BRONZE</div>
        </div>

        <div className="phones card">
            <div className="title">TRACK WINNERS</div>
            <div className="prize-amount">&#8377;3,000</div>
          </div>
      </div>
    </div>
  );
};

export default Prizes;
