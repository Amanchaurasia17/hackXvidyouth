import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiEnvelope, HiDevicePhoneMobile, HiMapPin, HiPhone } from 'react-icons/hi2'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const socials = [
    {
      name: 'Instagram',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="5" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      href: 'https://www.instagram.com/ees_iet/',
    },
    {
      name: 'Twitter / X',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      ),
      href: 'https://twitter.com/ees_iet',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      href: 'https://www.linkedin.com/company/electrical-engineering-society-iet-lucknow/',
    },
    {
      name: 'Discord',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
        </svg>
      ),
      href: '#',
    },
  ]

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Where It Happens</h2>
          <p className="section-subtitle">
            Join us at the Institute of Engineering and Technology in Lucknow.
            A vibrant campus ready to host 12 hours of non-stop innovation.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="https://maps.app.goo.gl/jazG1wbUPHiwjJtb6" target="_blank" rel="noopener noreferrer" className="contact-card glass-card">
              <span className="contact-icon"><HiMapPin /></span>
              <div>
                <span className="contact-label">IET Lucknow</span>
                <span className="contact-value">Institute of Engineering and Technology,</span>
                <span className="contact-value">Sitapur Road, Lucknow,</span>
                <span className="contact-value">Uttar Pradesh 226021</span>
              </div>
            </a>

            <a href="mailto:bytecamp@siesgst.ac.in" className="contact-card glass-card">
              <span className="contact-icon"><HiEnvelope /></span>
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-value">ees.eed@ietlucknow.ac.in</span>
              </div>
            </a>

            <div className="contact-card glass-card">
              <span className="contact-icon"><HiPhone /></span>
              <div>
                <span className="contact-label">Phone</span>
                <a href="tel:+917977899825" className="contact-value">+91 91619 13996</a>
                <a href="tel:+917039903565" className="contact-value">+91 96214 06207</a>
                <a href="tel:+919967603858" className="contact-value">+91 95987 21647</a>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                {socials.map(s => (
                  <a
                    key={s.name}
                    href={s.href}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-map glass-card"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <iframe
              title="IET Lucknow Location"
              src="https://maps.google.com/maps?q=Institute+of+Engineering+and+Technology+Lucknow+Sitapur+Road&t=&z=16&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '16px', minHeight: '450px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
