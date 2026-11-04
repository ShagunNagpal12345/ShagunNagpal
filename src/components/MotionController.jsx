import { useLayoutEffect } from 'react'

const easeOut = (value) => 1 - Math.pow(1 - value, 4)

const sectionMotion = {
  about: [
    { selector: '.shell > div:first-child', direction: 'left' },
    { selector: '.shell > div:last-child > *', direction: 'right', stagger: 75 },
  ],
  experience: [
    { selector: '.section-eyebrow, h2, h2 + p', direction: 'left', stagger: 70 },
    { selector: 'article', direction: 'up', stagger: 65 },
  ],
  skills: [
    { selector: '.section-eyebrow, h2, h2 + p', direction: 'left', stagger: 70 },
    { selector: 'article', direction: 'up', stagger: 55 },
  ],
  recognition: [
    { selector: '.section-eyebrow, h2, h2 + p', direction: 'left', stagger: 65 },
    { selector: 'article', direction: 'up', stagger: 60 },
  ],
}

export default function MotionController() {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      document.documentElement.style.setProperty('--scroll-progress', '1')
      document.documentElement.style.setProperty('--experience-progress', '1')
      return undefined
    }

    const revealItems = new Set()

    Object.entries(sectionMotion).forEach(([sectionId, groups]) => {
      const section = document.getElementById(sectionId)
      if (!section) return

      groups.forEach(({ selector, direction, stagger = 0 }) => {
        section.querySelectorAll(selector).forEach((item, index) => {
          item.classList.add('motion-block', `motion-from-${direction}`)
          item.style.setProperty('--motion-delay', `${Math.min(index, 7) * stagger}ms`)
          revealItems.add(item)
        })
      })
    })

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -7% 0px' },
    )

    revealItems.forEach((item) => revealObserver.observe(item))

    const counters = document.querySelectorAll('[data-count]')
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const element = entry.target
          const target = Number(element.dataset.count)
          const suffix = element.dataset.suffix || ''
          const duration = 900
          const start = performance.now()

          const update = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const value = Math.round(target * easeOut(progress))
            element.textContent = `${value.toLocaleString()}${suffix}`

            if (progress < 1) requestAnimationFrame(update)
          }

          requestAnimationFrame(update)
          counterObserver.unobserve(element)
        })
      },
      { threshold: 0.65 },
    )

    counters.forEach((counter) => counterObserver.observe(counter))

    const hero = document.querySelector('#home')
    const experience = document.querySelector('#experience')
    let ticking = false

    const updateScrollEffects = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const pageProgress = scrollable > 0 ? window.scrollY / scrollable : 0
      document.documentElement.style.setProperty('--scroll-progress', String(pageProgress))

      if (hero) {
        const heroProgress = Math.min(window.scrollY / Math.max(hero.offsetHeight, 1), 1)
        hero.style.setProperty('--hero-image-shift', `${heroProgress * 34}px`)
        hero.style.setProperty('--hero-content-shift', `${heroProgress * -18}px`)
        hero.style.setProperty('--hero-content-opacity', String(1 - heroProgress * 0.72))
        hero.style.setProperty('--hero-stats-shift', `${heroProgress * -12}px`)
      }

      if (experience) {
        const rect = experience.getBoundingClientRect()
        const progress = Math.min(Math.max((window.innerHeight * 0.8 - rect.top) / (rect.height * 0.72), 0), 1)
        document.documentElement.style.setProperty('--experience-progress', String(progress))
      }

      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(updateScrollEffects)
    }

    updateScrollEffects()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      revealObserver.disconnect()
      counterObserver.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return null
}
