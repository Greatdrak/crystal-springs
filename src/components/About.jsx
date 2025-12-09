import styles from './About.module.css'

/**
 * About section with company introduction and benefit cards.
 * Highlights why customers should choose Crystal Springs Ice.
 */
function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Choose Crystal Springs Ice?</h2>
        <p className={styles.intro}>
          We're a local, family-owned ice company dedicated to providing 
          fresh, clean ice to businesses and events throughout the region. 
          With years of experience and a commitment to quality, we've built 
          lasting relationships with convenience stores, restaurants, bars, 
          and event organizers who depend on reliable ice delivery.
        </p>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Reliable Delivery</h3>
            <p className={styles.benefitText}>
              Consistent, on-time delivery to keep your business running smoothly. 
              We understand that ice is essential, and we treat every order with urgency.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Clean, Filtered Water</h3>
            <p className={styles.benefitText}>
              Our ice is made from filtered, purified water for crystal-clear quality. 
              Every batch meets strict standards for purity and taste.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Flexible Order Sizes</h3>
            <p className={styles.benefitText}>
              From individual bags to full pallets, we accommodate orders of any size. 
              Whether you need a few bags or bulk quantities, we've got you covered.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Emergency Delivery</h3>
            <p className={styles.benefitText}>
              Same-day and emergency delivery available when possible. 
              We know that sometimes you need ice fast, and we'll do our best to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

