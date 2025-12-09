import { useState } from 'react'
import FAQItem from './FAQItem'
import styles from './FAQ.module.css'

/**
 * FAQ section with accordion-style questions and answers.
 * Uses FAQItem components for each question/answer pair.
 */
function FAQ() {
  const faqs = [
    {
      id: 1,
      question: 'What is the minimum delivery order?',
      answer: 'We require a minimum of 10 bags (or equivalent bulk quantity) for delivery. However, you can pick up any quantity from our facility with no minimum order requirement.'
    },
    {
      id: 2,
      question: 'Do you supply events and festivals?',
      answer: 'Yes, we regularly supply ice for events, festivals, concerts, and large gatherings. Contact us in advance to discuss your needs, and we can provide pricing for bulk orders and coordinate delivery schedules.'
    },
    {
      id: 3,
      question: 'How far in advance should I place an order?',
      answer: 'For regular deliveries, we recommend placing orders at least 24-48 hours in advance. For large events or bulk orders, please contact us at least one week ahead. We also offer same-day delivery when possible, but availability is limited.'
    },
    {
      id: 4,
      question: 'Do you offer emergency or same-day delivery?',
      answer: 'We do our best to accommodate same-day and emergency delivery requests when possible. Please call us as early as possible, and we\'ll check availability. Additional fees may apply for rush orders.'
    },
    {
      id: 5,
      question: 'Do you provide ice merchandisers or freezers?',
      answer: 'We can discuss equipment rental options for larger accounts. Contact us to learn more about available equipment and rental terms for ice merchandisers and storage solutions.'
    },
    {
      id: 6,
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, check, and major credit cards. For established commercial accounts, we can set up invoicing with net payment terms. Please discuss payment options when placing your order.'
    }
  ]

  return (
    <section className={styles.faq} id="faqs">
      <div className={styles.container}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
        <p className={styles.subheading}>
          Have a question? Check our FAQs below, or feel free to contact us directly.
        </p>
        <div className={styles.faqList}>
          {faqs.map(faq => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

