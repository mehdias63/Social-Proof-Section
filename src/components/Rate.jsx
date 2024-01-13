import React from 'react'
import Social from './Social'

export default function Rate({description , star}) {
  return (
    <div className='flex flex-col justify-center items-center bg-[#F7F2F7] m-3 rounded-lg py-2 '>
          <div className='flex gap-2'>
            <Social /><Social /><Social /><Social /><Social />
          </div>
          <p className='text-[1.0625rem] font-bold text-[#512051] mt-2'>{description}</p>
        </div>
  )
}
