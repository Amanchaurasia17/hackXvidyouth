import React from 'react'
import { HiHeart } from 'react-icons/hi2'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-hack">HACK</span>
              <span className="logo-x">X</span>
              <span className="logo-vid">VID-YOUTH</span>
            </div>
            <p className="footer-tagline">
              Where Innovation Meets Brilliance. Building the future, one hack at a time.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#themes">Themes</a>
            <a href="#timeline">Timeline</a>
            <a href="#prizes">Prizes</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="footer-links">
            <h4>Resources</h4>
            {/* <a href="https://devfolio.co" target="_blank" rel="noopener noreferrer">Register on Devfolio</a> */}
            <a href="https://unstop.com/p/hack-x-vid-youth-2026-hack-x-vid-youth-2026-institute-of-engineering-and-technology-iet-lucknow-1647453" target="_blank" rel="noopener noreferrer">Register on Unstop</a>
            <a href="#contact">Contact Us</a>
            <a href="https://drive.google.com/file/d/1Y8kZXfTT0vD5zbQ_I-lMvwutnHgc5gPS/view" target="_blank" rel="noopener noreferrer">Code of Conduct</a>
          </div>

          <div className="footer-links">
            <h4>Connect</h4>
            <a href="https://www.instagram.com/ees_iet/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://x.com/iet_lucknow" target="_blank" rel="noopener noreferrer">Twitter / X</a>
            <a href="https://www.linkedin.com/company/electrical-engineering-society-iet-lucknow/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>&copy; {currentYear} HACK X VID-YOUTH. All rights reserved.</p>
          <p className="footer-credit">
            Built with <span className="heart"><HiHeart /></span> for innovators everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
