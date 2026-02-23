import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TbRobot } from 'react-icons/tb'
import { HiLink, HiShieldCheck, HiAcademicCap } from 'react-icons/hi2'
import { FaHeartPulse, FaSeedling } from 'react-icons/fa6'
import './Themes.css'

const themesData = [
  {
    icon: <TbRobot />,
    title: 'Artificial Intelligence',
    description: 'Build AI-powered solutions — from smart assistants to computer vision and NLP applications.',
    color: '#00F5FF',
    tags: ['ML', 'Deep Learning', 'NLP', 'GenAI'],
  },
  {
    icon: <HiLink />,
    title: 'Blockchain & Web3',
    description: 'Create decentralized apps, smart contracts, and innovative DeFi or NFT-based solutions.',
    color: '#7C3AED',
    tags: ['DApps', 'Smart Contracts', 'DeFi', 'NFT'],
  },
  {
    icon: <FaHeartPulse />,
    title: 'Healthcare',
    description: 'Develop tech solutions for better diagnostics, patient care, mental health, and wellness.',
    color: '#EC4899',
    tags: ['MedTech', 'Diagnostics', 'Wellness', 'Telemedicine'],
  },
  {
    icon: <HiShieldCheck />,
    title: 'Cybersecurity',
    description: 'Build tools to protect digital infrastructure — from threat detection to privacy-first apps.',
    color: '#F59E0B',
    tags: ['Security', 'Privacy', 'Encryption', 'Auth'],
  },
  {
    icon: <FaSeedling />,
    title: 'Green Tech',
    description: 'Create sustainable solutions for climate, energy, waste management, and environmental monitoring.',
    color: '#10B981',
    tags: ['Sustainability', 'Climate', 'CleanEnergy', 'IoT'],
  },
  {
    icon: <HiAcademicCap />,
    title: 'EdTech',
    description: 'Revolutionize learning with innovative platforms, gamification, and accessible education tools.',
    color: '#3B82F6',
    tags: ['E-Learning', 'Gamification', 'Accessibility', 'AR/VR'],
  },
]

const Themes = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section className="section themes" id="themes" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Hackathon Themes</h2>
          <p className="section-subtitle">
            Choose your track and build solutions that matter. Each theme represents a
            critical area where technology can make a real difference.
          </p>
        </motion.div>

        <div className="themes-grid">
          {themesData.map((theme, i) => (
            <motion.div
              key={theme.title}
              className="theme-card glass-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -8 }}
            >
              <div
                className="theme-glow"
                style={{ background: `radial-gradient(circle at center, ${theme.color}15, transparent 70%)` }}
              />
              <div className="theme-icon-wrap" style={{ borderColor: `${theme.color}30` }}>
                <span className="theme-icon">{theme.icon}</span>
              </div>
              <h3 className="theme-title" style={{ color: theme.color }}>{theme.title}</h3>
              <p className="theme-desc">{theme.description}</p>
              <div className="theme-tags">
                {theme.tags.map(tag => (
                  <span
                    key={tag}
                    className="theme-tag"
                    style={{ borderColor: `${theme.color}30`, color: theme.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Themes
