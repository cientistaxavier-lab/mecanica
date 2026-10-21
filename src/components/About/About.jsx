import { STATS } from '../../data/about.js'
import { COMPANY } from '../../config/company.js'
import Eyebrow from '../ui/Eyebrow.jsx'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import Stat from './Stat.jsx'
import MissionVisionValues from './MissionVisionValues.jsx'
import IsoCertification from './IsoCertification.jsx'
import './About.css'

export default function About() {
  return (
    <section className="about" id="quem-somos">
      <div className="wrap about-grid">
        <Reveal className="about-copy">
          <Eyebrow>Quem somos</Eyebrow>
          <h2>Comprometimento com qualidade e resultados</h2>
          <p>
            A {COMPANY.name} é uma empresa especializada em soluções mecânicas para os mais diversos
            segmentos industriais. Com equipe experiente e tecnologia de ponta, entregamos serviços com
            segurança, qualidade e dentro do prazo.
          </p>
          <Button href="#missao-visao-valores" iconAfter="arrow">
            Conheça Nossa História
          </Button>
        </Reveal>

        <Reveal className="stat-grid">
          {STATS.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </Reveal>
      </div>

      <MissionVisionValues>
        <IsoCertification />
      </MissionVisionValues>
    </section>
  )
}
