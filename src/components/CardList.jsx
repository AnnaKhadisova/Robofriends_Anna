import React, { Component } from 'react'
import Card from './Card'


function CardList({ robots }) {
  const cardsArray = robots.map((user, i) => {
    return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
  })

  return (
    <>
      {
        <div className='tc'>
          {cardsArray}
        </div>
      }
    </>
  )
}

export default CardList