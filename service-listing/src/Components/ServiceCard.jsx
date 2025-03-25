import React from 'react'
import './ServiceCard.css'

export default function ServiceCard({ele}) {
  return (
    <div className='container'>
      <h2>{ele.serviceTitle}</h2>
      <h4>{ele.description}</h4>
    </div>
  )
}
