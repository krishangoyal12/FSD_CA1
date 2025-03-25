import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import '../App.css'

export default function Home({data}) {
  return (
    <div className='Home'>
      {data.map((ele,index)=>(
        <ServiceCard
        key={index}
        ele={ele}/>
      ))}
    </div>
  )
}
