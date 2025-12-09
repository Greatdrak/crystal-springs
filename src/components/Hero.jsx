import styles from './Hero.module.css'

/**
 * Hero section with main heading, subheading, and call-to-action buttons.
 * Primary button links to phone number, secondary button scrolls to Products section.
 */
function Hero() {
  const handleScrollToProducts = (e) => {
    e.preventDefault()
    const element = document.getElementById('products')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Crystal Springs Ice – Fresh, Clean Ice When You Need It.
        </h1>
        <p className={styles.subheading}>
          We supply bagged and bulk ice to convenience stores, bars, restaurants, 
          events, campgrounds, and parties. Local, reliable, and always fresh.
        </p>
        <div className={styles.buttonGroup}>
          <a 
            href="tel:+15551234567" 
            className={`${styles.button} ${styles.primary}`}
          >
            Call to Order
          </a>
          <button 
            onClick={handleScrollToProducts}
            className={`${styles.button} ${styles.secondary}`}
          >
            View Products & Pricing
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

