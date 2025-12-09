import { useState } from 'react'
import styles from './FAQItem.module.css'

/**
 * FAQItem component with accordion behavior.
 * Clicking the question toggles the answer visibility.
 */
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.faqItem}>
      <button 
        className={styles.question}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`answer-${question.slice(0, 10)}`}
      >
        <span className={styles.questionText}>{question}</span>
        <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div 
          id={`answer-${question.slice(0, 10)}`}
          className={styles.answer}
        >
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default FAQItem

