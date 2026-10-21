import { COMPANY } from '../../config/company.js'
import { NAV_LINKS } from '../../data/navigation.js'
import { SERVICES } from '../../data/services.js'
import Logo from '../ui/Logo.jsx'
import Icon from '../ui/Icon.jsx'
import './Footer.css'

// Troque o "#" pelos links reais das redes sociais da empresa.
const SOCIALS = [
  { icon: 'linkedin', label: 'LinkedIn', href: '#' },
  { icon: 'instagram', label: 'Instagram', href: '#' },
  { icon: 'youtube', label: 'YouTube', href: '#' },
]

const FOOTER_LINKS = NAV_LINKS.filter((link) => link.footer)

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>
              Soluções completas em manutenção, montagem e fabricação para a indústria pesada, há mais
              de 30 anos no mercado.
            </p>
            <div className="socials">
              {SOCIALS.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  <Icon name={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>NAVEGAÇÃO</h4>
            <ul>
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>SERVIÇOS</h4>
            <ul>
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <a href="#servicos">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>CONTATO</h4>
            <ul className="foot-contact">
              <li>
                <Icon name="phone" />
                <span>{COMPANY.phone}</span>
              </li>
              <li>
                <Icon name="mail" />
                <span>{COMPANY.email}</span>
              </li>
              <li>
                <Icon name="pin" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {COMPANY.name}. Todos os direitos reservados.
          </span>
          <span>
            <a href="#">Política de Privacidade</a> &nbsp;|&nbsp; <a href="#">Termos de Uso</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
