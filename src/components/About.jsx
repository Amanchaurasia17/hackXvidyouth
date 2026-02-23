import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiRocketLaunch, HiUserGroup, HiTrophy, HiLightBulb, HiCalendarDays, HiMapPin, HiClock } from 'react-icons/hi2'
import { FaPeopleGroup } from 'react-icons/fa6'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const features = [
    {
      icon: <HiRocketLaunch />,
      title: 'Innovation First',
      desc: 'Push boundaries and create solutions that can change the world.',
    },
    {
      icon: <HiUserGroup />,
      title: 'Collaborate & Learn',
      desc: 'Team up with like-minded innovators and learn from industry mentors.',
    },
    {
      icon: <HiTrophy />,
      title: 'Win Big',
      desc: 'Compete for exciting prizes, internships, and recognition.',
    },
    {
      icon: <HiLightBulb />,
      title: 'Real-World Impact',
      desc: 'Build projects that address real challenges across industries.',
    },
  ]

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About the Hackathon</h2>
          <p className="section-subtitle">
            HACK X VID-YOUTH 2026 is a premier 12-hour hackathon organized to ignite innovation
            and empower the next generation of tech leaders.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-main glass-card"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="about-heading">What is HACK X VID-YOUTH?</h3>
            <p className="about-text">
              HACK X VID-YOUTH 2026 is an electrifying 12-hour hackathon where students and young
              developers come together to innovate, collaborate, and build groundbreaking solutions.
              Whether you're a seasoned coder or a first-time hacker, this event is your launchpad
              to turn ideas into reality.
            </p>
            <p className="about-text">
              With expert mentors, exciting workshops, and an incredible community, you'll have
              everything you need to bring your wildest tech ideas to life. Join us for a
              weekend of coding, creativity, and connection.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon"><HiCalendarDays /></span>
                <div>
                  <strong>Date</strong>
                  <p>March 12, 2026</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon"><HiMapPin /></span>
                <div>
                  <strong>Venue</strong>
                  <p>Institute of Engineering & Technology, Lucknow</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon"><HiClock /></span>
                <div>
                  <strong>Duration</strong>
                  <p>12 Hours</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon"><FaPeopleGroup /></span>
                <div>
                  <strong>Team Size</strong>
                  <p>4 Members</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="about-features">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="feature-card glass-card"
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <span className="feature-icon">{feat.icon}</span>
                <div>
                  <h4 className="feature-title">{feat.title}</h4>
                  <p className="feature-desc">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
