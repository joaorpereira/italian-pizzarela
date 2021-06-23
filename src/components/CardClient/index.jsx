import React from 'react'
import './styles.css'

const CardClient = ({ data, index }) => {
  return (
    <div id={`card-${index}`} className={`card`}>
      {data && (
        <>
          <img src={data.image} alt={data.image} />
          <h3>{data.name}</h3>
          <p>{data.description}</p>
        </>
      )}
    </div>
  )
}

export default CardClient
