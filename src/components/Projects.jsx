import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { enterpriseProjects, githubProjects } from '../data/siteData'

import pythonImage from '../assets/projects/python.png'
import smashImage from '../assets/projects/smash.png'
import sqlCasinoImage from '../assets/projects/sqlcasino.png'
import talentImage from '../assets/projects/talent.png'

const tabs = [
  { id: 'github', label: 'Product Builds' },
  { id: 'enterprise', label: 'Initiative Index' },
  { id: 'all', label: 'All Projects' },
]

const imageMap = {
  TalentSense: talentImage,
  'Python Magic': pythonImage,
  'SQL Casino': sqlCasinoImage,
  'Toddler Smash': smashImage,
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('github')

  const showGithub = activeTab === 'all' || activeTab === 'github'
  const showEnterprise = activeTab === 'all' || activeTab === 'enterprise'

  const moveSpotlight = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
    event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`)
  }

  return (
    <section
      id="projects"
      className="bg-[#fbf8f2] py-[44px] lg:py-[50px]"
    >
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p
              className="section-eyebrow
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.38em]
                text-[#c28a38]
              "
            >
              Projects
            </p>

            <h2 className="mt-2 font-serif text-[34px] font-semibold tracking-[-0.035em] text-[#102947] sm:text-[38px] lg:text-[42px]">
              Featured Projects
            </h2>

            <p className="mt-1.5 text-[14px] leading-6 text-[#647386]">
              A selection of key initiatives that created real business impact.
            </p>
          </div>

          <div
            className="project-tabs flex max-w-full items-center gap-1 overflow-x-auto rounded-[11px] border border-[#102947]/10 bg-white/70 p-1"
            role="tablist"
            aria-label="Project categories"
          >
            {tabs.map((tab) => {
              const active = activeTab === tab.id

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative shrink-0 overflow-hidden rounded-[8px] px-4 text-[12px] font-semibold transition-colors duration-200 ${
                    active
                      ? 'text-white shadow-[0_4px_12px_rgba(16,41,71,0.14)]'
                      : 'text-[#5f6d7d] hover:bg-[#f3ecdf] hover:text-[#102947]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="project-tab-indicator"
                      className="absolute inset-0 bg-[#102947]"
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-6">
          <AnimatePresence mode="wait">
            {showGithub && (
              <motion.div
                key={`github-${activeTab}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {githubProjects.map((project, index) => {
                    const projectImage = imageMap[project.title]

                    return (
                      <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.42, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                        onPointerMove={moveSpotlight}
                        className="project-card group flex h-full flex-col overflow-hidden rounded-[16px] border border-[#102947]/10 bg-white shadow-[0_6px_18px_rgba(16,41,71,0.045)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(16,41,71,0.08)]"
                      >
                        <div className="h-[158px] overflow-hidden bg-[#eef2f5]">
                          <img
                            src={projectImage}
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.025]"
                          />
                        </div>

                        <div className="project-card-body flex flex-1 flex-col p-5">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-[10px] font-semibold ${
                              project.category?.toLowerCase().includes('enterprise')
                                ? 'bg-[#ead4ae] text-[#8a5a18]'
                                : 'bg-[#d9eef1] text-[#407b82]'
                            }`}
                          >
                            {project.category}
                          </span>

                          <h3 className="mt-3 font-serif text-[20px] font-semibold leading-[1.12] text-[#102947]">
                            {project.title}
                          </h3>

                          <p className="project-card-copy mt-2 text-[13px] leading-[1.5] text-[#627184]">
                            {project.description}
                          </p>

                          <div className="mt-auto flex items-center gap-6 border-t border-[#102947]/8 pt-4">
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 text-[11.5px] font-semibold text-[#102947] transition hover:text-[#c28a38]"
                            >
                              Live Demo
                              <ArrowUpRight size={14} />
                            </a>

                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 text-[11.5px] font-semibold text-[#102947] transition hover:text-[#c28a38]"
                            >
                              <Github size={14} />
                              GitHub
                            </a>
                          </div>
                        </div>
                      </motion.article>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {showEnterprise && (
              <motion.div
                key={`enterprise-${activeTab}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.25 }}
                className={showGithub ? 'mt-8' : ''}
              >
                {activeTab === 'all' && (
                  <div className="mb-4 flex items-center gap-4">
                    <h3 className="font-serif text-[21px] font-semibold text-[#102947]">
                      Selected Enterprise Initiatives
                    </h3>
                    <div className="h-px flex-1 bg-[#102947]/8" />
                  </div>
                )}

                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                  {enterpriseProjects.map(([title, description], index) => (
                    <motion.article
                      key={title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.38, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
                      onPointerMove={moveSpotlight}
                      className="project-card min-h-[145px] rounded-[16px] border border-[#102947]/10 bg-[#f9f5ee] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c28a38]/35 hover:bg-white hover:shadow-[0_10px_24px_rgba(16,41,71,0.06)]"
                    >
                      <div className="text-[11px] font-bold tracking-[0.04em] text-[#c28a38]">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <h4 className="mt-3 text-[15px] font-semibold leading-[1.3] text-[#102947]">
                        {title}
                      </h4>

                      <p className="mt-2 line-clamp-3 text-[12px] leading-[1.5] text-[#617082]">
                        {description}
                      </p>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
