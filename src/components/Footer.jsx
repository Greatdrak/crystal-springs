import styles from './Footer.module.css'

/**
 * Footer component with copyright, license info, and social links.
 * Simple, clean footer for the bottom of the page.
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>
            © {currentYear} Crystal Springs Ice. All rights reserved.
          </p>
          <p className={styles.license}>
            Licensed and inspected by local health department. 
            Health permit #HS-2024-001
          </p>
          <div className={styles.social}>
            <span className={styles.socialLabel}>Follow us:</span>
            <a href="#" className={styles.socialLink}>Facebook</a>
            <span className={styles.separator}>|</span>
            <a href="#" className={styles.socialLink}>Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

