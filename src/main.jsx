import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/global.css'
import App from './App.jsx'
// O reveal.css vem por último de propósito: ele precisa vencer o "transition" dos componentes.
import './styles/reveal.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
