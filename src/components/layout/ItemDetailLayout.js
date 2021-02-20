import styles from './ItemDetailLayout.module.css'

const ItemDetail = ({ el }) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>

        <div className={styles.imgContainer}>
          <img src={el.image} alt={el.title} />
        </div>

        <div className={styles.content}>
          <h1>{el.title}</h1>
          <p className={styles.description}>{el.description}</p>
          <h1 className={styles.price}>{el.price}$</h1>
        </div>
        
      </div>
    </div>
  )
}

export default ItemDetail
