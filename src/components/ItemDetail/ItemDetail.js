import styles from './ItemDetail.module.css'

const ItemDetail = ({ el }) => {
  return (

    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <img src={el.image} alt={el.title} />
      </div>

      <div className={styles.content}>
        <p className={styles.title}>{el.title}</p>

        <div className={styles.bottom}>
          <i className={styles.cate}>{el.category}</i>
          <h5 className={styles.price}>{el.price}$</h5>
        </div>

      </div>

    </div>

  )
}

export default ItemDetail
