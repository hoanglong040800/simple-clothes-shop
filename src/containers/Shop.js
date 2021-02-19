import { useState, useEffect } from 'react'

import ItemDetail from '../components/ItemDetail/ItemDetail'

const Shop = () => {
  const [itemList, setItemList] = useState([])

  const fetchItemList = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    setItemList(data)
  }

  useEffect(() => {
    fetchItemList()
  }, [])

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {
        itemList
          ? itemList.map(el => <ItemDetail el={el} key={el.id} />)
          : <p>Sorry, no item available</p>
      }
    </div>
  )
}

export default Shop
