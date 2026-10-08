import React from 'react'

const Card = (props) => {
  const {name,surname}=props
  return (
    <div>
      <span>{name} </span>
      <span>{surname}</span>
    </div>
  )
}

export default Card

