import {
  Award,
  Trophy,
  Lightbulb,
  Users,
  GraduationCap,
  ArrowRight,
  Mail,
  Linkedin,
  Phone,
  Github,
  Globe2,
  ChartNoAxesCombined,
} from 'lucide-react'

import recognitionBg from '../assets/Awards/recognition-education-bg.png'
import tarletonImage from '../assets/Awards/tarleton-university.png'
import kurukshetraImage from '../assets/Awards/kurukshetra-university.png'
import { profile } from '../data/siteData'

const recognitionItems = [
  {
    icon: Award,
    title: 'Multiple employee performance awards',
    copy: 'and peer recognition programs at NTT DATA.',
  },
  {
    icon: Trophy,
    title: 'Recognition for successful implementation',
    copy: 'and delivery of the Ericsson Threshold Analysis Project.',
  },
  {
    icon: Users,
    title: 'Best Team Player Award',
    copy: 'at American Express.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation recognition',
    copy: 'through the GBSS Mastermind improvement platform.',
  },
]

const educationItems = [
  {
    degree: 'Master of Business Administration (MBA)',
    school: 'Tarleton State University',
    location: 'Texas, USA',
    dates: '2008 – 2010',
    image: tarletonImage,
    badge: 'Global Perspective',
    badgeIcon: Globe2,
  },
  {
    degree: 'Bachelor of Commerce (B.Com)',
    school: 'Kurukshetra University',
    location: 'India',
    dates: '2004 – 2007',
    image: kurukshetraImage,
    badge: 'Strong Academic Foundation',
    badgeIcon: ChartNoAxesCombined,
  },
]

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shagunnagpal',
    href: profile.linkedin,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/ShagunNagpal12345',
    href: profile.github,
  },
]

export default function Recognition() {
  return (
    <section
      id="recognition"
      className="relative overflow-hidden bg-[#fbf7ef] text-[#0b2b4b]"
    >
      {/* =====================================
          CONTROLLED BACKGROUND
      ====================================== */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[610px] overflow-hidden">
        <img
          src={recognitionBg}
          alt=""
          aria-hidden="true"
          className="
            theme-recognition-image absolute
            left-1/2
            top-0
            h-full
            w-full
            max-w-none
            -translate-x-1/2
            object-cover
            object-center
            opacity-[0.72]
          "
        />

        {/* neutralise centre so text stays clean */}
        <div
          className="
            theme-recognition-overlay absolute inset-0
            bg-[linear-gradient(90deg,
            rgba(251,247,239,0.70)_0%,
            rgba(251,247,239,0.88)_23%,
            rgba(251,247,239,0.93)_45%,
            rgba(251,247,239,0.84)_66%,
            rgba(251,247,239,0.40)_100%)]
          "
        />

        {/* fade naturally into contact section */}
        <div
          className="
            theme-recognition-fade absolute
            inset-x-0
            bottom-0
            h-[170px]
            bg-gradient-to-b
            from-transparent
            to-[#fbf7ef]
          "
        />
      </div>

      <div className="shell relative z-10 py-[42px]">

        {/* =====================================
            MAIN 2-COLUMN BLOCK
        ====================================== */}
        <div
          className="
            relative
            grid
            grid-cols-2
            gap-[76px]

            max-[1100px]:grid-cols-1
            max-[1100px]:gap-12
          "
        >
          {/* CENTER DIVIDER */}
          <div
            className="
              absolute
              left-1/2
              top-[8px]
              bottom-[8px]
              w-px
              -translate-x-1/2
              bg-[#d8b36a]/40

              max-[1100px]:hidden
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-1/2
                grid
                h-[22px]
                w-[22px]
                -translate-x-1/2
                -translate-y-1/2
                place-items-center
                rounded-full
                border
                border-[#d3a14a]/50
                bg-[#fffaf2]
              "
            >
              <span className="h-[5px] w-[5px] rounded-full bg-[#d99325]" />
            </div>
          </div>

          {/* =====================================
              RECOGNITION
          ====================================== */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-[48px] bg-[#c8842c]" />

              <p
                className="section-eyebrow
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.30em]
                  text-[#bc7928]
                "
              >
                Recognition
              </p>
            </div>

            {/* TITLE ROW */}
            <div className="mt-[15px] flex items-start justify-between gap-6">
              <h2
                className="
                  max-w-[550px]
                  font-serif
                  text-[34px]
                  font-semibold
                  leading-[0.97]
                  tracking-[-0.045em]
                  text-[#0b2b4b]
                "
              >
                Recognition for
                <br />
                performance, delivery
                <br />
                and innovation.
              </h2>

              {/* AWARD MARK */}
              <div
                className="
                  mt-[6px]
                  hidden
                  h-[112px]
                  w-[112px]
                  shrink-0
                  place-items-center
                  rounded-full
                  border
                  border-[#d8ad62]/50
                  bg-[#fffaf2]/70
                  backdrop-blur-sm

                  xl:grid
                "
              >
                <div className="text-center">
                  <div className="text-[22px] text-[#dda038]">★</div>

                  <p
                    className="
                      mt-[4px]
                      text-[9px]
                      font-bold
                      uppercase
                      leading-[1.35]
                      tracking-[0.18em]
                      text-[#b97625]
                    "
                  >
                    Awards
                    <br />
                    & Impact
                  </p>
                </div>
              </div>
            </div>

            <p
              className="
                mt-[15px]
                max-w-[590px]
                text-[14px]
                leading-[1.55]
                text-[#536b83]
              "
            >
              Trusted by organizations and peers for delivering impactful
              solutions, building high-performing teams and driving innovation.
            </p>

            {/* CARDS */}
            <div
              className="
                mt-[20px]
                grid
                grid-cols-2
                gap-[14px]

                max-[700px]:grid-cols-1
              "
            >
              {recognitionItems.map(({ icon: Icon, title, copy }) => (
                <article
                  key={title}
                  className="
                    group
                    flex
                    min-h-[118px]
                    items-center
                    rounded-[18px]
                    border
                    border-[#d6caba]/55
                    bg-white/92
                    px-[17px]
                    py-[15px]

                    shadow-[0_10px_30px_rgba(61,47,28,0.06)]
                    backdrop-blur-md

                    transition-all
                    duration-300

                    hover:-translate-y-[3px]
                    hover:border-[#d3ae6c]/65
                    hover:shadow-[0_16px_36px_rgba(61,47,28,0.10)]
                  "
                >
                  <div
                    className="
                      grid
                      h-[52px]
                      w-[52px]
                      shrink-0
                      place-items-center
                      rounded-full
                      bg-[#fbf0dc]
                      text-[#dc8a13]
                    "
                  >
                    <Icon size={24} strokeWidth={1.7} />
                  </div>

                  <div className="ml-[15px] min-w-0 flex-1">
                    <h3
                      className="
                        text-[14px]
                        font-bold
                        leading-[1.22]
                        text-[#0b2b4b]
                      "
                    >
                      {title}
                    </h3>

                    <p
                      className="
                        mt-[4px]
                        text-[12px]
                        leading-[1.4]
                        text-[#587086]
                      "
                    >
                      {copy}
                    </p>
                  </div>

                  <div
                    className="
                      ml-[8px]
                      grid
                      h-[38px]
                      w-[38px]
                      shrink-0
                      place-items-center
                      rounded-full
                      bg-[#fbf0dc]
                      text-[#d58a16]
                    "
                  >
                    <ArrowRight
                      size={18}
                      strokeWidth={1.7}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-[2px]
                      "
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* =====================================
              EDUCATION
          ====================================== */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-[48px] bg-[#c8842c]" />

              <p
                className="section-eyebrow
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.30em]
                  text-[#bc7928]
                "
              >
                Education
              </p>
            </div>

            <h2
              className="
                mt-[15px]
                max-w-[610px]
                font-serif
                text-[34px]
                font-semibold
                leading-[0.97]
                tracking-[-0.045em]
                text-[#0b2b4b]
              "
            >
              Business foundation,
              <br />
              global perspective.
            </h2>

            <p
              className="
                mt-[15px]
                max-w-[570px]
                text-[14px]
                leading-[1.55]
                text-[#536b83]
              "
            >
              A strong academic foundation that has shaped my analytical
              thinking and global business perspective.
            </p>

            {/* EDUCATION CARDS */}
            <div className="mt-[20px] space-y-[14px]">
              {educationItems.map(
                ({
                  degree,
                  school,
                  location,
                  dates,
                  image,
                  badge,
                  badgeIcon: BadgeIcon,
                }) => (
                  <article
                    key={degree}
                    className="
                      relative
                      min-h-[172px]
                      overflow-hidden
                      rounded-[18px]
                      border
                      border-[#d5cabc]/55
                      bg-white
                      shadow-[0_10px_30px_rgba(61,47,28,0.06)]
                    "
                  >
                    {/* IMAGE */}
                    <div className="recognition-image-frame absolute inset-y-0 right-0 w-[48%]">
                      <img
                        src={image}
                        alt={`${school} campus`}
                        loading="lazy"
                        decoding="async"
                        className="
                          theme-education-image
                          h-full
                          w-full
                          object-cover
                          object-center
                        "
                      />

                      <div
                        className="
                          theme-education-image-wash
                          absolute
                          inset-0
                          bg-gradient-to-r
                          from-white
                          via-white/45
                          to-transparent
                        "
                      />
                    </div>

                    <div className="absolute inset-y-0 left-0 w-[2px] bg-[#d69225]" />

                    {/* CONTENT */}
                    <div
                      className="
                        relative
                        z-10
                        flex
                        min-h-[172px]
                        gap-[16px]
                        px-[21px]
                        py-[20px]
                      "
                    >
                      <div
                        className="
                          grid
                          h-[50px]
                          w-[50px]
                          shrink-0
                          place-items-center
                          rounded-[14px]
                          bg-[#fbefdc]
                          text-[#d88915]
                        "
                      >
                        <GraduationCap size={25} strokeWidth={1.65} />
                      </div>

                      <div className="max-w-[390px] pt-[2px]">
                        <h3
                          className="
                            text-[16px]
                            font-bold
                            leading-[1.2]
                            text-[#092a4c]
                          "
                        >
                          {degree}
                        </h3>

                        <p className="mt-[7px] text-[13px] text-[#536b82]">
                          {school} · {location}
                        </p>

                        <p
                          className="
                            mt-[7px]
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-[#c27a21]
                          "
                        >
                          {dates}
                        </p>

                        <div
                          className="
                            mt-[10px]
                            inline-flex
                            h-[29px]
                            items-center
                            gap-[7px]
                            rounded-full
                            bg-[#edf4f9]
                            px-[13px]
                          "
                        >
                          <BadgeIcon
                            size={14}
                            className="text-[#2778b3]"
                          />

                          <span
                            className="
                              text-[8px]
                              font-bold
                              uppercase
                              tracking-[0.20em]
                              text-[#143956]
                            "
                          >
                            {badge}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </div>

        {/* =====================================
            CONTACT - CLEAN IVORY AREA
        ====================================== */}
        <div
          className="
            mt-[28px]
            border-t
            border-[#d5b675]/35
            pt-[20px]
          "
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-[48px] bg-[#c8842c]" />

            <p
              className="section-eyebrow
                text-[9px]
                font-bold
                uppercase
                tracking-[0.30em]
                text-[#bc7928]
              "
            >
              Get In Touch
            </p>
          </div>

          <div className="mt-[5px] flex items-end justify-between gap-10">
            <div>
              <h3
                className="
                  font-serif
                  text-[38px]
                  font-semibold
                  leading-none
                  tracking-[-0.04em]
                  text-[#0b2b4b]
                "
              >
                Let’s Connect
              </h3>

              <p
                className="
                  mt-[5px]
                  max-w-[560px]
                  text-[12px]
                  leading-[1.4]
                  text-[#587086]
                "
              >
                Open to opportunities, collaborations and conversations around
                data, analytics and business transformation.
              </p>
            </div>
          </div>

          <div
            className="
              mt-[13px]
              grid
              grid-cols-4
              gap-[13px]

              max-[1000px]:grid-cols-2
              max-[600px]:grid-cols-1
            "
          >
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="
                  group
                  flex
                  h-[62px]
                  items-center
                  rounded-[14px]
                  border
                  border-[#d9be86]/55
                  bg-white/90
                  px-[13px]
                  shadow-[0_5px_16px_rgba(83,61,30,0.04)]

                  transition-all
                  duration-300

                  hover:-translate-y-[2px]
                  hover:bg-white
                  hover:shadow-[0_10px_24px_rgba(83,61,30,0.08)]
                "
              >
                <div
                  className="
                    grid
                    h-[39px]
                    w-[39px]
                    shrink-0
                    place-items-center
                    rounded-full
                    bg-[#fbf0dc]
                    text-[#d68a16]
                  "
                >
                  <Icon size={19} strokeWidth={1.7} />
                </div>

                <div className="ml-[11px] min-w-0 flex-1">
                  <p className="text-[11px] font-bold text-[#0c2c4c]">
                    {label}
                  </p>

                  <p className="mt-[2px] break-all text-[10px] leading-tight text-[#587086]">
                    {value}
                  </p>
                </div>

                <ArrowRight
                  size={17}
                  strokeWidth={1.6}
                  className="
                    ml-2
                    text-[#cc8118]
                    transition-transform
                    duration-300
                    group-hover:translate-x-[2px]
                  "
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
