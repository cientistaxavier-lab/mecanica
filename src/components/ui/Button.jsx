import Icon from './Icon.jsx'

/**
 * Botão-link do site.
 *  - variant: 'primary' | 'outline' | 'dark-outline'
 *  - icon:      ícone antes do texto (opcional)
 *  - iconAfter: ícone depois do texto (opcional)
 */
export default function Button({
  href = '#',
  variant = 'primary',
  icon,
  iconAfter,
  className = '',
  children,
  ...rest
}) {
  return (
    <a href={href} className={`btn btn-${variant} ${className}`.trim()} {...rest}>
      {icon && <Icon name={icon} />}
      {children}
      {iconAfter && <Icon name={iconAfter} />}
    </a>
  )
}
