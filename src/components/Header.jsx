import styles from './Header.module.css'
import logoImage from '../assets/crystal-springs-ice-logo.png'

/**
 * Header component with logo and navigation.
 * Logo on left, navigation links on right.
 * On mobile, stacks vertically for simple navigation.
 */
function Header() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img 
            src={logoImage} 
            alt="Crystal Springs Ice" 
            className={styles.logo}
          />
        </div>
        <nav className={styles.nav}>
          <a 
            href="#products" 
            onClick={(e) => handleNavClick(e, 'products')}
            className={styles.navLink}
          >
            Products
          </a>
          <a 
            href="#delivery" 
            onClick={(e) => handleNavClick(e, 'delivery')}
            className={styles.navLink}
          >
            Delivery
          </a>
          <a 
            href="#faqs" 
            onClick={(e) => handleNavClick(e, 'faqs')}
            className={styles.navLink}
          >
            FAQs
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className={styles.navLink}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header

