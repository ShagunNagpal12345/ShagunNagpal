import {
  BrainCircuit,
  ChartNoAxesCombined,
  Users,
  Waypoints,
  ArrowRight,
} from 'lucide-react'

import aboutBg from '../assets/profile/abount us.png'

const focus = [
  {
    icon: ChartNoAxesCombined,
    title: 'Analytics Strategy & Transformation',
    copy: 'Building scalable analytics capabilities and data-driven operating models.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Enabled Intelligence',
    copy: 'Applying AI to real business problems and accelerating decision-making.',
  },
  {
    icon: Waypoints,
    title: 'Executive Decision Support',
    copy: 'Turning complex information into actionable insights for leadership.',
  },
  {
    icon: Users,
    title: 'Team Leadership & Capability Building',
    copy: 'Building high-performing teams and developing analytics capability.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#f8f4ec]
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={aboutBg}
          alt=""
          aria-hidden="true"
          className="
            theme-about-image absolute
            -inset-3
            h-[calc(100%+24px)]
            w-[calc(100%+24px)]
            object-cover
            object-center
            opacity-40
            blur-[8px]
          "
        />
      </div>

      {/* SOFTENED IMAGE WASH */}
      <div
        className="
          theme-about-overlay pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(90deg,rgba(251,248,242,0.92)_0%,rgba(251,248,242,0.72)_44%,rgba(251,248,242,0.48)_100%)]
        "
      />

      {/* MAIN CONTENT */}
      <div
        className="
          shell
          relative
          z-10
          grid
          min-h-[540px]
          grid-cols-[minmax(380px,0.82fr)_minmax(620px,1.18fr)]
          items-center
          gap-[clamp(44px,6vw,96px)]
          py-[clamp(32px,4vw,48px)]

          max-[1200px]:min-h-0
          max-[1200px]:grid-cols-1
          max-[1200px]:gap-10
          max-[1200px]:py-10
        "
      >
        {/* LEFT CONTENT */}
        <div className="max-w-[570px]">
          {/* EYEBROW */}
          <div className="flex items-center gap-5">
            <span className="h-px w-[50px] bg-[#b97827]" />

            <p
              className="section-eyebrow
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.34em]
                text-[#b97827]
              "
            >
              About Me
            </p>
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-[22px]
              font-serif
              text-[54px]
              font-semibold
              leading-[0.96]
              tracking-[-0.045em]
              text-[#0b2b4b]

              xl:text-[40px]

              max-[768px]:text-[44px]
              max-[520px]:text-[38px]
            "
          >
            Turning Data
            Into Decisions
          </h2>

          {/* PARAGRAPH 1 */}
          <p
            className="
              mt-[24px]
              max-w-[575px]
              text-[16px]
              leading-[1.55]
              text-[#536d88]

              max-[768px]:text-[15px]
            "
          >
            Business Intelligence and Analytics leader with 15+ years
            of experience building and scaling analytics capabilities across
            Recruiting, Finance, Procurement and Operations.
          </p>

          {/* PARAGRAPH 2 */}
          <p
          className="mt-[17px]
          max-w-[575px]
          text-[16px]
          leading-[1.55]
          text-[#536d88]
          max-[768px]:text-[15px]">
          Specialize in executive reporting, self-service analytics,
          AI-enabled solutions and data-driven strategies that help make faster
          decisions and create measurable impact.
          </p>


          {/* CTA */}
          <a
            href="#experience"
            className="
              mt-[24px]
              inline-flex
              h-[58px]
              min-w-[335px]
              items-center
              justify-between
              rounded-[9px]
              bg-[#0c3a68]
              px-[34px]
              font-serif
              text-[17px]
              font-semibold
              text-white

              shadow-[0_12px_26px_rgba(12,58,104,0.14)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-[#114676]
              hover:shadow-[0_15px_30px_rgba(12,58,104,0.19)]

              max-[520px]:min-w-0
              max-[520px]:w-full
            "
          >
            <span>Explore My Experience</span>

            <ArrowRight
              size={23}
              strokeWidth={1.4}
              className="
                text-[#d6a13d]
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </div>

        {/* CARDS */}
        <div
          className="
            grid
            grid-cols-2
            gap-4

            max-[1200px]:grid-cols-2

            max-[680px]:grid-cols-1
          "
        >
          {focus.map(({ icon: Icon, title, copy }) => (
            <article
              key={title}
              className="
                theme-panel group
                flex
                min-h-[218px]
                flex-col

                rounded-[17px]

                border
                border-[#b9aa92]/30

                bg-[rgba(255,253,249,0.94)]

                px-[24px]
                py-[20px]

                shadow-[0_8px_26px_rgba(63,45,23,0.055)]

                backdrop-blur-[3px]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-[0_16px_34px_rgba(63,45,23,0.10)]
              "
            >
              {/* ICON */}
              <div
                className="
                  grid
                  h-[52px]
                  w-[52px]
                  shrink-0
                  place-items-center

                  rounded-full

                  bg-[#f8ead3]
                  text-[#c07c22]
                "
              >
                <Icon size={25} strokeWidth={1.6} />
              </div>

              {/* CARD CONTENT */}
              <div className="mt-[14px]">
                <h3
                  className="
                    max-w-[260px]
                    font-serif
                    text-[19px]
                    font-semibold
                    leading-[1.08]
                    tracking-[-0.025em]
                    text-[#0d2d4f]
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    mt-[9px]
                    max-w-[280px]
                    text-[13.5px]
                    leading-[1.4]
                    text-[#5f748b]
                  "
                >
                  {copy}
                </p>
              </div>

              {/* ARROW */}
              <div
                className="
                  mt-auto
                  pt-[10px]
                  text-[#c27e25]

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              >
                <ArrowRight size={22} strokeWidth={1.25} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
