import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { FaMedal, FaTrophy } from 'react-icons/fa'
import { FaAward } from 'react-icons/fa6'
import { HiGift } from 'react-icons/hi2'
import './Prizes.css'

const Prizes = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const prizes = [
    {
      place: '1st',
      title: 'Grand Winner',
      amount: '₹10,000',
      amountNum: 10000,
      color: '#FFD700',
      perks: ['Certificate', 'Goodies + T-Shirt', 'Mentorship Access'],
      icon: <FaTrophy />,
      featured: true,
    },
    {
      place: '2nd',
      title: 'First Runner Up',
      amount: '₹5,000',
      amountNum: 5000,
      color: '#C0C0C0',
      perks: ['Certificate', 'Goodies + T-Shirt', 'Mentorship Access'],
      icon: <FaMedal />,
      featured: false,
    },
    {
      place: 'Top 15',
      title: 'All Finalists',
      amount: 'Goodies',
      amountNum: null,
      color: '#00F5FF',
      perks: ['Certificate', 'Goodies + T-Shirt', 'Mentorship Access'],
      icon: <FaAward />,
      featured: false,
      isGoodies: true,
    },
  ]

  return (
    <section className="section prizes" id="prizes" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Prize Pool</h2>
          <p className="section-subtitle">
            Over ₹20,000 in prizes await the best teams. Plus exclusive perks, and more!
          </p>
        </motion.div>

        <motion.div
          className="total-prize"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="total-label">Total Prize Pool</span>
          <div className="total-amount">
            ₹{inView && <CountUp end={20000} duration={2.5} separator="," />}+
          </div>
        </motion.div>

        <div className="prizes-grid">
          {prizes.map((prize, i) => (
            <motion.div
              key={prize.place}
              className={`prize-card glass-card ${prize.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {prize.featured && <div className="featured-badge">GRAND PRIZE</div>}
              <div className="prize-icon">{prize.icon}</div>
              <div className="prize-place" style={{ color: prize.color }}>
                {prize.place} Place
              </div>
              <h3 className="prize-title">{prize.title}</h3>
              <div className="prize-amount" style={{ color: prize.color }}>
                {prize.isGoodies
                  ? <span className="goodies-label">Goodies</span>
                  : inView && <CountUp end={prize.amountNum} duration={2} prefix="₹" separator="," />}
              </div>
              <ul className="prize-perks">
                {prize.perks.map(perk => (
                  <li key={perk}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {perk}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Prizes
