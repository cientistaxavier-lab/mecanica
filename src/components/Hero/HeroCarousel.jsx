import { useEffect, useRef, useState } from 'react'
import { SERVICES } from '../../data/services.js'
import Icon from '../ui/Icon.jsx'

const AUTOPLAY_MS = 4200
const SWIPE_MIN_PX = 40
const total = SERVICES.length

// Arte padrão (ilustração "blueprint") usada quando o serviço não tem foto.
function SlideArt({ service, index }) {
  return (
    <svg className="hc-art" viewBox="0 0 600 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`hc-g-${index}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#101d33" />
          <stop offset="100%" stopColor="#050a14" />
        </linearGradient>
        <pattern id={`hc-grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,.045)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="600" height="700" fill={`url(#hc-g-${index})`} />
      <rect width="600" height="700" fill={`url(#hc-grid-${index})`} />
      <g stroke="rgba(94,179,255,.35)" strokeWidth="1.4" fill="none">
        <circle cx="470" cy="150" r="120" />
        <circle cx="470" cy="150" r="80" />
      </g>
      <g opacity=".9">
        <Icon name={service.icon} x="150" y="320" width="160" height="160" />
      </g>
    </svg>
  )
}

/**
 * Carrossel do topo: troca sozinho, tem setas, bolinhas e aceita arrastar/deslizar.
 * As imagens vêm de data/services.js (a mesma lista dos cards de Serviços).
 */
export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const swipeStart = useRef(null)

  const goTo = (i) => setIndex((i + total) % total)

  // Troca automática. Como "index" está nas dependências, o relógio
  // reinicia a cada troca (inclusive quando a pessoa clica nas setas).
  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [paused, index])

  const onPointerDown = (e) => {
    swipeStart.current = e.clientX
  }
  const onPointerUp = (e) => {
    if (swipeStart.current === null) return
    const dx = e.clientX - swipeStart.current
    swipeStart.current = null
    if (dx > SWIPE_MIN_PX) goTo(index - 1)
    else if (dx < -SWIPE_MIN_PX) goTo(index + 1)
  }

  return (
    <div
      className="hero-carousel"
      id="heroCarousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hc-track" onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
        {SERVICES.map((service, i) => (
          <div key={service.title} className={`hc-slide ${i === index ? 'active' : ''}`} aria-hidden={i !== index}>
            {service.photo ? (
              <img className="hc-art hc-photo" src={service.photo} alt={service.title} />
            ) : (
              <SlideArt service={service} index={i} />
            )}
            <div className="hc-photo-shade" />
            <div className="hc-caption">
              <span className="num mono">
                {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <h3>{service.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="hc-dots">
        {SERVICES.map((service, i) => (
          <button
            key={service.title}
            type="button"
            className={`hc-dot ${i === index ? 'active' : ''}`}
            aria-label={`Ir para ${service.title}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <div className="hc-nav">
        <button type="button" className="hc-arrow" aria-label="Anterior" onClick={() => goTo(index - 1)}>
          <Icon name="chevleft" />
        </button>
        <button type="button" className="hc-arrow" aria-label="Próximo" onClick={() => goTo(index + 1)}>
          <Icon name="chevright" />
        </button>
      </div>
    </div>
  )
}
