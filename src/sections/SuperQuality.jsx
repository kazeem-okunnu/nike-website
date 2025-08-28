import React from 'react'
import Button from '../Components/Button'
import { shoe8 } from '../assets/images'
export default function SuperQuality() {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col
    gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>

        <h2 className=' font-palanquin text-4xl 
        max-sm:text-[72px] font-bold lg:max-w-lg'>
          We Provide You <span className='text-coral-red'>super</span>
          <span className='text-coral-red'> quality</span> shoes
        </h2>
        <p className=' mt-4 lg:max-w-lg info-text'>
          ensuring premium comfort and style, our meticulously crafted
          footwear is designed to elevate your experience, providing you with
          unmatched quality, innovation, and a touch of elegance
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>our dedication to details and excellence ensures your satisfaction</p>
        <div className='mt-11'>
          <Button label='View Details' />
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} width={570} height={522}
          className='object-contain' />
      </div>
    </section>
  )
}
