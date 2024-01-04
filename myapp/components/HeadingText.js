'use client'
'use client'
import React from 'react'

const HeadingText = ({title, description}) => {
  return (
    <section className='px-4 py-24'>
       <div className='flex flex-col items-center justify-center'>
       <h1 className='text-center sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>{title}</h1>
       <h3 className='text-xs text-indigo-500 tracking-widest font-medium title-font mb-2'>{description}</h3>
       <div class="h-1 w-20 bg-indigo-500 rounded"></div>

       </div>

   </section>
  )
}

export default HeadingText