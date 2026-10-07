import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Database,
  Settings2,
  Server,
  ShieldCheck,
} from 'lucide-react'

import { skills } from '../data/siteData'

const skillMeta = {
  'Data & Analytics': {
    icon: Database,
    description:
      'Build, model and analyze data to create reliable and scalable insights.',
    accent: '#38bdf8',
    iconBg: 'rgba(14,165,233,0.12)',
  },

  'Business Intelligence': {
    icon: BarChart3,
    description:
      'Create executive dashboards and self-service analytics for faster decisions.',
    accent: '#f5b942',
    iconBg: 'rgba(245,185,66,0.12)',
  },

  'AI & Application Development': {
    icon: BrainCircuit,
    description:
      'Build intelligent solutions and modern applications using AI and modern tech.',
    accent: '#a866ff',
    iconBg: 'rgba(168,102,255,0.12)',
  },

  'Automation & Delivery': {
    icon: Settings2,
    description:
      'Automate processes and streamline delivery across business functions.',
    accent: '#10d9b0',
    iconBg: 'rgba(16,217,176,0.12)',
  },

  'Enterprise Systems': {
    icon: Server,
    description:
      'Work with enterprise platforms to integrate and manage data.',
    accent: '#4c9dff',
    iconBg: 'rgba(76,157,255,0.12)',
  },

  'Analytics Governance & Delivery': {
    icon: ShieldCheck,
    description:
      'Ensure data quality, governance and scalable analytics delivery.',
    accent: '#ff6288',
    iconBg: 'rgba(255,98,136,0.12)',
  },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#061426]
        py-[58px]
        text-white
      "
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            -right-[170px]
            -top-[230px]
            h-[580px]
            w-[580px]
            rounded-full
            border
            border-[#2f80c7]/15
            bg-[radial-gradient(circle_at_center,rgba(30,110,180,0.14),rgba(5,20,38,0)_68%)]
          "
        />

        <div
          className="
            absolute
            right-0
            top-0
            h-[300px]
            w-[600px]
            opacity-[0.13]
          "
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(89,167,229,0.45) 1px, transparent 1px)',
            backgroundSize: '14px 14px',
          }}
        />

        <div
          className="
            absolute
            -left-[180px]
            top-[180px]
            h-[390px]
            w-[390px]
            rotate-45
            border
            border-white/[0.025]
          "
        />
      </div>

      <div className="shell relative z-10">

        {/* HEADER */}
        <div className="max-w-[1100px]">

          <div className="flex items-center gap-5">
            <span className="h-px w-[62px] bg-[#d8a13b]" />

            <p
              className="section-eyebrow
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#d8a13b]
              "
            >
              Technical Ecosystem
            </p>
          </div>

          <h2
            className="
              mt-[15px]
              text-[30px]
              font-semibold
              leading-[1.04]
              tracking-[-0.045em]
              text-white

              sm:text-[38px]
              lg:text-[42px]
            "
          >
            Depth across Data, Business Intelligence, AI and Delivery.
          </h2>

          <p
            className="
              mt-[10px]
              text-[17px]
              leading-[1.45]
              text-[#8caac8]

              lg:text-[18px]
            "
          >
            A modern stack to build, analyze, automate and deliver real
            business impact.
          </p>
        </div>

        {/* CARDS */}
        <div
          className="
            mt-[30px]
            grid
            gap-[14px]
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {skills.map((skill) => {
            const meta =
              skillMeta[skill.title] || skillMeta['Data & Analytics']

            const Icon = meta.icon

            return (
              <article
                key={skill.title}
                className="
                  group
                  relative
                  min-h-[225px]
                  overflow-hidden
                  rounded-[22px]
                  border
                  bg-[linear-gradient(145deg,rgba(12,34,56,0.96),rgba(5,22,38,0.98))]
                  p-[22px]
                  shadow-[0_12px_32px_rgba(0,0,0,0.14)]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-[0_18px_40px_rgba(0,0,0,0.22)]
                "
                style={{
                  borderColor: `${meta.accent}48`,
                }}
              >
                {/* TOP ROW */}
                <div className="flex items-start justify-between gap-4">

                  <div className="flex min-w-0 items-start gap-[16px]">

                    {/* ICON */}
                    <div
                      className="
                        grid
                        h-[58px]
                        w-[58px]
                        shrink-0
                        place-items-center
                        rounded-[15px]
                        border
                      "
                      style={{
                        background: meta.iconBg,
                        borderColor: `${meta.accent}45`,
                        color: meta.accent,
                      }}
                    >
                      <Icon size={27} strokeWidth={1.7} />
                    </div>

                    {/* TITLE + DESCRIPTION */}
                    <div className="min-w-0 pt-[2px]">

                      <h3
                        className="
                          text-[18px]
                          font-semibold
                          leading-[1.15]
                          tracking-[-0.02em]
                          text-white
                        "
                      >
                        {skill.title}
                      </h3>

                      <p
                        className="
                          mt-[7px]
                          max-w-[280px]
                          text-[13px]
                          leading-[1.45]
                          text-[#9bb0c5]
                        "
                      >
                        {meta.description}
                      </p>

                    </div>
                  </div>

                  {/* ARROW */}
                  <button
                    type="button"
                    aria-label={`View ${skill.title}`}
                    className="
                      grid
                      h-[40px]
                      w-[40px]
                      shrink-0
                      place-items-center
                      rounded-full
                      border
                      border-[#4e779d]/45
                      bg-[#0a233b]/80
                      text-white
                      transition-all
                      duration-300

                      hover:scale-105
                      hover:bg-[#10314e]
                    "
                  >
                    <ArrowUpRight size={17} strokeWidth={1.7} />
                  </button>

                </div>

                {/* TAGS */}
                <div
                  className="
                    mt-[18px]
                    flex
                    flex-wrap
                    gap-[7px]
                  "
                >
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-[#45698a]/60
                        bg-[#0d2943]/80
                        px-[12px]
                        py-[5px]
                        text-[11.5px]
                        font-medium
                        leading-none
                        text-[#d1dfec]

                        transition
                        duration-200

                        hover:border-[#6f99be]/70
                        hover:bg-[#12324f]
                        hover:text-white
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
