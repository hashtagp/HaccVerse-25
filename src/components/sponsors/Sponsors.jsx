import React from 'react';
import './Sponsors.css';
import Sponsor_card from '../sponsor_card/Sponsor_card';
import digitus from "../../assets/Digitus_logo.png";
import polygon from "../../assets/Polygon_logo.webp";
import ethereum from "../../assets/Ethereum_logo.webp";
import devfolio from "../../assets/Devfolio_logo.webp";
import llmware from "../../assets/llmware_logo1.png";
import xDay from "../../assets/0x.Day_logo.svg";
import gts from "../../assets/GTS_TECHLABS.png";

const Sponsors = () => {
  const sponsors = [
    {
      logo: devfolio,
      name: "DEVFOLIO LOGO",
      link: "https://devfolio.co/"
    },
    {
      logo: ethereum,
      name: "ETHINDIA LOGO",
      link: "https://ethindia.co"
    },
    {
      logo: digitus,
      name: "Digitus Business Solutions Pvt. Ltd.",
      link: "https://www.digitusbiz.com/"
    },
    {
      logo: llmware,
      name: "LLMWARE LOGO",
      link: "https://llmware.ai/"
    },
    {
      logo: gts,
      name: "GTS TECHLABS LOGO",
      link: "https://www.gtstechlabs.com/"
    }
  ];

  return (
    <div className='sponsors' id='sponsors'>
      <h1>Sponsors</h1>
      <div className='sponsor-category'>
        <div className='sponsor-cards'>
          {sponsors.map((sponsor, index) => (
            <a href={sponsor.link} target='_blank' rel='noreferrer' key={index}>
            <Sponsor_card key={index} name={sponsor.name} logo={sponsor.logo} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;