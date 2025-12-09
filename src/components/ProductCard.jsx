import styles from './ProductCard.module.css'

/**
 * ProductCard component displays individual product information.
 * Shows name, size, description, price, and an order button.
 */
function ProductCard({ product }) {
  const handleOrderClick = (e) => {
    e.preventDefault()
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.size}>{product.size}</p>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.priceContainer}>
        {product.showPrice ? (
          <span className={styles.price}>{product.price}</span>
        ) : (
          <span className={styles.priceQuote}>{product.price}</span>
        )}
      </div>
      <button 
        onClick={handleOrderClick}
        className={styles.orderButton}
      >
        Order / Request Quote
      </button>
    </div>
  )
}

export default ProductCard

