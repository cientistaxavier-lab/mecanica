import Eyebrow from '../ui/Eyebrow.jsx'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import HeroCarousel from './HeroCarousel.jsx'
import './Hero.css'

const FEATURES = [
  { icon: 'users', label: 'Equipe qualificada' },
  { icon: 'gear', label: 'Tecnologia de ponta' },
  { icon: 'shield', label: 'Segurança em 1º lugar' },
  { icon: 'headset', label: 'Atendimento personalizado' },
]

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <Eyebrow>Engenharia mecânica industrial</Eyebrow>
            <h1>
              Soluções em
              <br />
              <span className="accent">Mecânica Industrial</span>
            </h1>
            <p className="lead">
              Excelência em serviços de manutenção, montagem e fabricação de equipamentos para a
              indústria — com segurança, precisão e prazo garantido.
            </p>

            <div className="hero-actions">
              <Button href="#servicos" iconAfter="arrow">
                Nossos Serviços
              </Button>
              <Button href="#contato" variant="outline" icon="whats">
                Fale com um Especialista
              </Button>
            </div>

            <div className="feature-row">
              {FEATURES.map((feature) => (
                <div className="feature-item" key={feature.label}>
                  <Icon name={feature.icon} />
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          <HeroCarousel />
        </div>
      </div>
    </section>
  )
}
