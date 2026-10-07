import { profile } from '../data/siteData'
export default function Footer(){return <footer className="site-footer bg-paper py-8"><div className="shell flex flex-col gap-3 text-sm text-slateText sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p><p>Designed for clarity, leadership and impact.</p></div></footer>}
