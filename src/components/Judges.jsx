import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiLightBulb, HiCog6Tooth, HiPresentationChartBar, HiMicrophone } from 'react-icons/hi2'
import { BsBullseye, BsPaletteFill } from 'react-icons/bs'
import './Judges.css'

const criteriaData = [
  {
    title: 'Innovation & Creativity',
    weight: 25,
    description: 'How unique and creative is the solution? Does it approach the problem in a novel way?',
    icon: <HiLightBulb />,
  },
  {
    title: 'Technical Complexity',
    weight: 25,
    description: 'How well is the solution built? Quality of code, architecture, and use of technology.',
    icon: <HiCog6Tooth />,
  },
  {
    title: 'Impact & Practicality',
    weight: 20,
    description: 'Can this solution make a real difference? Is it feasible and scalable?',
    icon: <BsBullseye />,
  },
  {
    title: 'Design & User Experience',
    weight: 15,
    description: 'Is the interface intuitive and well-designed? How smooth is the user experience?',
    icon: <BsPaletteFill />,
  },
  {
    title: 'Presentation & Demo',
    weight: 15,
    description: 'How effectively does the team communicate their idea and demo the solution?',
    icon: <HiMicrophone />,
  },
]

const Judges = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section judges" id="judges" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Judging Criteria</h2>
          <p className="section-subtitle">
            Projects will be evaluated by industry experts based on these key criteria.
            Make sure your submission excels in all areas!
          </p>
        </motion.div>

        <div className="criteria-grid">
          {criteriaData.map((item, i) => (
            <motion.div
              key={item.title}
              className="criteria-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -4 }}
            >
              <div className="criteria-header">
                <span className="criteria-icon">{item.icon}</span>
                <div className="criteria-weight">
                  <span className="weight-value">{item.weight}%</span>
                </div>
              </div>
              <h4 className="criteria-title">{item.title}</h4>
              <p className="criteria-desc">{item.description}</p>
              <div className="criteria-bar">
                <motion.div
                  className="criteria-bar-fill"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${item.weight}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
                  style={{
                    background: `linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Judges
