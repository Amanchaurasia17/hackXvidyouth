import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { HiClipboardDocumentCheck, HiMicrophone, HiCpuChip, HiMagnifyingGlass, HiRocketLaunch, HiTrophy, HiHandRaised } from 'react-icons/hi2'
import { IoFastFood, IoRestaurant } from 'react-icons/io5'
import { BsLaptopFill, BsBullseye } from 'react-icons/bs'
import './Timeline.css'

/* ── Pre-event milestones ── */
const milestones = [
  { date: '24 FEB', title: 'Registration Starts', description: 'Sign up on Devfolio / Unstop and start forming your dream team of 4 members.' },
  { date: '8 MAR', title: 'Registration Ends', description: 'Final deadline for all registrations. Make sure your team is locked in!' },
  { date: '9 MAR', title: 'Shortlisted Teams Announced', description: 'Selected teams announced! Check your email and our social channels.' },
  { date: '10 MAR', title: 'Pre-Hackathon Briefing', description: 'Final instructions, rules recap, and Q&A session for selected teams.' },
  { date: '12 MAR', title: 'Hackathon Day!', description: '12 hours of non-stop hacking, building, and innovating. Game on!' },
]

/* ── Day-of schedule ── */
const daySchedule = [
  { time: '08:00 - 09:00 AM', title: 'Check In', desc: 'Arrive at the venue, collect your kit, and get settled with your team.', icon: <HiClipboardDocumentCheck /> },
  { time: '09:00 - 09:30 AM', title: 'Inaugural Ceremony', desc: 'Kickoff with keynote speakers, theme reveals, and event guidelines.', icon: <HiMicrophone /> },
  { time: '09:30 - 10:00 AM', title: 'Breakfast', desc: 'Fuel up with breakfast before the hacking begins!', icon: <IoFastFood /> },
  { time: '10:00 - 01:00 PM', title: 'Phase 1 (Hack)', desc: 'First hacking phase — brainstorm, design, and start building your solution.', icon: <BsLaptopFill /> },
  { time: '01:00 - 02:00 PM', title: 'Mid-Evaluation', desc: 'Present your progress to mentors and judges for mid-round feedback.', icon: <HiMagnifyingGlass /> },
  { time: '02:00 - 02:20 PM', title: 'Lunch Break', desc: 'Take a break, recharge, and enjoy lunch with fellow hackers.', icon: <IoRestaurant /> },
  { time: '02:30 - 05:30 PM', title: 'Phase 2', desc: 'Final hacking phase — polish your project, fix bugs, and prepare your demo.', icon: <HiRocketLaunch /> },
  { time: '05:30 - 06:30 PM', title: 'Final Round Evaluation', desc: 'Present your completed project to the panel of expert judges.', icon: <BsBullseye /> },
  { time: '06:30 - 07:30 PM', title: 'Prize Distribution', desc: 'Winners announced! Prizes, certificates, and celebrations.', icon: <HiTrophy /> },
  { time: '07:30 PM', title: 'End', desc: 'Closing remarks and farewell. See you at the next hackathon!', icon: <HiHandRaised /> },
]

const PANEL_VH = 80 // vh of scroll space per milestone panel

const Timeline = () => {
  const wrapperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(-1) // -1 = intro
  const [pinMode, setPinMode] = useState('before')   // 'before' | 'pinned' | 'after'
  const totalPanels = milestones.length + 1           // intro + milestones

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const panelH = (vh * PANEL_VH) / 100

      // Before the section — viewport sits at top of wrapper
      if (rect.top > 0) {
        setPinMode('before')
        setActiveIndex(-1)
        return
      }

      // After the section — viewport sits at bottom of wrapper
      if (rect.bottom <= vh) {
        setPinMode('after')
        setActiveIndex(milestones.length - 1)
        return
      }

      // Inside the section — viewport is fixed
      setPinMode('pinned')
      const scrolled = -rect.top
      const panelIdx = Math.floor(scrolled / panelH)
      const idx = panelIdx - 1 // first panel is intro (idx = -1)
      setActiveIndex(Math.max(-1, Math.min(idx, milestones.length - 1)))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const progress = activeIndex >= 0
    ? ((activeIndex + 1) / milestones.length) * 100
    : 0

  return (
    <>
      {/* ═══════ FULL-SCREEN SCROLL MILESTONES ═══════ */}
      <section
        ref={wrapperRef}
        className="tl-fullpage"
        id="timeline"
        style={{ height: `${totalPanels * PANEL_VH}vh` }}
      >
        {/* Viewport-filling overlay — JS switches fixed / absolute */}
        <div className={`tl-viewport tl-viewport--${pinMode}`}>
          {/* Progress bar */}
          <div className="tl-progress-bar">
            <div className="tl-progress-fill" style={{ width: `${progress}%` }} />
          </div>

          {/* Left sidebar — past dates */}
          <div className="tl-sidebar tl-sidebar-left">
            {milestones.map((m, i) => (
              <div
                key={m.date}
                className={`tl-sidebar-strip${i < activeIndex ? ' visible' : ''}`}
              >
                <span className="tl-sidebar-date">{m.date}</span>
              </div>
            ))}
          </div>

          {/* Center content */}
          <div className="tl-center-area">
            {/* Intro panel */}
            <div className={`tl-panel ${activeIndex < 0 ? 'tl-panel-active' : 'tl-panel-exit'}`}>
              <h2 className="tl-heading">Timeline</h2>
              <p className="tl-subtitle">
                Scroll down to explore the complete roadmap of
                HACK X VID-YOUTH 2026
              </p>
            </div>

            {/* Milestone panels — all rendered, CSS toggles visibility */}
            {milestones.map((m, i) => (
              <div
                key={m.date}
                className={`tl-panel ${
                  i === activeIndex
                    ? 'tl-panel-active'
                    : i < activeIndex
                    ? 'tl-panel-exit'
                    : 'tl-panel-next'
                }`}
              >
                <span className="tl-active-date">{m.date}</span>
                <h3 className="tl-active-title">{m.title}</h3>
                {/* Last milestone (Hackathon Day) shows the day schedule */}
                {i === milestones.length - 1 ? (
                  <div className="tl-day-schedule">
                    {daySchedule.map((item) => (
                      <div key={item.title} className="tl-sch-item">
                        <span className="tl-sch-icon">{item.icon}</span>
                        <div>
                          <span className="tl-sch-time">{item.time}</span>
                          <span className="tl-sch-title">{item.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="tl-active-desc">{m.description}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right sidebar — future dates */}
          <div className="tl-sidebar tl-sidebar-right">
            {milestones.map((m, i) => (
              <div
                key={m.date}
                className={`tl-sidebar-strip${i > activeIndex ? ' visible' : ''} ${
                  i === milestones.length - 1 ? 'tl-strip-highlight' : ''
                }`}
              >
                <span className="tl-sidebar-date">{m.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Timeline
