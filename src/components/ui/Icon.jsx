import icons from './icons.jsx'

/**
 * Renderiza um ícone SVG pelo nome (veja a lista em icons.jsx).
 * Qualquer prop extra (className, x, y, width, height...) vai direto para o <svg>.
 */
export default function Icon({ name, ...rest }) {
  const icon = icons[name]
  if (!icon) return null
  return (
    <svg viewBox={icon.viewBox} aria-hidden="true" focusable="false" {...icon.props} {...rest}>
      {icon.body}
    </svg>
  )
}
