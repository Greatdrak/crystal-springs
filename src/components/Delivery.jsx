import styles from './Delivery.module.css'

/**
 * Delivery section explaining delivery options, process, and ordering information.
 * Includes a 3-step process visualization.
 */
function Delivery() {
  return (
    <section className={styles.delivery} id="delivery">
      <div className={styles.container}>
        <h2 className={styles.heading}>Delivery & Ordering</h2>
        
        <div className={styles.infoGrid}>
          <div className={styles.infoSection}>
            <h3 className={styles.infoTitle}>Delivery Area</h3>
            <p className={styles.infoText}>
              We deliver throughout the region, including:
            </p>
            <ul className={styles.deliveryList}>
              <li>Springfield and surrounding areas</li>
              <li>Riverside and nearby towns</li>
              <li>Mountain View and adjacent communities</li>
              <li>Contact us to confirm delivery to your location</li>
            </ul>
          </div>

          <div className={styles.infoSection}>
            <h3 className={styles.infoTitle}>Ordering Details</h3>
            <ul className={styles.deliveryList}>
              <li><strong>Minimum delivery order:</strong> 10 bags or equivalent bulk quantity</li>
              <li><strong>Pickup available:</strong> No minimum for pickup orders</li>
              <li><strong>Delivery windows:</strong> Early morning deliveries Monday–Saturday</li>
              <li><strong>Payment methods:</strong> Cash, check, or credit card accepted</li>
            </ul>
          </div>
        </div>

        <div className={styles.processSection}>
          <h3 className={styles.processTitle}>How It Works</h3>
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h4 className={styles.stepTitle}>Contact Us</h4>
              <p className={styles.stepText}>
                Call or email with your order details, quantity needed, and preferred delivery date.
              </p>
            </div>
            <div className={styles.stepConnector}></div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h4 className={styles.stepTitle}>Confirm Schedule</h4>
              <p className={styles.stepText}>
                We'll confirm pricing, delivery time, and any special requirements for your order.
              </p>
            </div>
            <div className={styles.stepConnector}></div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h4 className={styles.stepTitle}>We Deliver</h4>
              <p className={styles.stepText}>
                Fresh ice arrives on time, or you can pick up your order at our facility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Delivery

