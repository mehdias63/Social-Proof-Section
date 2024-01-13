import React from 'react'
import Social from './Social'

export default function Rate({description , star}) {
  return (
    <div className='btn flex flex-col justify-center items-center bg-[#F7F2F7] m-3 rounded-lg py-2 w-[20.4375rem] h-[4.875rem] md:w-[27.8125rem] md:h-[3.5rem] md:flex-row md:gap-10'>
          <div className='flex gap-2'>
            <Social /><Social /><Social /><Social /><Social />
          </div>
          <p className='text-[1.0625rem] font-bold text-[#512051] mt-2'>{description}</p>
        </div>
  )
}
