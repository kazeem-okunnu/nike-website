import React from 'react'

export default function ServiceCard({imgURL,label,subtext}) {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px]
     w-full rounded-[20px] shadow-2xl
    px-10 py-16'>
        <div className='w-11 h-11 flex justify-center items-center rounded-full
        bg-coral-red'>
            <img src={imgURL} className='mix-blend-multiply' width={20} height={20} />
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>{label}</h3>
        <p className='mt-3 break-words font-montserrat
         text-lg leading-normal text-slate-gray'>{subtext}</p>
        </div>
  )
}
