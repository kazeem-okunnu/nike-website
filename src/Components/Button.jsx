import React from 'react'

export default function Button({label,iconURL,
  backgroundColor,textColor,borderColor,fullWidth}) {
  return (
    <button className={`flex justify-center items-center gap-2 
    py-4 px-7 border font-monserrat text-lg leading-none
     bg-coral-red ${backgroundColor?`${backgroundColor}
       rounded-full ${textColor} ${borderColor}`:
     `rounded-full text-white border-coral-red ${fullWidth&&"w-full"}` 
     }
    `}>
{label}
{iconURL&&<img src={iconURL} className='ml-2 
rounded-full w-5 h-5' />}
    </button>
  )
}
