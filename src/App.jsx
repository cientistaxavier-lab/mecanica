import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Services from './components/Services/Services.jsx'
import About from './components/About/About.jsx'
import Location from './components/Location/Location.jsx'
import Footer from './components/Footer/Footer.jsx'

// Ordem das seções da página. Para mudar a ordem, mude a ordem aqui.
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Location />
      </main>
      <Footer />
    </>
  )
}
