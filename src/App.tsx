import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import JellyRadio from './components/reactbits/JellyRadio'
import type { JellyRadioItem } from './components/reactbits/JellyRadio'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Scoop from './pages/Scoop'

type NavItem = Extract<JellyRadioItem, { value: string }>

const navItems: NavItem[] = [
  { value: '/', label: 'Home' },
  { value: '/projects', label: 'Projects' },
  { value: '/scoop', label: 'Scoop' },
]

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const activePath =
    navItems.find((item) => item.value === location.pathname)?.value ?? '/'

  return (
    <>
      <header>
        <h1>FRANORDE</h1>
        <nav>
          <JellyRadio
            items={navItems}
            value={activePath}
            onChange={(value) => navigate(value)}
            ariaLabel="Main navigation"
            chipColor="var(--surface)"
            activeColor="var(--accent)"
            textColor="var(--muted)"
            activeTextColor="var(--bg)"
            size="md"
            gap={4}
            radius={18}
          />
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/scoop" element={<Scoop />} />
        </Routes>
      </main>
    </>
  )
}
