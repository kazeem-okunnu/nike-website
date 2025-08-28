import React from 'react'
import { star } from '../assets/icons'

export default function ReviewCard({ imgURL, customerName, rating, feedback }) {
    return (
        <div className='flex justify-center items-center
             flex-col shadow-lg rounded-md'>
            <img src={imgURL} className="rounded-full object-cover w-[90px] 
               h-[90px]" />
            <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
            <div className='mt-3 flex justify-center items-center gap-2.5'>
                <img src={star} alt="" width={24} height={24}
                    className='object-contain m-0' />
                <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
                <h3 className='mt-1 text-3xl font-palanquin text-center
               font-bold'>{customerName}</h3>
            </div>
        </div>
    )
}
