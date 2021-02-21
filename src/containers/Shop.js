import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ItemDetail from '../components/ItemCard/ItemCard'


const Shop = () => {
  const [itemList, setItemList] = useState([])

  const fetchItemList = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    setItemList(data)
  }

  const fetchCate = async (cate) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${cate}`)
    const data = await res.json()
    setItemList(data)
  }

  useEffect(() => {
    fetchItemList()
  }, [])

  const handleSelect = (e) => {
    const value = e.target.value
    value == 'all'
      ? fetchItemList()
      : fetchCate(value)
  }

  return (
    <>
      <div style={{ paddingLeft: 20 }}>
        <label htmlFor="category">Filter: </label>
        <select name="category" onChange={(e) => handleSelect(e)}>
          <option value="all">All</option>
          <option value="men clothing">Men Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women clothing">Women Clothing</option>
        </select>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          itemList
            ? itemList.map(el => <ItemDetail el={el} key={el.id} />)
            : <p>Sorry, no item available</p>
        }
      </div>
    </>
  )
}

export default Shop
