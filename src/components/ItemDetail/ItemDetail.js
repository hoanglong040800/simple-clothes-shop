

const ItemDetail = ({ el }) => {
  return (
    <div>
      <h4>{el.title}</h4>
      <p>{el.price}</p>
      <p>{el.description}</p>
      <p>{el.category}</p>
      <img src={el.image} alt={el.title} style={{ width: '50px' }} />
    </div>
  )
}

export default ItemDetail
