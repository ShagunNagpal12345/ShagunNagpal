import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Download,
  FolderKanban,
  Github,
  GraduationCap,
  Landmark,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Phone,
  Target,
  TrendingDown,
  Users,
} from 'lucide-react'

import {
  Link,
  NavLink,
  useLocation,
} from 'react-router-dom'

import profileImage from '../assets/profile/profileimage.png'
import resumePdf from '../assets/resume/Shagun Nagpal 15+ Executive.pdf'

import googleLogo from '../assets/Career/Google.png'
import conduentLogo from '../assets/Career/Conduent.png'
import ericssonLogo from '../assets/Career/Ericsson.png'
import amexLogo from '../assets/Career/AMEX.png'
import marvelLogo from '../assets/Career/Marvel.png'
import tarletonLogo from '../assets/Career/Tarleton.png'

import talentImage from '../assets/projects/talent.png'
import pythonImage from '../assets/projects/python.png'
import sqlImage from '../assets/projects/sqlcasino.png'
import smashImage from '../assets/projects/smash.png'

import {
  education,
  enterpriseProjects,
  experiences,
  githubProjects,
  metrics,
  profile,
  skills,
} from '../data/siteData'

/* =========================================================
   NAVIGATION
========================================================= */

const dashboardNav = [
  {
    to: '/dashboard',
    label: 'Overview',
    icon: LayoutDashboard,
    end: true,
  },
  {
    to: '/dashboard/careers',
    label: 'Careers',
    icon: BriefcaseBusiness,
  },
  {
    to: '/dashboard/expertise',
    label: 'Expertise',
    icon: Network,
  },
  {
    to: '/dashboard/projects',
    label: 'Projects',
    icon: FolderKanban,
  },
]

/* =========================================================
   COMPANY LOGOS
========================================================= */

function getCareerLogo(company = '') {
  const value = company.toLowerCase()

  if (
    value.includes('google') ||
    value.includes('randstad')
  ) {
    return googleLogo
  }

  if (value.includes('conduent')) {
    return conduentLogo
  }

  if (value.includes('ericsson')) {
    return ericssonLogo
  }

  if (
    value.includes('american express') ||
    value.includes('amex')
  ) {
    return amexLogo
  }

  if (value.includes('marvel')) {
    return marvelLogo
  }

  if (value.includes('tarleton')) {
    return tarletonLogo
  }

  return null
}

const projectImages = {
  TalentSense: talentImage,
  'Python Magic': pythonImage,
  'Python Learning Game': pythonImage,
  'SQL Casino': sqlImage,
  'Toddler Smash': smashImage,
}

/* =========================================================
   IMPACT
========================================================= */

const impact = [
  {
    value: '35%',
    label: 'Less manual reporting effort',
    context: '25+ recurring management processes automated',
    icon: TrendingDown,
  },
  {
    value: '1,500+',
    label: 'Annual hours saved',
    context: 'Reporting automation and recurring management processes',
    icon: Clock3,
  },
  {
    value: '$2M+',
    label: 'Savings opportunities',
    context: 'Vendor, sourcing and third-party spend analytics',
    icon: CircleDollarSign,
  },
  {
    value: '$50M+',
    label: 'Operating spend visibility',
    context: 'Executive insights supporting senior leadership',
    icon: Landmark,
  },
  {
    value: '7,000+',
    label: 'Workers consolidated',
    context: 'India, US and Canada reporting framework',
    icon: Users,
  },
  {
    value: '1 day → hours',
    label: 'Candidate evaluation',
    context: 'AI-enabled candidate analysis workflow',
    icon: Bot,
  },
]

/* =========================================================
   EXPERTISE META
========================================================= */

const expertiseMeta = {
  'Data & Analytics': {
    icon: BarChart3,
    application:
      'Build trusted analytical foundations through data modeling, validation, structuring and business analysis.',
    evidence:
      'Used across enterprise reporting, recruiting analytics, finance and operational decision support.',
  },

  'Business Intelligence': {
    icon: LayoutDashboard,
    application:
      'Create scalable BI operating models, executive dashboards and self-service reporting environments.',
    evidence:
      '30+ recurring analytics products and extensive executive reporting portfolios.',
  },

  'AI & Application Development': {
    icon: Bot,
    application:
      'Extend traditional analytics with AI-enabled intelligence, recruiting solutions and modern applications.',
    evidence:
      'Candidate-analysis workflows reduced evaluation turnaround from approximately one day to a few hours.',
  },

  'Automation & Delivery': {
    icon: Clock3,
    application:
      'Automate repeatable workflows and improve delivery consistency across business functions.',
    evidence:
      '25+ recurring management processes automated and 1,500+ annual productivity hours saved.',
  },

  'Enterprise Systems': {
    icon: Landmark,
    application:
      'Connect analytics with enterprise platforms across finance, procurement and workforce ecosystems.',
    evidence:
      'Experience across SAP, Oracle, Ariba, PeopleSoft, Concur and other enterprise systems.',
  },

  'Analytics Governance & Delivery': {
    icon: Target,
    application:
      'Translate business requirements into scalable analytical solutions with strong governance and delivery standards.',
    evidence:
      'Executive stakeholder management, KPI frameworks, data quality and agile delivery across multiple organizations.',
  },
}

/* =========================================================
   SHARED COMPONENTS
========================================================= */

function Card({
  children,
  className = '',
}) {
  return (
    <section
      className={`
        rounded-[18px]
        border
        border-[#102947]/10
        bg-white
        shadow-[0_5px_18px_rgba(16,41,71,0.035)]
        ${className}
      `}
    >
      {children}
    </section>
  )
}

function SectionEyebrow({
  children,
}) {
  return (
    <p
      className="
        text-[9px]
        font-bold
        uppercase
        tracking-[0.20em]
        text-[#a66b1b]
      "
    >
      {children}
    </p>
  )
}

function DetailHeader({
  eyebrow,
  title,
  copy,
  action,
}) {
  return (
    <div
      className="
        mb-6
        flex
        flex-col
        gap-4
        lg:flex-row
        lg:items-end
        lg:justify-between
      "
    >
      <div>
        <SectionEyebrow>
          {eyebrow}
        </SectionEyebrow>

        <h1
          className="
            mt-2
            font-serif
            text-[clamp(2rem,4vw,3.3rem)]
            font-semibold
            leading-[0.96]
            tracking-[-0.045em]
            text-[#102947]
          "
        >
          {title}
        </h1>

        <p
          className="
            mt-3
            max-w-3xl
            text-[12px]
            leading-5
            text-[#647386]
          "
        >
          {copy}
        </p>
      </div>

      {action}
    </div>
  )
}

function DashboardLink({
  to,
  children,
}) {
  return (
    <Link
      to={to}
      className="
        inline-flex
        items-center
        gap-1.5
        text-[10.5px]
        font-bold
        text-[#9c661d]
        transition
        hover:text-[#102947]
      "
    >
      {children}

      <ArrowUpRight
        size={13}
      />
    </Link>
  )
}

/* =========================================================
   OVERVIEW
========================================================= */

function OverviewView() {
  const coreSkills = useMemo(
    () =>
      [
        ...new Set(
          skills.flatMap(
            (group) => group.items
          )
        ),
      ].filter((item) =>
        [
          'SQL',
          'Power BI',
          'Tableau',
          'Generative AI',
          'Data Modeling',
          'Executive Dashboards',
          'Analytics Governance',
          'Self-Service Analytics',
          'Stakeholder Management',
          'Power Automate',
          'SAP',
          'Agile Delivery',
        ].includes(item)
      ),
    []
  )

  return (
    <>
      {/* PROFILE */}
      <Card
        className="
          relative
          overflow-hidden
          p-5
          sm:p-6
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            w-2/5
            bg-[radial-gradient(circle_at_center,rgba(197,138,53,.12),transparent_68%)]
          "
        />

        <div
          className="
            relative
            grid
            items-center
            gap-5
            lg:grid-cols-[110px_1fr_auto]
          "
        >
          <img
            src={profileImage}
            alt="Shagun Nagpal"
            className="
              h-[104px]
              w-[104px]
              rounded-full
              border-4
              border-white
              object-cover
              object-[center_22%]
              shadow-[0_0_0_2px_#d4a45a]
            "
          />

          <div>
            <SectionEyebrow>
              Business Intelligence & Analytics Leader
            </SectionEyebrow>

            <h1
              className="
                mt-1.5
                font-serif
                text-[clamp(2rem,4vw,3.4rem)]
                font-semibold
                leading-none
                tracking-[-0.055em]
              "
            >
              Shagun{' '}
              <span className="text-[#b97928]">
                Nagpal
              </span>
            </h1>

            <p
              className="
                mt-2
                max-w-3xl
                text-[12px]
                leading-5
                text-[#647386]
              "
            >
              15+ years building analytics functions, decision systems,
              automation and AI-enabled products across Recruiting,
              Finance, Procurement and Operations.
            </p>

            <div
              className="
                mt-3
                flex
                flex-wrap
                gap-x-4
                gap-y-2
                text-[10.5px]
                text-[#647386]
              "
            >
              <span className="inline-flex items-center gap-1">
                <MapPin size={13} />
                Gurgaon, India
              </span>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1 hover:text-[#a66b1b]"
              >
                <Mail size={13} />
                {profile.email}
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#a66b1b]"
              >
                <Linkedin size={13} />
                LinkedIn
              </a>
            </div>
          </div>

          <div
            className="
              grid
              min-w-[230px]
              grid-cols-2
              gap-x-5
              gap-y-3
              border-t
              border-[#102947]/10
              pt-4

              lg:border-l
              lg:border-t-0
              lg:pl-6
              lg:pt-0
            "
          >
            {metrics.map((item) => (
              <div key={item.value}>
                <div
                  className="
                    text-[24px]
                    font-bold
                    leading-none
                    tracking-[-0.04em]
                    text-[#102947]
                  "
                >
                  {item.value}
                </div>

                <p
                  className="
                    mt-1
                    max-w-[120px]
                    text-[9px]
                    leading-3.5
                    text-[#6c7a8b]
                  "
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* IMPACT */}
      <Card
        className="
          mt-4
          overflow-hidden
          p-5
          sm:p-6
        "
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <SectionEyebrow>
              Evidence of Impact
            </SectionEyebrow>

            <h2
              className="
                mt-1.5
                font-serif
                text-[25px]
                font-semibold
                tracking-[-0.035em]
              "
            >
              Measured Enterprise Impact
            </h2>
          </div>

          <DashboardLink to="/dashboard/impact">
            Full impact
          </DashboardLink>
        </div>

        <div
          className="
            mt-5
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {impact
            .slice(0, 6)
            .map(
              ({
                value,
                label,
                context,
                icon: Icon,
              }) => (
                <Link
                  to="/dashboard/impact"
                  key={label}
                  className="
                    group
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-[#102947]/8
                    bg-[#fcfaf6]
                    p-4
                    transition-all
                    hover:-translate-y-0.5
                    hover:border-[#c58a35]/25
                    hover:bg-white
                  "
                >
                  <span
                    className="
                      grid
                      h-9
                      w-9
                      shrink-0
                      place-items-center
                      rounded-full
                      bg-[#f2e2c5]
                      text-[#9f671b]
                    "
                  >
                    <Icon size={17} />
                  </span>

                  <div>
                    <div
                      className="
                        text-[22px]
                        font-semibold
                        leading-none
                        tracking-[-0.045em]
                      "
                    >
                      {value}
                    </div>

                    <h3 className="mt-1.5 text-[10.5px] font-bold">
                      {label}
                    </h3>

                    <p className="mt-1 text-[9px] leading-3.5 text-[#6a7889]">
                      {context}
                    </p>
                  </div>
                </Link>
              )
            )}
        </div>
      </Card>

      {/* CAREER + EXPERTISE */}
      <div
        className="
          mt-4
          grid
          gap-4
          xl:grid-cols-[1.55fr_0.85fr]
        "
      >
        {/* CAREER */}
        <Card className="p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-[19px] font-semibold">
              Career Journey
            </h2>

            <DashboardLink to="/dashboard/careers">
              View full career
            </DashboardLink>
          </div>

          <div
            className="
              mt-5
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
              xl:grid-cols-7
            "
          >
            {experiences.map(
              (item, index) => {
                const logo =
                  getCareerLogo(
                    `${item.company} ${item.employer || ''}`
                  )

                return (
                  <Link
                    key={`${item.company}-${index}`}
                    to={`/dashboard/careers?job=${index}`}
                    className="
                      group
                      min-w-0
                      rounded-lg
                      transition
                      hover:bg-[#faf7f1]
                    "
                  >
                    <div className="h-12">
                      {logo ? (
                        <img
                          src={logo}
                          alt={`${item.company} logo`}
                          className="
                            h-12
                            w-[105px]
                            object-contain
                            object-left
                          "
                        />
                      ) : (
                        <div
                          className="
                            flex
                            h-12
                            items-center
                            text-[11px]
                            font-bold
                            text-[#1676c4]
                          "
                        >
                          {item.company}
                        </div>
                      )}
                    </div>

                    <div className="my-2.5 flex items-center">
                      <span className="h-2 w-2 rounded-full bg-[#b97928]" />
                      <span className="h-px flex-1 bg-[#dacbb5]" />
                    </div>

                    <p className="text-[8.5px] font-bold text-[#a66b1b]">
                      {item.dates}
                    </p>

                    <h3
                      className="
                        mt-1
                        text-[10.5px]
                        font-bold
                        leading-3.5
                      "
                    >
                      {item.company}
                    </h3>

                    <p
                      className="
                        mt-1
                        line-clamp-2
                        text-[9px]
                        leading-3.5
                        text-[#6b7888]
                      "
                    >
                      {item.role}
                    </p>
                  </Link>
                )
              }
            )}
          </div>
        </Card>

        {/* EXPERTISE */}
        <Card className="p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-[19px] font-semibold">
              Core Expertise
            </h2>

            <DashboardLink to="/dashboard/expertise">
              Explore expertise
            </DashboardLink>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {coreSkills.map((skill) => (
              <Link
                to="/dashboard/expertise"
                key={skill}
                className="
                  rounded-full
                  border
                  border-[#102947]/10
                  bg-[#f8f4ed]
                  px-3
                  py-1.5
                  text-[10px]
                  font-semibold
                  text-[#38536d]
                  transition
                  hover:border-[#c58a35]/35
                  hover:bg-white
                "
              >
                {skill}
              </Link>
            ))}
          </div>

          <p
            className="
              mt-5
              border-t
              border-[#102947]/10
              pt-4
              text-[10.5px]
              leading-5
              text-[#657487]
            "
          >
            Leadership across enterprise analytics, self-service reporting,
            executive decision support, data governance and multidisciplinary
            team development.
          </p>
        </Card>
      </div>

      {/* PROJECTS + CREDENTIALS */}
      <div
        className="
          mt-4
          grid
          gap-4
          xl:grid-cols-[1.25fr_1fr]
        "
      >
        <Card className="p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-[19px] font-semibold">
              Selected Product Builds
            </h2>

            <DashboardLink to="/dashboard/projects">
              All projects
            </DashboardLink>
          </div>

          <div
            className="
              mt-4
              grid
              gap-3
              sm:grid-cols-3
            "
          >
            {githubProjects
              .slice(0, 3)
              .map((project) => (
                <Link
                  key={project.title}
                  to="/dashboard/projects"
                  className="
                    group
                    flex
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#102947]/10
                    bg-[#fcfaf6]
                    transition
                    hover:bg-white
                  "
                >
                  <img
                    src={projectImages[project.title]}
                    alt=""
                    className="
                      h-[82px]
                      w-[105px]
                      object-cover
                    "
                  />

                  <div className="min-w-0 p-3">
                    <h3 className="text-[11px] font-bold">
                      {project.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        line-clamp-2
                        text-[8.5px]
                        leading-3.5
                        text-[#687789]
                      "
                    >
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </Card>

        <Card className="p-5 sm:p-6">
          <div
            className="
              grid
              gap-5
              md:grid-cols-2
            "
          >
            <div>
              <h2 className="font-serif text-[18px] font-semibold">
                Education
              </h2>

              <div className="mt-4 space-y-3">
                {education.map((item) => (
                  <div key={item.degree}>
                    <h3 className="text-[10.5px] font-bold">
                      {item.degree}
                    </h3>

                    <p className="mt-1 text-[9px] text-[#697789]">
                      {item.school} · {item.dates}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="
                border-t
                border-[#102947]/10
                pt-4

                md:border-l
                md:border-t-0
                md:pl-5
                md:pt-0
              "
            >
              <h2 className="font-serif text-[18px] font-semibold">
                Contact
              </h2>

              <div
                className="
                  mt-4
                  space-y-2
                  text-[9.5px]
                  font-semibold
                  text-[#3e5872]
                "
              >
                <a
                  href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
                  className="flex items-center gap-2 hover:text-[#a66b1b]"
                >
                  <Phone size={14} />
                  {profile.phone}
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 hover:text-[#a66b1b]"
                >
                  <Mail size={14} />
                  {profile.email}
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#a66b1b]"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>

                {profile.github && (
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#a66b1b]"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

/* =========================================================
   CAREERS VIEW
========================================================= */

function CareersView() {
  const location = useLocation()

  const queryIndex =
    Number(
      new URLSearchParams(location.search).get('job')
    ) || 0

  const safeIndex =
    Math.min(
      Math.max(queryIndex, 0),
      experiences.length - 1
    )

  const [selectedIndex, setSelectedIndex] =
    useState(safeIndex)

  const current =
    experiences[selectedIndex]

  const logo =
    getCareerLogo(
      `${current.company} ${current.employer || ''}`
    )

  return (
    <>
      <DetailHeader
        eyebrow="Career Record"
        title="Full Professional Experience"
        copy="Explore Shagun's leadership progression, responsibilities, measurable outcomes and enterprise impact across every stage of the career journey."
      />

      <div
        className="
          grid
          gap-4
          xl:grid-cols-[280px_1fr]
        "
      >
        {/* CAREER NAV */}
        <Card className="p-4">
          <SectionEyebrow>
            Career Journey
          </SectionEyebrow>

          <div className="mt-4 space-y-1.5">
            {experiences.map(
              (item, index) => {
                const itemLogo =
                  getCareerLogo(
                    `${item.company} ${item.employer || ''}`
                  )

                const active =
                  index === selectedIndex

                return (
                  <button
                    key={`${item.company}-${index}`}
                    onClick={() =>
                      setSelectedIndex(index)
                    }
                    className={`
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      border
                      px-3
                      py-3
                      text-left
                      transition-all

                      ${
                        active
                          ? 'border-[#c58a35]/35 bg-[#f7efe2] shadow-[0_5px_14px_rgba(16,41,71,0.04)]'
                          : 'border-transparent hover:border-[#102947]/8 hover:bg-[#faf8f3]'
                      }
                    `}
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-[64px]
                        shrink-0
                        items-center
                      "
                    >
                      {itemLogo ? (
                        <img
                          src={itemLogo}
                          alt=""
                          className="
                            max-h-9
                            max-w-[58px]
                            object-contain
                          "
                        />
                      ) : (
                        <span
                          className="
                            text-[8px]
                            font-bold
                            text-[#1676c4]
                          "
                        >
                          NTT DATA
                        </span>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className="
                          truncate
                          text-[10.5px]
                          font-bold
                          text-[#102947]
                        "
                      >
                        {item.company}
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-[8.5px]
                          text-[#6c7b8c]
                        "
                      >
                        {item.dates}
                      </p>
                    </div>

                    <ChevronRight
                      size={14}
                      className={
                        active
                          ? 'text-[#b97928]'
                          : 'text-[#9aa5af]'
                      }
                    />
                  </button>
                )
              }
            )}
          </div>
        </Card>

        {/* CURRENT CAREER */}
        <Card className="overflow-hidden">
          {/* TOP BAND */}
          <div
            className="
              relative
              overflow-hidden
              border-b
              border-[#102947]/8
              bg-[#f8f4ed]
              p-5
              sm:p-6
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                h-full
                w-1/2
                bg-[radial-gradient(circle_at_right,rgba(197,138,53,.12),transparent_65%)]
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#a66b1b]
                  "
                >
                  {current.dates}
                </p>

                <h2
                  className="
                    mt-2
                    font-serif
                    text-[28px]
                    font-semibold
                    tracking-[-0.035em]
                    text-[#102947]
                  "
                >
                  {current.company}
                </h2>

                <p
                  className="
                    mt-1
                    text-[13px]
                    font-bold
                    text-[#315575]
                  "
                >
                  {current.role}
                </p>

                {current.location && (
                  <p
                    className="
                      mt-2
                      flex
                      items-center
                      gap-1.5
                      text-[10px]
                      text-[#687789]
                    "
                  >
                    <MapPin size={12} />
                    {current.location}
                  </p>
                )}
              </div>

              <div
                className="
                  flex
                  min-h-[72px]
                  min-w-[150px]
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#102947]/8
                  bg-white
                  p-4
                "
              >
                {logo ? (
                  <img
                    src={logo}
                    alt={`${current.company} logo`}
                    className="
                      max-h-[55px]
                      max-w-[140px]
                      object-contain
                    "
                  />
                ) : (
                  <span className="text-[18px] font-bold text-[#1676c4]">
                    NTT DATA
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* DETAILS */}
          <div className="p-5 sm:p-6">
            <div
              className="
                grid
                gap-6
                lg:grid-cols-[1.1fr_0.9fr]
              "
            >
              <div>
                <SectionEyebrow>
                  Role Mandate
                </SectionEyebrow>

                <p
                  className="
                    mt-3
                    text-[12px]
                    leading-6
                    text-[#607184]
                  "
                >
                  {current.summary}
                </p>

                {current.highlights?.length > 0 && (
                  <>
                    <h3
                      className="
                        mt-6
                        font-serif
                        text-[18px]
                        font-semibold
                      "
                    >
                      Responsibilities & Achievements
                    </h3>

                    <ul
                      className="
                        mt-4
                        grid
                        gap-3
                      "
                    >
                      {current.highlights.map(
                        (highlight) => (
                          <li
                            key={highlight}
                            className="
                              flex
                              gap-3
                              rounded-xl
                              border
                              border-[#102947]/7
                              bg-[#fcfaf6]
                              p-3
                            "
                          >
                            <CheckCircle2
                              size={15}
                              className="
                                mt-[2px]
                                shrink-0
                                text-[#b97928]
                              "
                            />

                            <span
                              className="
                                text-[10.5px]
                                leading-5
                                text-[#5f7083]
                              "
                            >
                              {highlight}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </>
                )}
              </div>

              <div>
                <SectionEyebrow>
                  Career Evidence
                </SectionEyebrow>

                <div
                  className="
                    mt-3
                    grid
                    gap-3
                    sm:grid-cols-2
                    lg:grid-cols-1
                  "
                >
                  <div
                    className="
                      rounded-xl
                      border
                      border-[#102947]/8
                      bg-[#f9f5ee]
                      p-4
                    "
                  >
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#a66b1b]">
                      Organization
                    </p>

                    <p className="mt-2 text-[12px] font-bold">
                      {current.company}
                    </p>
                  </div>

                  <div
                    className="
                      rounded-xl
                      border
                      border-[#102947]/8
                      bg-[#f9f5ee]
                      p-4
                    "
                  >
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#a66b1b]">
                      Tenure
                    </p>

                    <p className="mt-2 text-[12px] font-bold">
                      {current.dates}
                    </p>
                  </div>

                  {current.location && (
                    <div
                      className="
                        rounded-xl
                        border
                        border-[#102947]/8
                        bg-[#f9f5ee]
                        p-4
                      "
                    >
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#a66b1b]">
                        Location
                      </p>

                      <p className="mt-2 text-[12px] font-bold">
                        {current.location}
                      </p>
                    </div>
                  )}
                </div>

                <Link
                  to="/dashboard/impact"
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    bg-[#102947]
                    px-4
                    py-3
                    text-[10.5px]
                    font-bold
                    text-white
                    transition
                    hover:bg-[#173b60]
                  "
                >
                  Explore related impact

                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

/* =========================================================
   EXPERTISE VIEW
========================================================= */

function ExpertiseView() {
  const [activeIndex, setActiveIndex] =
    useState(0)

  const current =
    skills[activeIndex]

  const meta =
    expertiseMeta[current?.title] ||
    {
      icon: Network,
      application:
        'Enterprise analytics and technology capability.',
      evidence:
        'Applied across multiple business functions and enterprise environments.',
    }

  const Icon = meta.icon

  return (
    <>
      <DetailHeader
        eyebrow="Capability Portfolio"
        title="Expertise & Technology"
        copy="Explore the complete analytics, business intelligence, AI, automation and enterprise technology capability portfolio—and the business problems each capability helps solve."
      />

      <div
        className="
          grid
          gap-4
          xl:grid-cols-[280px_1fr]
        "
      >
        {/* CATEGORY NAV */}
        <Card className="p-4">
          <SectionEyebrow>
            Capability Areas
          </SectionEyebrow>

          <div className="mt-4 space-y-1.5">
            {skills.map(
              (group, index) => {
                const active =
                  activeIndex === index

                const groupMeta =
                  expertiseMeta[
                    group.title
                  ]

                const GroupIcon =
                  groupMeta?.icon ||
                  Network

                return (
                  <button
                    key={group.title}
                    onClick={() =>
                      setActiveIndex(index)
                    }
                    className={`
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      border
                      px-3
                      py-3
                      text-left
                      transition

                      ${
                        active
                          ? 'border-[#c58a35]/35 bg-[#f7efe2]'
                          : 'border-transparent hover:bg-[#faf8f3]'
                      }
                    `}
                  >
                    <span
                      className={`
                        grid
                        h-9
                        w-9
                        shrink-0
                        place-items-center
                        rounded-full

                        ${
                          active
                            ? 'bg-[#ead7b4] text-[#996117]'
                            : 'bg-[#e3edf2] text-[#315575]'
                        }
                      `}
                    >
                      <GroupIcon size={16} />
                    </span>

                    <span
                      className="
                        text-[10.5px]
                        font-bold
                        leading-4
                      "
                    >
                      {group.title}
                    </span>
                  </button>
                )
              }
            )}
          </div>
        </Card>

        {/* DETAIL */}
        <div className="space-y-4">
          <Card className="p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span
                className="
                  grid
                  h-12
                  w-12
                  shrink-0
                  place-items-center
                  rounded-full
                  bg-[#f0dfc1]
                  text-[#9f671b]
                "
              >
                <Icon size={21} />
              </span>

              <div>
                <SectionEyebrow>
                  Capability Area
                </SectionEyebrow>

                <h2
                  className="
                    mt-1.5
                    font-serif
                    text-[25px]
                    font-semibold
                    tracking-[-0.03em]
                  "
                >
                  {current.title}
                </h2>

                <p
                  className="
                    mt-3
                    max-w-3xl
                    text-[11px]
                    leading-5
                    text-[#627386]
                  "
                >
                  {meta.application}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <SectionEyebrow>
                Skills & Technology
              </SectionEyebrow>

              <div className="mt-3 flex flex-wrap gap-2">
                {current.items.map(
                  (item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-[#102947]/10
                        bg-[#f8f4ed]
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        text-[#425c74]
                      "
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </Card>

          <div
            className="
              grid
              gap-4
              lg:grid-cols-2
            "
          >
            <Card className="p-5">
              <SectionEyebrow>
                Business Application
              </SectionEyebrow>

              <h3
                className="
                  mt-2
                  font-serif
                  text-[19px]
                  font-semibold
                "
              >
                What this capability enables
              </h3>

              <p
                className="
                  mt-3
                  text-[11px]
                  leading-5
                  text-[#647386]
                "
              >
                {meta.application}
              </p>
            </Card>

            <Card className="p-5">
              <SectionEyebrow>
                Evidence
              </SectionEyebrow>

              <h3
                className="
                  mt-2
                  font-serif
                  text-[19px]
                  font-semibold
                "
              >
                Where it created value
              </h3>

              <p
                className="
                  mt-3
                  text-[11px]
                  leading-5
                  text-[#647386]
                "
              >
                {meta.evidence}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

/* =========================================================
   PROJECTS VIEW
========================================================= */

function ProjectsView() {
  const [projectTab, setProjectTab] =
    useState('personal')

  return (
    <>
      <DetailHeader
        eyebrow="Project Portfolio"
        title="Projects & Transformation"
        copy="Explore product builds and enterprise initiatives across AI, analytics, automation and digital solutions."
        action={
          <div
            className="
              inline-flex
              rounded-xl
              border
              border-[#102947]/10
              bg-white
              p-1
            "
          >
            {[
              [
                'personal',
                'Product Builds',
              ],
              [
                'enterprise',
                'Enterprise Initiatives',
              ],
            ].map(
              ([id, label]) => (
                <button
                  key={id}
                  onClick={() =>
                    setProjectTab(id)
                  }
                  className={`
                    rounded-lg
                    px-4
                    py-2
                    text-[10px]
                    font-bold
                    transition

                    ${
                      projectTab === id
                        ? 'bg-[#102947] text-white'
                        : 'text-[#667587] hover:bg-[#f8f4ed]'
                    }
                  `}
                >
                  {label}
                </button>
              )
            )}
          </div>
        }
      />

      {projectTab ===
        'personal' && (
        <div
          className="
            grid
            gap-4
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {githubProjects.map(
            (project) => (
              <Card
                key={project.title}
                className="
                  group
                  overflow-hidden
                "
              >
                <div
                  className="
                    h-[170px]
                    overflow-hidden
                    bg-[#eef2f5]
                  "
                >
                  <img
                    src={
                      projectImages[
                        project.title
                      ]
                    }
                    alt={project.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-[1.03]
                    "
                  />
                </div>

                <div className="p-4">
                  <SectionEyebrow>
                    {project.category ||
                      'Product Build'}
                  </SectionEyebrow>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      font-semibold
                      tracking-[-0.025em]
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      min-h-[64px]
                      text-[10px]
                      leading-4.5
                      text-[#657487]
                    "
                  >
                    {project.description}
                  </p>

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      gap-4
                      border-t
                      border-[#102947]/8
                      pt-3
                    "
                  >
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-1
                          text-[10px]
                          font-bold
                          text-[#102947]
                          hover:text-[#a66b1b]
                        "
                      >
                        Live Demo
                        <ArrowUpRight
                          size={12}
                        />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-1
                          text-[10px]
                          font-bold
                          text-[#102947]
                          hover:text-[#a66b1b]
                        "
                      >
                        <Github size={12} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            )
          )}
        </div>
      )}

      {projectTab ===
        'enterprise' && (
        <div
          className="
            grid
            gap-4
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {enterpriseProjects.map(
            (
              [
                title,
                description,
              ],
              index
            ) => (
              <Card
                key={title}
                className="
                  group
                  p-5
                  transition-all
                  hover:-translate-y-0.5
                  hover:border-[#c58a35]/25
                "
              >
                <div className="flex items-start justify-between">
                  <span
                    className="
                      text-[11px]
                      font-bold
                      text-[#b97928]
                    "
                  >
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      '0'
                    )}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="
                      text-[#b97928]
                      opacity-0
                      transition
                      group-hover:opacity-100
                    "
                  />
                </div>

                <h3
                  className="
                    mt-4
                    font-serif
                    text-[18px]
                    font-semibold
                    leading-[1.2]
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    mt-3
                    text-[10.5px]
                    leading-5
                    text-[#657487]
                  "
                >
                  {description}
                </p>

                <div
                  className="
                    mt-5
                    border-t
                    border-[#102947]/8
                    pt-3
                  "
                >
                  <p
                    className="
                      text-[8.5px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#9c661d]
                    "
                  >
                    Enterprise Analytics Initiative
                  </p>
                </div>
              </Card>
            )
          )}
        </div>
      )}
    </>
  )
}

/* =========================================================
   IMPACT VIEW
========================================================= */

function ImpactView() {
  return (
    <>
      <DetailHeader
        eyebrow="Evidence of Impact"
        title="Measured Enterprise Impact"
        copy="Quantified outcomes across automation, executive visibility, cost intelligence, workforce reporting, analytics scale and AI-enabled decision support."
        action={
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-[#c58a35]/25
              bg-white
              px-4
              py-2.5
              text-[10px]
              font-bold
              text-[#85601f]
            "
          >
            <CheckCircle2
              size={14}
            />
            Resume sourced
          </a>
        }
      />

      <div
        className="
          grid
          gap-4
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {impact.map(
          ({
            value,
            label,
            context,
            icon: Icon,
          }) => (
            <Card
              key={label}
              className="
                relative
                overflow-hidden
                p-5
                sm:p-6
              "
            >
              <div
                className="
                  absolute
                  -right-10
                  -top-10
                  h-32
                  w-32
                  rounded-full
                  bg-[#ead7b4]/25
                  blur-2xl
                "
              />

              <div className="relative">
                <span
                  className="
                    grid
                    h-10
                    w-10
                    place-items-center
                    rounded-full
                    bg-[#f1e2c7]
                    text-[#9c651b]
                  "
                >
                  <Icon size={18} />
                </span>

                <div
                  className="
                    mt-6
                    font-serif
                    text-[42px]
                    font-semibold
                    leading-none
                    tracking-[-0.05em]
                    text-[#102947]
                  "
                >
                  {value}
                </div>

                <h3
                  className="
                    mt-3
                    text-[13px]
                    font-bold
                  "
                >
                  {label}
                </h3>

                <p
                  className="
                    mt-2
                    text-[10.5px]
                    leading-5
                    text-[#667587]
                  "
                >
                  {context}
                </p>
              </div>
            </Card>
          )
        )}
      </div>

      <Card className="mt-4 p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <SectionEyebrow>
              Impact Narrative
            </SectionEyebrow>

            <h2
              className="
                mt-1.5
                font-serif
                text-[22px]
                font-semibold
              "
            >
              From analytics delivery to measurable business value
            </h2>
          </div>
        </div>

        <div
          className="
            mt-5
            grid
            gap-3
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {[
            [
              'Analytics Scale',
              '30+ recurring analytics products and dashboards supporting recruiting and business operations.',
            ],
            [
              'Self-Service',
              '2,000+ recurring and ad-hoc information requests analyzed and converted into scalable reporting.',
            ],
            [
              'Automation',
              'Recurring business-review and management processes automated to improve speed and consistency.',
            ],
            [
              'AI Transformation',
              'AI-enabled candidate analysis reduced evaluation turnaround from approximately one day to a few hours.',
            ],
          ].map(
            ([title, copy]) => (
              <div
                key={title}
                className="
                  rounded-xl
                  border
                  border-[#102947]/8
                  bg-[#faf8f3]
                  p-4
                "
              >
                <h3 className="text-[11px] font-bold">
                  {title}
                </h3>

                <p
                  className="
                    mt-2
                    text-[9.5px]
                    leading-4.5
                    text-[#687789]
                  "
                >
                  {copy}
                </p>
              </div>
            )
          )}
        </div>
      </Card>
    </>
  )
}

/* =========================================================
   SIDEBAR
========================================================= */

function Sidebar() {
  return (
    <aside
      className="
        fixed
        inset-y-0
        left-0
        z-50
        hidden
        w-[220px]
        flex-col
        bg-[#0b2947]
        px-5
        py-6
        text-white
        xl:flex
      "
    >
      <a
        href="/"
        className="
          flex
          items-center
          gap-3
          rounded-lg
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#d3a253]
        "
      >
        <span
          className="
            grid
            h-10
            w-10
            place-items-center
            rounded-full
            border
            border-[#d3a253]/55
            font-serif
            text-[17px]
            font-bold
            text-[#e7bd74]
          "
        >
          SN
        </span>

        <span>
          <strong className="block text-[14px]">
            Shagun Nagpal
          </strong>

          <small
            className="
              mt-0.5
              block
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-white/50
            "
          >
            Executive Dashboard
          </small>
        </span>
      </a>

      <nav
        className="
          mt-9
          space-y-1
        "
        aria-label="Dashboard navigation"
      >
        {dashboardNav.map(
          ({
            to,
            label,
            icon: Icon,
            end,
          }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({
                isActive,
              }) => `
                flex
                items-center
                gap-3
                rounded-lg
                px-3.5
                py-2.5
                text-[12px]
                font-semibold
                transition

                ${
                  isActive
                    ? 'bg-[#c58a35] text-white shadow-[0_8px_18px_rgba(0,0,0,.12)]'
                    : 'text-white/68 hover:bg-white/10 hover:text-white'
                }
              `}
            >
              <Icon
                size={16}
                strokeWidth={1.7}
              />

              {label}
            </NavLink>
          )
        )}
      </nav>

      <div
        className="
          mt-auto
          border-t
          border-white/12
          pt-5
        "
      >
        <a
          href={resumePdf}
          target="_blank"
          rel="noreferrer"
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-white/15
            px-3
            py-2.5
            text-[11px]
            font-bold
            text-white/85
            hover:bg-white/10
          "
        >
          View Resume

          <ArrowUpRight
            size={14}
          />
        </a>

        <a
          href={resumePdf}
          download="Shagun Nagpal Resume.pdf"
          className="
            mt-2
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-[#c58a35]
            px-3
            py-2.5
            text-[11px]
            font-bold
            text-white
            hover:bg-[#d09a4a]
          "
        >
          <Download
            size={14}
          />

          Download Resume
        </a>

        <a
          href="/"
          className="
            mt-4
            inline-flex
            items-center
            gap-2
            text-[10.5px]
            font-semibold
            text-[#e4b96e]
            hover:text-white
          "
        >
          <ArrowLeft
            size={14}
          />

          Back to portfolio
        </a>
      </div>
    </aside>
  )
}

/* =========================================================
   MOBILE HEADER
========================================================= */

function MobileHeader() {
  return (
    <header
      className="
        sticky
        top-0
        z-40
        border-b
        border-[#102947]/10
        bg-[#faf7f1]/95
        backdrop-blur-xl
        xl:hidden
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-16
          max-w-[1480px]
          flex-wrap
          items-center
          justify-between
          gap-3
          px-4
          py-3
          sm:px-6
          lg:px-8
        "
      >
        <a
          href="/"
          className="
            inline-flex
            items-center
            gap-2
            text-[12px]
            font-bold
            text-[#294866]
          "
        >
          <ArrowLeft
            size={16}
          />

          Portfolio
        </a>

        <div className="flex items-center gap-2">
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="
              hidden
              min-h-11
              items-center
              rounded-lg
              border
              border-[#102947]/12
              bg-white
              px-3
              py-2
              text-[11px]
              font-bold
              text-[#294866]
              sm:inline-flex
            "
          >
            View Resume
          </a>

          <a
            href={resumePdf}
            download="Shagun Nagpal Resume.pdf"
            className="
              inline-flex
              min-h-11
              items-center
              gap-2
              rounded-lg
              bg-[#102947]
              px-3
              py-2
              text-[11px]
              font-bold
              text-white
            "
          >
            <Download
              size={14}
            />

            Download
          </a>
        </div>

        <nav
          className="
            flex
            w-full
            gap-1
            overflow-x-auto
            border-t
            border-[#102947]/8
            pt-2
          "
        >
          {dashboardNav.map(
            ({
              to,
              label,
              end,
            }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({
                  isActive,
                }) => `
                  whitespace-nowrap
                  inline-flex
                  min-h-11
                  items-center
                  rounded-lg
                  px-3
                  py-2
                  text-[10px]
                  font-bold

                  ${
                    isActive
                      ? 'bg-[#102947] text-white'
                      : 'text-[#607184]'
                  }
                `}
              >
                {label}
              </NavLink>
            )
          )}
        </nav>
      </div>
    </header>
  )
}

/* =========================================================
   MAIN DASHBOARD
========================================================= */

export default function ExecutiveDashboard() {
  const location =
    useLocation()

  const path =
    location.pathname

  let content =
    <OverviewView />

  if (
    path.startsWith(
      '/dashboard/careers'
    )
  ) {
    content =
      <CareersView />
  } else if (
    path.startsWith(
      '/dashboard/expertise'
    )
  ) {
    content =
      <ExpertiseView />
  } else if (
    path.startsWith(
      '/dashboard/projects'
    )
  ) {
    content =
      <ProjectsView />
  } else if (
    path.startsWith(
      '/dashboard/impact'
    )
  ) {
    content =
      <ImpactView />
  }

  return (
    <div
      className="
        min-h-screen
        bg-[#f3eee5]
        text-[#102947]
      "
    >
      <Sidebar />

      <div className="xl:ml-[220px]">
        <MobileHeader />

        <main
          className="
            mx-auto
            max-w-[1480px]
            p-4
            sm:p-6
            lg:p-8
          "
        >
          {content}
        </main>
      </div>
    </div>
  )
}
