import { COMPANY, LINKS } from '../../config/company.js'
import Eyebrow from '../ui/Eyebrow.jsx'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import Reveal from '../ui/Reveal.jsx'
import './Location.css'

const INFO = [
  { icon: 'pin', label: 'Endereço', value: COMPANY.address },
  { icon: 'phone', label: 'Telefone', value: COMPANY.phone },
  { icon: 'mail', label: 'E-mail', value: COMPANY.email },
  { icon: 'clock', label: 'Horário de atendimento', value: COMPANY.hours },
]

export default function Location() {
  return (
    <section className="location" id="contato">
      <div className="wrap location-grid">
        <Reveal className="location-info">
          <Eyebrow>Onde estamos</Eyebrow>
          <h2>Venha nos conhecer</h2>
          <p className="location-lead">
            Estamos prontos para receber sua equipe e entender a necessidade da sua operação.
          </p>

          <ul className="location-list">
            {INFO.map((item) => (
              <li key={item.label}>
                <Icon name={item.icon} />
                <div>
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="location-actions">
            <Button href={LINKS.directions} icon="pin" target="_blank" rel="noopener noreferrer">
              Como chegar
            </Button>
            <Button
              href={LINKS.whatsapp}
              variant="dark-outline"
              icon="whats"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chamar no WhatsApp
            </Button>
          </div>
        </Reveal>

        <Reveal className="map-frame">
          <iframe
            title="Mapa com a localização da empresa"
            src={LINKS.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a href={LINKS.map} target="_blank" rel="noopener noreferrer" className="map-open">
            Abrir no Google Maps <Icon name="arrow" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
