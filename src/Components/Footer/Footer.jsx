import React from 'react'
import './Footer.css'
import youtube from "../../assets/youtube_icon.png"
import facebook from "../../assets/facebook_icon.png"
import twiter from "../../assets/twitter_icon.png"
import instagram from "../../assets/instagram_icon.png"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-icon">
          <img src={youtube} alt="" />
          <img src={facebook} alt="" />
          <img src={twiter} alt="" />
          <img src={instagram} alt="" />
        </div>
          <ul>
            <li>Audio Description</li>
            <li>Help Center</li>
            <li>Gift Cards</li>
            <li>Media Center</li>
            <li>Investor realtionship</li>
            <li>Terms of Use</li>
            <li>Jobs</li>
            <li>Leagal notice</li>
            <li>Contact Us</li>
            
          </ul>
          <p className='copyright-text'>
            @ 1997-2025 Netflix, Inc.
          </p>
        
    </div>
  )
}

export default Footer