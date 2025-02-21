import React from 'react';
import './Sponsors.css';
import Sponsor_card from '../sponsor_card/Sponsor_card';
import digitus from "../../assets/Digitus_logo.png";
import polygon from "../../assets/Polygon_logo.webp";
import ethereum from "../../assets/Ethereum_logo.webp";
import devfolio from "../../assets/Devfolio_logo.webp";

const Sponsors = () => {
  const sponsors = [
    {
      logo: devfolio,
      name: "Devfolio"
    },
    {
      logo: polygon,
      name: "Polygon"
    },
    {
      logo: ethereum,
      name: "Ethereum"
    },
    {
      logo: digitus,
      name: "Digitus Business Solutions Pvt. Ltd."
    }
  ];

  return (
    <div className='sponsors' id='sponsors'>
      <h1>Sponsors</h1>
      <div className='sponsor-category'>
        <div className='sponsor-cards'>
          {sponsors.map((sponsor, index) => (
            <Sponsor_card key={index} name={sponsor.name} logo={sponsor.logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;