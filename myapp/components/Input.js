'use client'
import React from 'react'

const Input = ({placeholder, type, name}) => {
  return (
    <input
    placeholder={placeholder}
    type={type}
    name={name}
    className='rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
    />
  )
}

export default Input