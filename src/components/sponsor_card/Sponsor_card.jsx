import React from 'react'
import './Sponsor_card.css'

const Sponsor_card = ({ name, logo }) => {
  return (
    <div className='sponsor-card'>
      <img src={logo} alt={name} className='sponsor-logo' />
    </div>
  )
}

export default Sponsor_card