import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Github, GraduationCap, LayoutDashboard, Linkedin, Mail, Menu, MessageCircle, Moon, Phone, Sun, X } from 'lucide-react'

import logo from '../assets/Awards/logo.png'
import whatsappQr from '../assets/profile/WhatsApp.jpeg'
import { profile } from '../data/siteData'

const links = ['about', 'experience', 'projects', 'skills', 'recognition']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [connectOpen, setConnectOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [dark, setDark] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark'),
  )
  const connectRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const closeConnect = (event) => {
      if (event.key === 'Escape') setConnectOpen(false)
      if (event.type === 'pointerdown' && connectRef.current && !connectRef.current.contains(event.target)) setConnectOpen(false)
    }

    document.addEventListener('pointerdown', closeConnect)
    document.addEventListener('keydown', closeConnect)
    return () => {
      document.removeEventListener('pointerdown', closeConnect)
      document.removeEventListener('keydown', closeConnect)
    }
  }, [])

  useEffect(() => {
    const sections = links.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => {
    setOpen(false)
    setConnectOpen(false)
  }

  const whatsappUrl = `https://wa.me/${profile.phone.replace(/\D/g, '')}`
  const connectOptions = [
    { label: 'LinkedIn', detail: 'Professional profile', href: profile.linkedin, icon: Linkedin },
    { label: 'GitHub', detail: 'Projects and code', href: profile.github, icon: Github },
    { label: 'Email', detail: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: 'Phone', detail: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`, icon: Phone },
    { label: 'Academia', detail: 'Research profile', href: 'https://tarleton.academia.edu/ShagunNagpal', icon: GraduationCap },
  ]

  const toggleTheme = () => {
    const nextThemeIsDark = !dark

    document.documentElement.classList.toggle('dark', nextThemeIsDark)
    document.documentElement.style.colorScheme = nextThemeIsDark ? 'dark' : 'light'
    localStorage.setItem('theme', nextThemeIsDark ? 'dark' : 'light')
    setDark(nextThemeIsDark)
  }

  return (
    <header
      className={`site-navbar fixed inset-x-0 top-0 z-50 border-b border-[#173654]/10 bg-[#f8f4ec]/95 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-[#c98c34] ${
        scrolled ? 'shadow-[0_8px_28px_rgba(16,41,71,0.09)]' : 'shadow-none'
      }`}
    >
      <div className="page-progress" aria-hidden="true" />
      <div
        className="shell"
      >
        <div className="flex h-[92px] items-center justify-between gap-8">
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex min-w-0 shrink-0 items-center gap-4 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd812d] focus-visible:ring-offset-4"
            aria-label="Shagun Nagpal — back to top"
          >
            <img
              src={logo}
              alt=""
              width="58"
              height="58"
              style={{ width: 58, height: 58 }}
              className="h-[58px] w-[58px] shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />

            <span className="hidden min-w-0 sm:block">
              <span className="block text-[25px] font-bold leading-none tracking-[-0.045em] text-[#102947]">
                Shagun<span className="text-[#c4862c]">Nagpal</span>
              </span>
              <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.26em] text-[#526d87]">
                Data · Decisions · Impact
              </span>
            </span>
          </a>

          <nav className="ml-auto hidden items-center gap-2 xl:flex" aria-label="Primary navigation">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                aria-current={activeSection === item ? 'location' : undefined}
                className={`
                  relative rounded-md px-3 py-3 text-[14px] font-semibold capitalize
                  text-[#35516b] transition-colors duration-200
                  after:absolute after:inset-x-3 after:bottom-1.5 after:h-[2px] after:origin-left
                  after:scale-x-0 after:bg-[#c98c34] after:transition-transform after:duration-200
                  hover:text-[#102947] hover:after:scale-x-100
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd812d]
                  ${activeSection === item ? 'text-[#102947] after:scale-x-100' : ''}
                `}
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-[#173654]/15 bg-[#fffdf9] text-[#102947] transition-[transform,background-color,color,border-color] duration-200 hover:-translate-y-0.5 hover:bg-[#f3ecdf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd812d] focus-visible:ring-offset-2 sm:grid"
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={dark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <span key={dark ? 'sun' : 'moon'} className="theme-icon">
              {dark ? <Sun size={18} strokeWidth={1.8} /> : <Moon size={18} strokeWidth={1.8} />}
            </span>
          </button>

          <a
            href="/dashboard"
            className="hidden h-11 shrink-0 items-center gap-2 rounded-[8px] border border-[#173654]/15 bg-[#fffdf9] px-4 text-[13px] font-semibold text-[#102947] transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-[#c98c34]/45 hover:bg-[#f3ecdf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd812d] lg:inline-flex"
          >
            <LayoutDashboard size={16} strokeWidth={1.8} className="text-[#c4862c]" />
            Career Dashboard
          </a>

          <div ref={connectRef} className="relative hidden xl:block">
            <button
              type="button"
              onClick={() => setConnectOpen((current) => !current)}
              className="flex h-11 items-center gap-2 rounded-[8px] bg-[#0e2d51] px-4 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(14,45,81,0.14)] transition hover:-translate-y-0.5 hover:bg-[#173d67] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd812d]"
              aria-expanded={connectOpen}
              aria-controls="connect-menu"
            >
              Connect
              <ChevronDown size={15} className={`transition-transform duration-200 ${connectOpen ? 'rotate-180' : ''}`} />
            </button>

            <div
              id="connect-menu"
              className={`connect-menu absolute right-0 top-[calc(100%+12px)] w-[430px] origin-top-right rounded-2xl border border-[#173654]/10 bg-[#fffdf9] p-3 shadow-[0_22px_55px_rgba(16,41,71,0.18)] transition duration-200 ${connectOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}
            >
              <div className="grid grid-cols-[1fr_150px] gap-3">
                <div className="space-y-1">
                  {connectOptions.map(({ label, detail, href, icon: Icon }) => (
                    <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="connect-option flex items-center gap-3 rounded-xl px-3 py-2.5 text-[#17385c] transition hover:bg-[#f3ecdf]" onClick={() => setConnectOpen(false)}>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#efe2cd] text-[#a66b1b]"><Icon size={15} /></span>
                      <span className="min-w-0"><strong className="block text-[11.5px]">{label}</strong><small className="block truncate text-[9px] font-medium text-[#748294]">{detail}</small></span>
                    </a>
                  ))}
                </div>

                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="connect-qr flex flex-col items-center justify-center rounded-xl border border-[#173654]/10 bg-[#f7f2e9] p-3 text-center">
                  <img src={whatsappQr} alt="Scan to connect with Shagun on WhatsApp" className="h-[112px] w-[112px] rounded-lg bg-white object-contain p-1" />
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[10.5px] font-bold text-[#17385c]"><MessageCircle size={14} className="text-[#2d8b57]" /> WhatsApp me</span>
                  <small className="mt-1 text-[8px] text-[#748294]">Scan or click</small>
                </a>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="
              grid h-11 w-11 shrink-0 place-items-center rounded-[8px] border border-[#173654]/15
              bg-[#fffdf9] text-[#102947] transition-colors hover:bg-[#f3ecdf]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd812d]
              xl:hidden
            "
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`grid transition-[grid-template-rows] duration-300 ease-out xl:hidden ${
            open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-[#173654]/10 pb-5 pt-3">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {links.map((item) => (
                  <a
                    onClick={closeMenu}
                    key={item}
                    href={`#${item}`}
                    className="rounded-lg px-3 py-3 text-[15px] font-semibold capitalize text-[#17385c] transition-colors hover:bg-[#f3ecdf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd812d]"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              <button
                type="button"
                onClick={toggleTheme}
                className="theme-toggle mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-[11px] border border-[#173654]/15 bg-[#fffdf9] text-[14px] font-semibold text-[#102947] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd812d] sm:hidden"
              >
                {dark ? <Sun size={17} strokeWidth={1.8} /> : <Moon size={17} strokeWidth={1.8} />}
                {dark ? 'Light Theme' : 'Dark Theme'}
              </button>

              <a
                href="/dashboard"
                onClick={closeMenu}
                className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-[11px] border border-[#173654]/15 bg-[#fffdf9] text-[14px] font-semibold text-[#102947] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd812d]"
              >
                <LayoutDashboard size={17} strokeWidth={1.8} className="text-[#c4862c]" />
                Career Dashboard
              </a>

              <div className="mt-3 rounded-[11px] border border-[#173654]/15 bg-[#fffdf9] p-3">
                <button type="button" onClick={() => setConnectOpen((current) => !current)} className="flex w-full items-center justify-between text-[14px] font-semibold text-[#102947]" aria-expanded={connectOpen}>
                  Connect
                  <ChevronDown size={17} className={`transition-transform ${connectOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ${connectOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="grid gap-2 pt-3 sm:grid-cols-2">
                      {connectOptions.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} onClick={closeMenu} className="flex items-center gap-2 rounded-lg bg-[#f5efe5] px-3 py-2.5 text-[12px] font-semibold text-[#17385c]"><Icon size={15} className="text-[#a66b1b]" />{label}</a>)}
                      <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu} className="flex items-center gap-3 rounded-lg bg-[#f5efe5] p-3 sm:col-span-2"><img src={whatsappQr} alt="WhatsApp QR code" className="h-20 w-20 rounded-md bg-white object-contain p-1" /><span className="text-[12px] font-semibold text-[#17385c]">WhatsApp me<br /><small className="font-normal text-[#748294]">Scan or tap to start a conversation</small></span></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
