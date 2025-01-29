import React from 'react'
import "./Prizes.css";
import silver_medal from "../../assets/silver_medal.svg";
import gold_medal from "../../assets/gold_medal.svg";
import bronze_medal from "../../assets/bronze_medal.svg";

const Prizes = () => {
  return (
    <div class="prizes" id="prizes">
        <h1>PRIZES</h1>
      <div class="prizes-container">
        <div class="card silver">
            <img src={silver_medal} alt="Silver Medal" class="medal"/>
            <div class="title">2ND PRIZE</div>
            <div class="prize-amount">&#8377;8,000</div>
            <div class="badge">SILVER</div>
        </div>
        <div class="card gold">
            <img src={gold_medal} alt="Gold Medal" class="medal"/>
            <div class="title">1ST PRIZE</div>
            <div class="prize-amount">&#8377;12,000</div>
            <div class="badge">GOLD</div>
        </div>
        <div class="card bronze">
            <img src={bronze_medal} alt="Bronze Medal" class="medal"/>
            <div class="title">3RD PRIZE</div>
            <div class="prize-amount">&#8377;5,000</div>
            <div class="badge">BRONZE</div>
        </div>
    </div>
    </div>
  )
}

export default Prizes
