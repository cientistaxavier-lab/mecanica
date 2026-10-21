import { useEffect, useState } from 'react'

/** true quando a página já foi rolada além de "offset" pixels (sombra do header). */
export default function useScrolled(offset = 20) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}
