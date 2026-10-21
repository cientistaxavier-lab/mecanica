import { MISSION, VISION, VALUES } from '../../data/about.js'
import Eyebrow from '../ui/Eyebrow.jsx'
import Icon from '../ui/Icon.jsx'
import Reveal from '../ui/Reveal.jsx'
import './MissionVisionValues.css'

/** Lista com "check" (usada em Valores e na ISO 9001). */
export function CheckList({ items }) {
  return (
    <ul className="mvv-list">
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" />
          {item}
        </li>
      ))}
    </ul>
  )
}

// "children" recebe blocos que ficam logo abaixo dos três cartões (ex.: ISO 9001).
export default function MissionVisionValues({ children }) {
  return (
    <div className="wrap mvv" id="missao-visao-valores">
      <Reveal className="mvv-head">
        <Eyebrow>Nossos pilares</Eyebrow>
        <h3>Missão, visão e valores</h3>
      </Reveal>

      <div className="mvv-grid">
        <Reveal as="article" className="mvv-card">
          <div className="mvv-icon">
            <Icon name="target" />
          </div>
          <h4>Missão</h4>
          <p>{MISSION}</p>
        </Reveal>

        <Reveal as="article" className="mvv-card">
          <div className="mvv-icon">
            <Icon name="eye" />
          </div>
          <h4>Visão</h4>
          <p>{VISION}</p>
        </Reveal>

        <Reveal as="article" className="mvv-card">
          <div className="mvv-icon">
            <Icon name="diamond" />
          </div>
          <h4>Valores</h4>
          <CheckList items={VALUES} />
        </Reveal>
      </div>

      {children}
    </div>
  )
}
