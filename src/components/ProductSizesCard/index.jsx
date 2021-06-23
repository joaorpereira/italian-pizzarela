import React from 'react'
import './styles.css'

import Size from '../../assets/small.png'

const ProductSizesCard = ({ name, label, size }) => {
  return (
    <div className='product__size'>
      <img className={label} src={Size} alt={`pizza ${label}`} />
      <h4>{name}</h4>
      <p>{size}</p>
    </div>
  )
}

export default ProductSizesCard
