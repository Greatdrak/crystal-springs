import ProductCard from './ProductCard'
import styles from './Products.module.css'

/**
 * Products section displaying available ice products and pricing.
 * Uses ProductCard components to display each product offering.
 */
function Products() {
  const products = [
    {
      id: 1,
      name: '7 lb Bag',
      size: '7 pounds',
      description: 'Perfect for small businesses, parties, and personal use. Conveniently sized for easy handling.',
      price: '$3.50',
      showPrice: true
    },
    {
      id: 2,
      name: '20 lb Bag',
      size: '20 pounds',
      description: 'Ideal for restaurants, bars, and larger events. Our most popular size for commercial use.',
      price: '$8.00',
      showPrice: true
    },
    {
      id: 3,
      name: 'Bulk / Pallet',
      size: 'Custom quantities',
      description: 'Large volume orders for high-demand businesses. Contact us for pricing and availability.',
      price: 'Contact for quote',
      showPrice: false
    }
  ]

  return (
    <section className={styles.products} id="products">
      <div className={styles.container}>
        <h2 className={styles.heading}>Products & Pricing</h2>
        <p className={styles.subheading}>
          We offer a range of ice products to meet your needs. 
          All prices are suggested retail; contact us for wholesale pricing.
        </p>
        <div className={styles.productsGrid}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

