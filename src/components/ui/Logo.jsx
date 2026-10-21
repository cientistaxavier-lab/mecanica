import { COMPANY } from '../../config/company.js'
import './Logo.css'

/**
 * Logo do topo e do rodapé.
 * - Se COMPANY.logo estiver preenchido (src/config/company.js), mostra a imagem da empresa.
 * - Se estiver vazio, mostra a logo provisória (engrenagem + texto).
 */
export default function Logo() {
  if (COMPANY.logo) {
    return (
      <a href="#inicio" className="logo" aria-label={`${COMPANY.name} - voltar ao início`}>
        <img className="logo-img" src={COMPANY.logo} alt={COMPANY.name} />
      </a>
    )
  }

  return (
    <a href="#inicio" className="logo" aria-label={`${COMPANY.name} - voltar ao início`}>
      <svg
        className="logo-mark"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--blue-glow)"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
        <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,.3)" />
      </svg>
      <span className="logo-text">
        MECÂNICA<span>INDUSTRIAL</span>
      </span>
    </a>
  )
}
