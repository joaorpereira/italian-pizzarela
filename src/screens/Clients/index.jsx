import React, { useState, useLayoutEffect } from 'react'
import './styles.css'

import CardClient from '../../components/CardClient'
import { avaliations } from './constants'

const Clients = () => {
  const [card, setCard] = useState(1)

  const handleNext = () => {
    setCard(prev => prev + 1)
  }

  const handlePrev = () => {
    setCard(prev => prev - 1)
  }

  const handleSetFirst = () => {
    setCard(1)
  }

  const handleSetLast = () => {
    setCard(avaliations.length - 1)
  }

  useLayoutEffect(() => {
    if (card === avaliations.length - 1) {
      return handleSetFirst()
    } else if (card < 0) {
      return handleSetLast()
    }
  }, [card])

  return (
    <section className='clients__section' id='clients'>
      <div className='clients__container'>
        <h2>Avaliações</h2>
        <span className='arrow left' onClick={handlePrev} />
        <div className={`cards__slider active__slide__${card}`}>
          <div
            className='slides__wrapper '
            style={{
              transform: `translateX(-${card * (100 / avaliations.length)}%)`,
            }}
          >
            {avaliations.map((card, index) => (
              <CardClient key={index} data={card} index={index} />
            ))}
          </div>
        </div>
        <span className='arrow right' onClick={handleNext} />
      </div>
    </section>
  )
}

export default Clients
