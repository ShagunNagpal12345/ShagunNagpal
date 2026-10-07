import { skills } from '../data/siteData'

const allSkills = [...new Set(skills.flatMap((group) => group.items))]

function SkillRun({ hidden = false }) {
  return (
    <div className="skills-marquee-group" aria-hidden={hidden || undefined}>
      {allSkills.map((skill) => (
        <div className="skills-marquee-item" key={skill}>
          <span className="skills-marquee-dot" aria-hidden="true" />
          <span>{skill}</span>
        </div>
      ))}
    </div>
  )
}

export default function SkillsScroller() {
  return (
    <section
      className="skills-marquee relative overflow-hidden border-y border-[#173654]/10 bg-transparent"
      aria-label="Professional skills"
    >
      <div className="skills-marquee-viewport py-5">
        <div className="skills-marquee-track">
          <SkillRun />
          <SkillRun hidden />
        </div>
      </div>
    </section>
  )
}
