import { Link } from 'react-router-dom'

import styles from './ItemCard.module.css'


const ItemCard = ({ el }) => {
  return (

    <Link to={`/shop/${el.id}`} className='link-reset'>
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
    </Link>

  )
}

export default ItemCard
