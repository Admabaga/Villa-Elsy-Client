import Navbar from './Components/Nav/Navbar'
import HeroSection from './Components/Hero/HeroSection'
import Footer from './Components/Footer/Footer'
import AboutSection from './Components/AboutSection/AboutSection'
import GallerySection from './Components/GallerySection/GallerySection'
import ContactSection from './Components/ContactSection/ContactSection'
import ServicesSection from './Components/ServicesSection/ServicesSection'
import MapSection from './Components/MapSection/MapSection'



function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection/>
      <GallerySection />
      <MapSection />
      <ContactSection />
      <Footer />
    </>

  )
}

export default App
