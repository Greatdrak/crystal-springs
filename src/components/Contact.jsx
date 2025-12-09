import { useState } from 'react'
import styles from './Contact.module.css'

/**
 * Contact section with phone, email, address, and contact form.
 * Form submission shows a success message without backend integration.
 */
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderType: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send data to a backend
    // For now, just show success message
    setSubmitted(true)
    // Reset form after showing message
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        orderType: '',
        message: ''
      })
      setSubmitted(false)
    }, 5000)
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.subheading}>
          Ready to place an order or have questions? Get in touch with us today.
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Phone</h3>
              <a href="tel:+15551234567" className={styles.infoLink}>
                (555) 123-4567
              </a>
            </div>
            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Email</h3>
              <a href="mailto:info@crystalspringsice.com" className={styles.infoLink}>
                info@crystalspringsice.com
              </a>
            </div>
            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Address</h3>
              <p className={styles.infoText}>
                123 Ice Road<br />
                Springfield, ST 12345
              </p>
              <p className={styles.addressNote}>
                Located just outside Springfield. Pickup available during business hours.
              </p>
            </div>
          </div>

          <div className={styles.formContainer}>
            {submitted ? (
              <div className={styles.successMessage}>
                <h3>Thank you!</h3>
                <p>We've received your message and will be in touch soon.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="orderType" className={styles.label}>
                    Type of Order
                  </label>
                  <select
                    id="orderType"
                    name="orderType"
                    value={formData.orderType}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Select an option</option>
                    <option value="retail">Retail</option>
                    <option value="wholesale">Wholesale</option>
                    <option value="event">Event</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message / Order Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={styles.textarea}
                    placeholder="Tell us about your order, quantity needed, delivery date, or any questions..."
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

