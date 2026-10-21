import useInView from '../../hooks/useInView.js'

/**
 * Faz o conteúdo "aparecer" suavemente quando entra na tela.
 * Uso:  <Reveal as="article" className="minha-classe"> ... </Reveal>
 * (estilos em src/styles/reveal.css)
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, inView] = useInView(0.15)
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
