import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronUp } from 'lucide-react'

import { experiences } from '../data/siteData'

import googleLogo from '../assets/Career/Google.png'
import conduentLogo from '../assets/Career/Conduent.png'
import nttLogo from '../assets/Career/NTT.png'
import ericssonLogo from '../assets/Career/Ericsson.png'
import amexLogo from '../assets/Career/AMEX.png'
import marvelLogo from '../assets/Career/Marvel.png'
import tarletonLogo from '../assets/Career/Tarleton.png'

/* =========================================================
   COMPACT CAREER JOURNEY
========================================================= */

const journey = [
  {
    company: 'Google',
    employer: 'Google (Sourced by Randstad)',
    role: 'Senior Manager',
    subRole: 'Business Intelligence',
    dates: 'Sep 2024 – Present',
    logo: googleLogo,
  },
  {
    company: 'Conduent',
    employer: 'Conduent Business Services',
    role: 'Senior Manager',
    subRole: 'Data Analytics & BI',
    dates: 'Feb 2023 – Sep 2024',
    extra: '(Previously Manager, Mar 2018 – Feb 2023)',
    logo: conduentLogo,
  },
  {
    company: 'NTT DATA',
    employer: 'NTT DATA Services',
    role: 'Team Leader',
    subRole: 'Project Management Operations',
    dates: 'Dec 2015 – Mar 2018',
    logo: nttLogo,
  },
  {
    company: 'Ericsson',
    employer: 'Ericsson India Global Services',
    role: 'Senior Business Analyst',
    dates: 'Apr 2013 – Apr 2015',
    logo: ericssonLogo,
  },
  {
    company: 'American Express',
    employer: 'American Express',
    role: 'Senior Business Analyst',
    dates: 'Feb 2012 – Apr 2013',
    logo: amexLogo,
  },
  {
    company: 'Marvel Infotech',
    employer: 'Marvel Infotech',
    role: 'Business Analyst',
    dates: 'Sep 2010 – Sep 2011',
    logo: marvelLogo,
  },
  {
    company: 'Tarleton',
    employer: 'Tarleton State University',
    role: 'Graduate Assistant',
    subRole: 'Engineering & Physics Department',
    dates: 'Sep 2009 – Aug 2010',
    logo: tarletonLogo,
  },
]

/* =========================================================
   LOGO MAPPING FOR DETAILED EXPERIENCE
========================================================= */

const companyLogoMap = {
  Google: googleLogo,
  'Google (Sourced by Randstad)': googleLogo,

  Conduent: conduentLogo,
  'Conduent Business Services': conduentLogo,

  'NTT DATA': nttLogo,
  'NTT DATA Services': nttLogo,

  Ericsson: ericssonLogo,
  'Ericsson India Global Services': ericssonLogo,

  'American Express': amexLogo,

  'Marvel Infotech': marvelLogo,

  Tarleton: tarletonLogo,
  'Tarleton State University': tarletonLogo,
}

/* =========================================================
   COMPONENT
========================================================= */

export default function Experience() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section
      id="experience"
      className="bg-[#fcfbf8] py-[50px] lg:py-[56px]"
    >
      <div className="shell">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2
              className="
                font-serif
                text-[30px]
                font-semibold
                tracking-[-0.025em]
                text-[#102947]
                lg:text-[34px]
              "
            >
              Professional Journey
            </h2>

            <p
              className="
                mt-1.5
                text-[14px]
                leading-6
                text-[#647386]
                lg:text-[15px]
              "
            >
              A journey of growth, impact and continuous learning.
            </p>
          </div>

          {/* DESKTOP TOGGLE */}
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="
              hidden
              items-center
              gap-2
              text-[13px]
              font-semibold
              text-[#102947]
              transition
              hover:text-[#c98b35]
              md:flex
            "
          >
            {expanded ? 'Show Less' : 'View Full Experience'}

            {expanded ? (
              <ChevronUp size={17} />
            ) : (
              <ArrowRight size={17} />
            )}
          </button>
        </div>

        {/* =====================================================
            COMPACT PROFESSIONAL JOURNEY
        ====================================================== */}
        <div className="relative mt-8">

          {/* TIMELINE TRACK */}
          <div
            className="
              experience-timeline-track
              absolute
              left-0
              right-0
              top-[94px]
              hidden
              h-px
              bg-[#d7d0c7]
              lg:block
            "
          >
            <span className="experience-timeline-progress" />
          </div>

          <div
            className="
              grid
              gap-7
              sm:grid-cols-2
              lg:grid-cols-7
              lg:gap-0
            "
          >
            {journey.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.42,
                  delay: index * 0.04,
                }}
                className="
                  relative
                  lg:px-4
                "
              >
                {/* COMPANY LOGO */}
                <div
                  className="
                    flex
                    h-[76px]
                    items-center
                    justify-start
                    lg:justify-center
                  "
                >
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className={`
                        h-[72px]
                        w-[180px]
                        object-center
                        ${item.company === 'Marvel Infotech' || item.company === 'Tarleton'
                          ? 'scale-[1.18] object-contain'
                          : 'object-cover'}
                      `}
                    />
                  ) : (
                    <div
                      className="
                        text-[18px]
                        font-bold
                        tracking-[-0.03em]
                        text-[#102947]
                      "
                    >
                      {item.company}
                    </div>
                  )}
                </div>

                {/* TIMELINE DOT */}
                <div
                  className="
                    relative
                    z-10
                    mt-[13px]
                    hidden
                    justify-center
                    lg:flex
                  "
                >
                  <div
                    className="
                      h-[11px]
                      w-[11px]
                      rounded-full
                      bg-[#c99548]
                      ring-[4px]
                      ring-[#fcfbf8]
                    "
                  />
                </div>

                {/* BASIC CONTENT */}
                <div
                  className="
                    mt-4
                    border-l
                    border-[#ded9d1]
                    pl-4
                    lg:mt-5
                    lg:min-h-[145px]
                  "
                >
                  <p
                    className="
                      text-[14px]
                      font-semibold
                      leading-[1.22]
                      text-[#102947]
                    "
                  >
                    {item.role}
                  </p>

                  {item.subRole && (
                    <p
                      className="
                        mt-1
                        text-[13px]
                        font-semibold
                        leading-[1.3]
                        text-[#263d58]
                      "
                    >
                      {item.subRole}
                    </p>
                  )}

                  <p
                    className="
                      mt-2
                      text-[12px]
                      leading-[1.45]
                      text-[#6b7786]
                    "
                  >
                    {item.employer}
                  </p>

                  {item.client && (
                    <p
                      className="
                        mt-0.5
                        text-[12px]
                        leading-[1.45]
                        text-[#6b7786]
                      "
                    >
                      {item.client}
                    </p>
                  )}

                  <p
                    className="
                      mt-1.5
                      text-[12px]
                      leading-[1.4]
                      text-[#6b7786]
                    "
                  >
                    {item.dates}
                  </p>

                  {item.extra && (
                    <p
                      className="
                        mt-1
                        text-[11.5px]
                        leading-[1.4]
                        text-[#7d8795]
                      "
                    >
                      {item.extra}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================================
            MOBILE TOGGLE
        ====================================================== */}
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="
            mt-7
            flex
            items-center
            gap-2
            text-[13px]
            font-semibold
            text-[#102947]
            md:hidden
          "
        >
          {expanded ? 'Show Less' : 'View Full Experience'}

          {expanded ? (
            <ChevronUp size={17} />
          ) : (
            <ArrowRight size={17} />
          )}
        </button>

        {/* =====================================================
            DETAILED PROFESSIONAL EXPERIENCE
        ====================================================== */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
                marginTop: 0,
              }}
              animate={{
                opacity: 1,
                height: 'auto',
                marginTop: 40,
              }}
              exit={{
                opacity: 0,
                height: 0,
                marginTop: 0,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden"
            >
              <div
                className="
                  border-t
                  border-[#102947]/10
                  pt-9
                "
              >
                {/* DETAILED HEADER */}
                <div className="mb-7">
                  <p
                    className="
                      section-eyebrow
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.34em]
                      text-[#c28a38]
                    "
                  >
                    Experience
                  </p>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-[28px]
                      font-semibold
                      tracking-[-0.02em]
                      text-[#102947]
                    "
                  >
                    Detailed Professional Experience
                  </h3>
                </div>

                {/* =================================================
                    DETAILED EXPERIENCE CARDS
                ================================================= */}
                <div className="space-y-5">
                  {experiences.map((e, index) => {
                    const companyLogo =
                      companyLogoMap[e.company] ||
                      companyLogoMap[e.employer] ||
                      null
                    const usesEmblemFit =
                      e.company === 'Marvel Infotech' ||
                      e.company === 'Tarleton' ||
                      e.company === 'Tarleton State University'

                    return (
                      <motion.article
                        key={`${e.company}-${index}`}
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.04,
                        }}
                        className="
                          group
                          relative
                          overflow-hidden

                          rounded-[20px]

                          border
                          border-[#102947]/10

                          bg-white

                          px-6
                          py-6

                          shadow-[0_6px_20px_rgba(16,41,71,0.035)]

                          transition-all
                          duration-300

                          hover:-translate-y-[2px]
                          hover:border-[#c28a38]/25
                          hover:shadow-[0_14px_34px_rgba(16,41,71,0.07)]

                          lg:px-8
                          lg:py-7
                        "
                      >
                        {/* GOLD LEFT ACCENT */}
                        <div
                          className="
                            absolute
                            bottom-0
                            left-0
                            top-0
                            w-[3px]

                            bg-gradient-to-b
                            from-[#c28a38]
                            via-[#e0bc7b]
                            to-transparent

                            opacity-75
                          "
                        />

                        <div
                          className="
                            grid
                            gap-6

                            lg:grid-cols-[210px_1fr]
                            lg:gap-8
                          "
                        >
                          {/* =========================================
                              LEFT: LOGO + DATE + LOCATION
                          ========================================== */}
                          <div
                            className="
                              flex
                              flex-col
                              items-start
                              gap-4

                              sm:flex-row
                              sm:items-center
                              sm:gap-5

                              lg:flex-col
                              lg:items-start
                              lg:gap-0
                            "
                          >
                            {/* LOGO CARD */}
                            <div
                              className="
                                flex
                                h-[82px]
                                w-full
                                shrink-0
                                items-center
                                justify-center

                                rounded-[15px]

                                border
                                border-[#102947]/8

                                bg-[#fcfaf6]

                                overflow-hidden

                                shadow-[0_4px_14px_rgba(16,41,71,0.025)]

                                sm:w-[150px]

                                lg:h-[90px]
                                lg:w-full
                              "
                            >
                              {companyLogo ? (
                                <img
                                  src={companyLogo}
                                  alt={`${e.company} logo`}
                                  className={`
                                    h-full
                                    w-full
                                    object-center
                                    transition-transform
                                    duration-300
                                    ${usesEmblemFit
                                      ? 'scale-[1.5] object-contain group-hover:scale-[1.54]'
                                      : 'object-cover group-hover:scale-[1.025]'}
                                  `}
                                />
                              ) : (
                                <span
                                  className="
                                    text-center
                                    text-[16px]
                                    font-bold
                                    leading-tight
                                    tracking-[-0.025em]
                                    text-[#102947]
                                  "
                                >
                                  {e.company}
                                </span>
                              )}
                            </div>

                            {/* DATE / LOCATION */}
                            <div className="lg:mt-5">
                              <span
                                className="
                                  inline-flex
                                  rounded-full
                                  bg-[#f5ecdf]
                                  px-3
                                  py-1

                                  text-[11px]
                                  font-semibold
                                  text-[#9e6d26]
                                "
                              >
                                {e.dates}
                              </span>

                              {e.location && (
                                <p
                                  className="
                                    mt-3
                                    text-[12px]
                                    font-medium
                                    leading-[1.45]
                                    text-[#738093]
                                  "
                                >
                                  {e.location}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* =========================================
                              RIGHT: EXPERIENCE CONTENT
                          ========================================== */}
                          <div>

                            {/* COMPANY / CLIENT */}
                            <div
                              className="
                                flex
                                flex-wrap
                                items-center
                                gap-x-3
                                gap-y-2
                              "
                            >
                              <h4
                                className="
                                  font-serif
                                  text-[23px]
                                  font-semibold
                                  leading-tight
                                  tracking-[-0.025em]
                                  text-[#102947]
                                "
                              >
                                {e.company}
                              </h4>

                              {e.client && (
                                <span
                                  className="
                                    inline-flex
                                    rounded-full
                                    bg-[#f9f2e7]
                                    px-2.5
                                    py-1

                                    text-[10.5px]
                                    font-semibold
                                    text-[#b57a27]
                                  "
                                >
                                  {e.client}
                                </span>
                              )}
                            </div>

                            {/* ROLE */}
                            <p
                              className="
                                mt-1
                                text-[14px]
                                font-semibold
                                text-[#24486e]
                              "
                            >
                              {e.role}
                            </p>

                            {/* SUMMARY */}
                            {e.summary && (
                              <p
                                className="
                                  mt-4
                                  max-w-[1000px]

                                  text-[13.5px]
                                  leading-6
                                  text-[#647386]
                                "
                              >
                                {e.summary}
                              </p>
                            )}

                            {/* HIGHLIGHTS */}
                            {e.highlights?.length > 0 && (
                              <ul
                                className="
                                  mt-5
                                  grid
                                  gap-2.5

                                  text-[13px]
                                  leading-5
                                  text-[#647386]

                                  xl:grid-cols-2
                                  xl:gap-x-10
                                "
                              >
                                {e.highlights.map((highlight) => (
                                  <li
                                    key={highlight}
                                    className="
                                      flex
                                      gap-3
                                      rounded-[10px]

                                      px-2
                                      py-1

                                      transition-colors
                                      duration-200

                                      hover:bg-[#fbf8f2]
                                    "
                                  >
                                    <span
                                      className="
                                        mt-[7px]
                                        h-1.5
                                        w-1.5
                                        shrink-0
                                        rounded-full
                                        bg-[#c28a38]
                                      "
                                    />

                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </motion.article>
                    )
                  })}
                </div>

                {/* =================================================
                    CLOSE BUTTON
                ================================================= */}
                <div className="mt-7 flex justify-center">
                  <button
                    onClick={() => setExpanded(false)}
                    className="
                      inline-flex
                      items-center
                      gap-2

                      text-[13px]
                      font-semibold
                      text-[#102947]

                      transition
                      hover:text-[#c98b35]
                    "
                  >
                    Show Less
                    <ChevronUp size={17} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
