import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Delivery from './components/Delivery'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import backgroundImage from './assets/crystal-springs-bg.png'
import styles from './App.module.css'

/**
 * Main App component that composes all sections of the Crystal Springs Ice website.
 * Handles smooth scrolling behavior for navigation links.
 */
function App() {
  return (
    <div className={styles.app} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Delivery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

