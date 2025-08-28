import React from 'react'
import { services } from '../constants'
import ServiceCard from '../Components/ServiceCard'
export default function Services() {
  return (
    <section className='max-container 
    flex justify-center flex-wrap gap-9'>
{services.map((service)=>{
  return(
    <ServiceCard key={service.label} {...service}/>
  )
})}
    </section>
  )
}

