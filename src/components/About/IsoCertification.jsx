import { ISO } from '../../data/about.js'
import Eyebrow from '../ui/Eyebrow.jsx'
import Reveal from '../ui/Reveal.jsx'
import { CheckList } from './MissionVisionValues.jsx'
import './IsoCertification.css'

// Selo genérico (ilustração). Para usar o oficial: ISO.sealImage em data/about.js
function DefaultSeal() {
  return (
    <svg className="iso-seal" viewBox="0 0 140 140" role="img" aria-label="Selo ISO 9001">
      <circle cx="70" cy="70" r="66" fill="none" stroke="#5eb3ff" strokeWidth="2" />
      <circle cx="70" cy="70" r="57" fill="none" stroke="rgba(94,179,255,.4)" strokeWidth="1" strokeDasharray="2 4" />
      <text x="70" y="60" textAnchor="middle" fontFamily="Oswald,sans-serif" fontSize="22" fontWeight="700" fill="#ffffff" letterSpacing="3">
        ISO
      </text>
      <path d="M42 68h56" stroke="rgba(255,255,255,.35)" strokeWidth="1" />
      <text x="70" y="98" textAnchor="middle" fontFamily="Oswald,sans-serif" fontSize="30" fontWeight="700" fill="#5eb3ff" letterSpacing="1">
        9001
      </text>
    </svg>
  )
}

export default function IsoCertification() {
  if (!ISO.enabled) return null

  return (
    <Reveal className="iso" id="iso-9001">
      {ISO.sealImage ? (
        <img className="iso-seal" src={ISO.sealImage} alt="Certificado ISO 9001" />
      ) : (
        <DefaultSeal />
      )}
      <div className="iso-copy">
        <Eyebrow>Qualidade certificada</Eyebrow>
        <h4>Certificação ISO 9001</h4>
        <p>{ISO.text}</p>
      </div>
      <CheckList items={ISO.points} />
    </Reveal>
  )
}
