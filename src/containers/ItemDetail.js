import { useEffect, useState } from "react"
import ItemDetailLayout from '../components/layout/ItemDetailLayout'


const ItemDetail = ({ match }) => {
  const [item, setItem] = useState({})

  const fetchItem = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
    const data = await res.json()
    setItem(data)
  }

  useEffect(() => {
    fetchItem()
  }, [])

  return (
    <>
      {
        item
          ? <ItemDetailLayout el={item} />

          : <p>Sorry, item not available</p>
      }
    </>
  )
}

export default ItemDetail
