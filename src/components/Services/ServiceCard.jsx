import Icon from '../ui/Icon.jsx'

// Arte padrão do card quando o serviço não tem foto.
function CardArt({ index }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 300 190" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`cg-${index}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#12203a" />
          <stop offset="100%" stopColor="#060b16" />
        </linearGradient>
      </defs>
      <rect width="300" height="190" fill={`url(#cg-${index})`} />
      <g opacity=".18" stroke="#fff" strokeWidth="1" fill="none">
        <circle cx="250" cy="30" r="50" />
      </g>
    </svg>
  )
}

export default function ServiceCard({ service, index }) {
  return (
    <div className="sv-card">
      <div className="sv-art">
        {service.photo ? (
          <img src={service.photo} alt={service.title} draggable="false" />
        ) : (
          <CardArt index={index} />
        )}
        <div className="sv-badge">
          <Icon name={service.icon} />
        </div>
      </div>
      <div className="sv-body">
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
        <a href="#contato" className="sv-link">
          Saiba mais <Icon name="arrow" />
        </a>
      </div>
    </div>
  )
}
