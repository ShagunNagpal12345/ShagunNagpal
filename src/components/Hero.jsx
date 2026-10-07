import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Trophy,
  BarChart3,
  Users,
  Clock3,
  Building2,
} from 'lucide-react'

import heroImage from '../assets/profile/hero.png'
import resumePdf from '../assets/resume/Shagun Nagpal 15+ Executive.pdf'
import { profile } from '../data/siteData'

const heroMetrics = [
  {
    value: '15+',
    label: 'Years of Experience',
    icon: Trophy,
  },
  {
    value: '30+',
    label: 'Analytics Products & Dashboards',
    icon: BarChart3,
  },
  {
    value: '2,000+',
    label: 'Ad Hoc Requests Consolidated',
    icon: Users,
  },
  {
    value: '1,000+',
    label: 'Annual Hours Saved',
    icon: Clock3,
  },
]

const heroSequence = {
  hidden: {},
  visible: { transition: { delayChildren: 0.12, staggerChildren: 0.1 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
}

const typedPhrases = [
  'strategy leaders can act on',
  'analytics teams built to scale',
  'AI grounded in business value',
  'clarity across complex operations',
]

function TypedHeroLine() {
  const reduceMotion = useReducedMotion()
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [characterIndex, setCharacterIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduceMotion) return undefined

    const phrase = typedPhrases[phraseIndex]
    let delay = deleting ? 28 : 52

    if (!deleting && characterIndex === phrase.length) delay = 1700
    if (deleting && characterIndex === 0) delay = 260

    const timeout = window.setTimeout(() => {
      if (!deleting && characterIndex < phrase.length) {
        setCharacterIndex((current) => current + 1)
      } else if (!deleting) {
        setDeleting(true)
      } else if (characterIndex > 0) {
        setCharacterIndex((current) => current - 1)
      } else {
        setDeleting(false)
        setPhraseIndex((current) => (current + 1) % typedPhrases.length)
      }
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [characterIndex, deleting, phraseIndex, reduceMotion])

  const visibleText = reduceMotion
    ? typedPhrases[0]
    : typedPhrases[phraseIndex].slice(0, characterIndex)

  return (
    <>
      <span className="sr-only">I build {typedPhrases[0]}.</span>
      <span aria-hidden="true">
        I build <span className="font-semibold text-[#b97928]">{visibleText}</span>
        <span className="typing-cursor" />
      </span>
    </>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#faf7f1]"
    >
      <div className="relative min-h-[100vh] lg:min-h-[760px]">

        {/* BACKGROUND IMAGE */}
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="theme-hero-image hero-parallax-image absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* READABILITY OVERLAY */}
        <div
          className="
            theme-hero-overlay absolute inset-0
            bg-[linear-gradient(90deg,rgba(250,248,243,0.98)_0%,rgba(250,248,243,0.94)_27%,rgba(250,248,243,0.72)_42%,rgba(250,248,243,0.20)_59%,rgba(250,248,243,0)_100%)]
          "
        />

        {/* HERO CONTENT */}
        <div
          className="
            shell relative z-10
            flex min-h-[100svh]
            items-start
            pt-[122px]
            pb-8
            lg:min-h-[760px]
            lg:pt-[145px]
            lg:pb-[182px]
          "
        >
          <div className="hero-content-parallax w-full max-w-[770px]">
            <motion.div
              variants={heroSequence}
              initial="hidden"
              animate="visible"
            >
            {/* KICKER */}
            <motion.p
              variants={heroItem}
              className="section-eyebrow
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.42em]
                text-[#18385c]
              "
            >
              From Data To
            </motion.p>

            {/* MAIN HEADING */}
            <motion.h1
              variants={heroItem}
              className="
                mt-4
                max-w-[860px]
                font-serif
                text-[44px]
                font-semibold
                leading-[0.97]
                tracking-[-0.05em]
                text-[#102947]
                min-[380px]:text-[50px]
                sm:text-[60px]
                lg:text-[68px]
                xl:text-[74px]
              "
            >
              Decisions to{' '}
              <span className="text-[#c98c34]">
                Impact
              </span>
            </motion.h1>

            {/* TITLE */}
            <motion.h2
              variants={heroItem}
              className="
                mt-5
                font-serif
                text-[24px]
                font-semibold
                leading-[1.08]
                tracking-[-0.02em]
                text-[#102947]
                sm:text-[27px]
                lg:text-[30px]
              "
            >
              Business Intelligence &amp; Analytics Leader
            </motion.h2>

            <motion.p
              variants={heroItem}
              className="mt-3 min-h-[28px] text-[17px] leading-7 text-[#294866] sm:text-[18px]"
            >
              <TypedHeroLine />
            </motion.p>

            {/* DESCRIPTION */}
            <motion.p
              variants={heroItem}
              className="
                mt-4
                max-w-[660px]
                text-[16px]
                leading-[1.6]
                text-[#40546e]
                lg:text-[17px]
              "
            >
              I lead cross-functional teams from fragmented reporting and
              manual work to trusted systems, stronger governance and faster
              executive decisions.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={heroItem} className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="
                  inline-flex h-[56px]
                  items-center justify-center
                  gap-3
                  rounded-[11px]
                  bg-[#0e2d51]
                  px-8
                  text-[15px]
                  font-semibold
                  text-white
                  shadow-[0_10px_26px_rgba(15,40,72,0.18)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#173a61]
                "
              >
                Explore My Work
                <ArrowRight size={18} />
              </a>

              <a
                href={resumePdf}
                download="Shagun Nagpal Resume.pdf"
                className="
                  inline-flex h-[56px]
                  items-center justify-center
                  gap-3
                  rounded-[11px]
                  border border-[#183a61]/50
                  bg-white/80
                  px-8
                  text-[15px]
                  font-semibold
                  text-[#102947]
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-white
                "
              >
                Download Resume
                <Download size={18} />
              </a>
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div
              variants={heroItem}
              className="
                mt-7
                flex flex-wrap
                items-center
                gap-x-7
                gap-y-3
                text-[14px]
                font-medium
                text-[#17385c]
              "
            >
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-[#c98c34]"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>

              <span className="hidden h-6 w-px bg-[#c8beaf] sm:block" />

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-[#c98c34]"
              >
                <Github size={18} />
                GitHub
              </a>

              <span className="hidden h-6 w-px bg-[#c8beaf] sm:block" />

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 transition hover:text-[#c98c34]"
              >
                <Mail size={18} />
                Email
              </a>
            </motion.div>
            </motion.div>
          </div>
        </div>

        {/* STATS BAR */}
        <div
          className="
            hero-stats-parallax shell
            relative
            bottom-auto
            left-auto
            z-20
            w-full
            pb-5
            lg:absolute
            lg:bottom-[20px]
            lg:left-1/2
            lg:pb-0
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="
              theme-panel grid
              overflow-hidden
              rounded-[24px]
              border border-[#173654]/10
              bg-white
              shadow-[0_18px_45px_rgba(21,42,65,0.12)]
              sm:grid-cols-2
              lg:grid-cols-[0.9fr_1fr_1.15fr_1fr_1.45fr]
            "
          >
            {heroMetrics.map((metric, index) => {
              const Icon = metric.icon

              return (
                <div
                  key={metric.label}
                  className={`
                    flex min-h-[118px]
                    items-center
                    gap-4
                    px-6
                    py-4
                    ${
                      index
                        ? 'border-t border-[#183654]/10 sm:border-l lg:border-t-0'
                        : ''
                    }
                  `}
                >
                  <div
                    className="
                      grid h-[44px] w-[44px]
                      shrink-0
                      place-items-center
                      text-[#c98c34]
                    "
                  >
                    <Icon size={31} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0">
                    <div
                      data-count={metric.value.replace(/\D/g, '')}
                      data-suffix={metric.value.includes('+') ? '+' : ''}
                      className="
                        font-serif
                        text-[28px]
                        font-semibold
                        leading-none
                        tracking-[-0.03em]
                        text-[#102947]
                      "
                    >
                      {metric.value}
                    </div>

                    <p
                      className="
                        mt-2
                        max-w-[165px]
                        text-[12px]
                        font-medium
                        leading-[1.4]
                        text-[#52647a]
                      "
                    >
                      {metric.label}
                    </p>
                  </div>
                </div>
              )
            })}

            {/* CROSS-FUNCTIONAL LEADERSHIP */}
            <div
              className="
                flex min-h-[104px]
                items-center
                gap-4
                border-t border-[#183654]/10
                px-6
                py-4
                sm:col-span-2
                sm:border-l
                lg:col-span-1
                lg:border-t-0
              "
            >
              <div
                className="
                  grid h-[44px] w-[44px]
                  shrink-0
                  place-items-center
                  text-[#c98c34]
                "
              >
                <Building2 size={31} strokeWidth={1.7} />
              </div>

              <div className="min-w-0">
                <div
                  className="
                    font-serif
                    text-[17px]
                    font-semibold
                    leading-[1.15]
                    text-[#102947]
                  "
                >
                  Cross-Functional Leadership
                </div>

                <p
                  className="
                    mt-2
                    text-[12px]
                    font-medium
                    leading-[1.45]
                    text-[#52647a]
                  "
                >
                  Recruiting · Finance · Procurement
                  <br />
                  Operations · Global Teams
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
