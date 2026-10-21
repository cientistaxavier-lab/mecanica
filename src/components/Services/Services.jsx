import { useEffect, useRef, useState } from 'react'
import { SERVICES } from '../../data/services.js'
import Eyebrow from '../ui/Eyebrow.jsx'
import Icon from '../ui/Icon.jsx'
import Reveal from '../ui/Reveal.jsx'
import ServiceCard from './ServiceCard.jsx'
import './Services.css'

const CARD_GAP = 22

export default function Services() {
  const trackRef = useRef(null)
  const drag = useRef({ active: false, startX: 0, startScroll: 0 })
  const [dragging, setDragging] = useState(false)

  // Setas: rolam 2 cards no computador e 1 no celular
  const scrollByCards = (direction) => {
    const track = trackRef.current
    const card = track?.querySelector('.sv-card')
    if (!card) return
    const cards = window.innerWidth < 640 ? 1 : 2
    track.scrollBy({ left: direction * cards * (card.offsetWidth + CARD_GAP), behavior: 'smooth' })
  }

  // Arrastar com o mouse (no celular o dedo já rola nativamente)
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return
    drag.current = { active: true, startX: e.pageX, startScroll: trackRef.current.scrollLeft }
    setDragging(true)
  }

  useEffect(() => {
    const onMove = (e) => {
      if (!drag.current.active) return
      trackRef.current.scrollLeft = drag.current.startScroll - (e.pageX - drag.current.startX)
    }
    const stop = () => {
      drag.current.active = false
      setDragging(false)
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', stop)
    window.addEventListener('pointercancel', stop)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', stop)
      window.removeEventListener('pointercancel', stop)
    }
  }, [])

  return (
    <section className="services" id="servicos">
      <div className="wrap">
        <Reveal className="services-head">
          <div>
            <Eyebrow>Nossos serviços</Eyebrow>
            <h2>Soluções completas para manter sua indústria em movimento.</h2>
          </div>
          <div className="services-arrows">
            <button type="button" className="sv-arrow" aria-label="Serviços anteriores" onClick={() => scrollByCards(-1)}>
              <Icon name="chevleft" />
            </button>
            <button type="button" className="sv-arrow" aria-label="Próximos serviços" onClick={() => scrollByCards(1)}>
              <Icon name="chevright" />
            </button>
          </div>
        </Reveal>

        <div className={`sv-track-outer ${dragging ? 'dragging' : ''}`} onPointerDown={onPointerDown}>
          <div className="sv-track" ref={trackRef}>
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
