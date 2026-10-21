import useInView from '../../hooks/useInView.js'
import useCountUp from '../../hooks/useCountUp.js'
import Icon from '../ui/Icon.jsx'

// Um número da seção "Quem Somos". Conta de 0 até o valor quando aparece na tela.
export default function Stat({ icon, value, suffix = '', label }) {
  const [ref, inView] = useInView(0.4)
  const current = useCountUp(value, inView)

  return (
    <div className="stat-cell" ref={ref}>
      <Icon name={icon} />
      <div className="stat-num">
        {current}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
