'use client'
import React from 'react'
import Input from './Input'

const CreateForm = () => {
  return (
    <div>
        <form
        className='bg-gray-300 p-2 rounded-md'
        >
            <div className='relative'>
            <label for="name-with-label" class="text-gray-700">
                Name
            </label>
            <Input
                placeholder={'Name'}
                
            />
            </div>
        </form>
    </div>
  )
}

export default CreateForm