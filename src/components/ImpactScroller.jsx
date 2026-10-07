const impacts = [
  {
    value: '$2M+',
    outcome: 'Savings opportunities identified',
    context: '3P contractor, vendor and sourcing analysis - Conduent',
  },
  {
    value: '1,500+',
    outcome: 'Annual hours saved',
    context: '25+ reporting and management processes automated - Conduent',
  },
  {
    value: '35%',
    outcome: 'Less manual reporting effort',
    context: 'BI and management-reporting automation - Conduent',
  },
  {
    value: '$50M+',
    outcome: 'Annual spend visibility',
    context: 'Executive insights for CEO, CFO, CTO and 25+ leaders - Conduent',
  },
  {
    value: '7,000+',
    outcome: 'Workers unified in one reporting framework',
    context: 'India, US and Canada - Conduent',
  },
  {
    value: '40+',
    outcome: 'Dashboards, analytics products and recurring reports',
    context: 'Enterprise performance portfolio - Conduent',
  },
  {
    value: '1,000+',
    outcome: 'Annual productivity hours saved',
    context: 'Business-review automation - Google',
  },
  {
    value: '~20%',
    outcome: 'Faster reporting turnaround',
    context: 'Self-service reporting transformation - Google',
  },
  {
    value: '2,000+',
    outcome: 'Ad hoc requests consolidated',
    context: 'Customizable self-service reporting - Google',
  },
  {
    value: '30+',
    outcome: 'Recurring analytics products and dashboards',
    context: 'End-to-end recruiting lifecycle - Google',
  },
  {
    value: '1 day to hours',
    outcome: 'Candidate evaluation turnaround',
    context: 'AI-enabled candidate analysis - Google',
  },
  {
    value: '200+',
    outcome: 'Stakeholders reached automatically',
    context: 'Advanced Macros and Power Automate distribution solution',
  },
]

function ImpactRun({ hidden = false }) {
  return (
    <div className="impact-marquee-group" aria-hidden={hidden || undefined}>
      {impacts.map(({ value, outcome, context }) => (
        <div className="impact-marquee-item" key={`${value}-${outcome}`}>
          <span className="impact-marquee-value">{value}</span>
          <span className="impact-marquee-copy">
            <strong>{outcome}</strong>
            <span>({context})</span>
          </span>
          <span className="impact-marquee-divider" aria-hidden="true" />
        </div>
      ))}
    </div>
  )
}

export default function ImpactScroller() {
  return (
    <section
      className="impact-marquee relative overflow-hidden border-y border-[#173654]/10 bg-transparent"
      aria-label="Selected measurable career impact"
    >
      <div className="impact-marquee-viewport py-5 sm:py-6">
        <div className="impact-marquee-track">
          <ImpactRun />
          <ImpactRun hidden />
        </div>
      </div>
    </section>
  )
}
