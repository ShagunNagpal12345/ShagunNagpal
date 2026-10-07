import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SkillsScroller from './components/SkillsScroller'
import Experience from './components/Experience'
import ImpactScroller from './components/ImpactScroller'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Recognition from './components/Recognition'
import Footer from './components/Footer'
import MotionController from './components/MotionController'
import ExecutiveDashboard from './components/ExecutiveDashboard'
import { BrowserRouter } from 'react-router-dom'

export default function App(){
  const route = window.location.pathname.replace(/\/+$/, '')

  if (route === '/dashboard' || route.startsWith('/dashboard/')) {
    return <BrowserRouter><ExecutiveDashboard /></BrowserRouter>
  }

  return <><MotionController/><Navbar/><main><Hero/><About/><SkillsScroller/><Experience/><ImpactScroller/><Projects/><Skills/><Recognition/></main><Footer/></>
}
