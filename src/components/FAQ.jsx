import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './FAQ.css'

const faqData = [
  {
    q: 'Who can participate in HACK X VID-YOUTH 2026?',
    a: 'Any student currently enrolled in a college or university can participate. Whether you\'re a beginner or an experienced developer, all skill levels are welcome! You need to form a team of 4 members.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'Registration is free for all participants. However, the top 15 finalist teams will be required to pay a confirmation fee of ₹400 per team to confirm their participation in the final round.',
  },
  {
    q: 'Do I need a team to participate?',
    a: 'Yes, you need a team of 4 members. If you don\'t have a team, don\'t worry! We\'ll have a team formation session before the event where you can find teammates.',
  },
  {
    q: 'What should I bring to the hackathon?',
    a: 'Bring your laptop, charger, any hardware you want to hack with, and your enthusiasm! We\'ll provide food, drinks, internet, and workspace.',
  },
  {
    q: 'Will there be mentors available?',
    a: 'Absolutely! We\'ll have experienced mentors from the industry available throughout the hackathon to help with technical challenges, ideation, and more.',
  },
  {
    q: 'Can I start working on my project before the hackathon?',
    a: 'No, all coding must be done during the 12-hour hackathon period. However, you can come with ideas and do research beforehand. Pre-existing code or projects are not allowed.',
  },
  {
    q: 'How will the projects be judged?',
    a: 'Projects will be judged on Innovation & Creativity (25%), Technical Complexity (25%), Impact & Practicality (20%), Design & UX (15%), and Presentation (15%).',
  },
  {
    q: 'What platforms will be used for registration?',
    a: 'Registration will be available through Devfolio and Unstop. Links will be shared on our social media channels and this website.',
  },
]

const FAQItem = ({ item, isOpen, onClick }) => (
  <motion.div
    className={`faq-item glass-card ${isOpen ? 'active' : ''}`}
    layout
    onClick={onClick}
  >
    <div className="faq-question">
      <h4>{item.q}</h4>
      <motion.span
        className="faq-toggle"
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
      >
        +
      </motion.span>
    </div>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="faq-answer"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p>{item.a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
)

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section className="section faq" id="faq" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Got questions? We've got answers. If you can't find what you're looking for,
            reach out to us!
          </p>
        </motion.div>

        <div className="faq-list">
          {faqData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <FAQItem
                item={item}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
