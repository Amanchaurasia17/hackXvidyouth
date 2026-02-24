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
      href: 'https://x.com/iet_lucknow',
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
                <span className="contact-value">Vineet — 2200520200065@ietlucknow.ac.in</span>
                <span className="contact-value">Aman — 2200520200004@ietlucknow.ac.in</span>
                <span className="contact-value">Ravikant — 2200520200047@ietlucknow.ac.in</span>
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
