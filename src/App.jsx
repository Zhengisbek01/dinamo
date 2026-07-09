import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Sections from './components/Sections'
import Rental from './components/Rental'
import Advantages from './components/Advantages'
import Audience from './components/Audience'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-body">
      <Header />
      <main>
        <Hero />
        <About />
        <Sections />
        <Rental />
        <Advantages />
        <Audience />
        <Gallery />
        <Reviews />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}
