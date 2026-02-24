import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const hackathonDate = new Date('2026-03-12T09:00:00')

  const calculateTimeLeft = () => {
    const now = new Date()
    const diff = hackathonDate - now

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatNum = (n) => String(n).padStart(2, '0')

  return (
    <section className="hero" id="home">
      {/* Decorative shapes */}
      <div className="hero-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-dot" />
          12-HOUR HACKATHON • MARCH 12, 2026
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="title-hack">HACK</span>
          <span className="title-x">X</span>
          <br />
          <span className="title-vid">VID-YOUTH</span>
          <span className="title-year">2026</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Where Innovation Meets Brilliance. Build, Hack, and Transform the Future
          in 12 Hours of Non-Stop Innovation.
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          className="countdown"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' },
          ].map((item, i) => (
            <div key={item.label} className="countdown-item">
              <div className="countdown-value">{formatNum(item.value)}</div>
              <div className="countdown-label">{item.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://unstop.com/p/hack-x-vid-youth-2026-hack-x-vid-youth-2026-institute-of-engineering-and-technology-iet-lucknow-1647453"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn neon-btn-filled hero-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
            </svg>
            Register Now
          </a>
          <a href="#about" className="neon-btn hero-btn" onClick={(e) => {
            e.preventDefault()
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            Learn More
          </a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="stat-item">
            <span className="stat-value">250+</span>
            <span className="stat-label">Participants</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">₹20K+</span>
            <span className="stat-label">Prize Pool</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">12</span>
            <span className="stat-label">Hours</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">6</span>
            <span className="stat-label">Tracks</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-organizers"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <span className="organizers-label">Organized By</span>
          <div className="organizers-logos">
            <div className="org-logo-item">
              <img src="/iet-logo.png" alt="IET Lucknow" />
            </div>
            <div className="org-logo-item">
              <img src="/eed-logo.png" alt="EED Department" />
            </div>
            <div className="org-logo-item">
              <img src="/nnf-logo.png" alt="NNF" />
            </div>
            <div className="org-logo-item">
              <img src="/iic-logo.png" alt="Institution's Innovation Council" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="scroll-arrow"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
