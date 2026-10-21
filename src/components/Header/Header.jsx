import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../../data/navigation.js'
import useActiveSection from '../../hooks/useActiveSection.js'
import useScrolled from '../../hooks/useScrolled.js'
import Logo from '../ui/Logo.jsx'
import Button from '../ui/Button.jsx'
import './Header.css'

const SECTION_IDS = NAV_LINKS.map((link) => link.id)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const scrolled = useScrolled()

  // Fecha o menu do celular com a tecla Esc
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav-row">
        <Logo />

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} id="mainNav" aria-label="Menu principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-cta">
          <Button href="#contato" icon="file">
            Solicitar Orçamento
          </Button>
          <button
            type="button"
            className="burger"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mainNav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
