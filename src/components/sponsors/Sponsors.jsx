import React from 'react'
import './Sponsors.css'
import Sponsor_card from '../sponsor_card/Sponsor_card'

const Sponsors = () => {
  const sponsors = [
    {
      category: 'gold',
      sponsors: [
        { name: 'Gold Sponsor 1', logo: 'gold1.png' },
        { name: 'Gold Sponsor 2', logo: 'gold2.png' }
      ]
    },
    {
      category: 'silver',
      sponsors: [
        { name: 'Silver Sponsor 1', logo: 'silver1.png' },
        { name: 'Silver Sponsor 2', logo: 'silver2.png' }
      ]
    },
    {
      category: 'platinum',
      sponsors: [
        { name: 'Platinum Sponsor 1', logo: 'platinum1.png' },
        { name: 'Platinum Sponsor 2', logo: 'platinum2.png' }
      ]
    }
  ];

  const powered = [
        { name: 'powered Sponsor 1', logo: 'powered1.png' },
        { name: 'powered Sponsor 2', logo: 'powered2.png' }
  ]

  return (
    <div className='sponsors' id='sponsors'>
      <h1>Sponsors</h1>
      <div className='sponsor-category'>
          <h2>POWERED BY</h2>
          <div className='sponsor-cards'>
            {powered.map((sponsor, idx) => (
              <Sponsor_card key={idx} name={sponsor.name} logo={sponsor.logo} />
            ))}
          </div>
      </div>
      {sponsors.map((category, index) => (
        <div key={index} className='sponsor-category'>
          <h2>{category.category.charAt(0).toUpperCase() + category.category.slice(1)} TIER</h2>
          <div className='sponsor-cards'>
            {category.sponsors.map((sponsor, idx) => (
              <Sponsor_card key={idx} name={sponsor.name} logo={sponsor.logo} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sponsors