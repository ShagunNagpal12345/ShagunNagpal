import { useEffect } from 'react'

const siteUrl = 'https://shagunnagpal.vercel.app'

const routeMetadata = {
  '/': {
    title: 'Shagun Nagpal | Business Intelligence Resume & Portfolio',
    description:
      "Explore Shagun Nagpal's executive resume and portfolio: 15+ years leading Business Intelligence, data analytics, AI-enabled intelligence, reporting automation and enterprise transformation.",
  },
  '/dashboard': {
    title: 'Career Dashboard | Shagun Nagpal',
    description:
      "A concise career dashboard summarizing Shagun Nagpal's Business Intelligence leadership, measurable enterprise impact, expertise, projects and education.",
  },
  '/dashboard/careers': {
    title: 'Professional Experience | Shagun Nagpal',
    description:
      "Explore Shagun Nagpal's professional experience across Google, Conduent, NTT DATA, Ericsson, American Express, Marvel Infotech and Tarleton State University.",
  },
  '/dashboard/expertise': {
    title: 'Business Intelligence Expertise | Shagun Nagpal',
    description:
      "Business Intelligence, data analytics, Power BI, SQL, Tableau, data strategy, analytics governance, automation and AI-enabled solution expertise.",
  },
  '/dashboard/projects': {
    title: 'Analytics & AI Projects | Shagun Nagpal',
    description:
      "Explore enterprise analytics, recruiting intelligence, Business Intelligence, automation, AI and application-development projects by Shagun Nagpal.",
  },
}

function setMeta(selector, attribute, value) {
  const element = document.head.querySelector(selector)
  if (element) element.setAttribute(attribute, value)
}

export default function SeoMetadata() {
  useEffect(() => {
    const rawPath = window.location.pathname.replace(/\/+$/, '') || '/'
    const metadata = routeMetadata[rawPath] || routeMetadata['/']
    const canonicalUrl = `${siteUrl}${rawPath === '/' ? '/' : rawPath}`

    document.title = metadata.title
    setMeta('meta[name="description"]', 'content', metadata.description)
    setMeta('link[rel="canonical"]', 'href', canonicalUrl)
    setMeta('meta[property="og:title"]', 'content', metadata.title)
    setMeta('meta[property="og:description"]', 'content', metadata.description)
    setMeta('meta[property="og:url"]', 'content', canonicalUrl)
    setMeta('meta[name="twitter:title"]', 'content', metadata.title)
    setMeta('meta[name="twitter:description"]', 'content', metadata.description)
  }, [])

  return null
}
