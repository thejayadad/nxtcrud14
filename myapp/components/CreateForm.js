'use client'
import React from 'react';
import Input from './Input';

const CreateForm = () => {
  return (
    <div>
      <form className='bg-gray-300 flex flex-col items-center p-2 rounded-md'>
        <div className='flex mb-4'>
          <div className='w-1/2 pr-2'>
            <label htmlFor="first-name" className="text-gray-700">
              First Name
            </label>
            <Input
              id="first-name"
              type="text"
              placeholder={'First Name'}
            />
          </div>
          <div className='w-1/2 pl-2'>
            <label htmlFor="last-name" className="text-gray-700">
              Last Name
            </label>
            <Input
              id="last-name"
              type="text"
              placeholder={'Last Name'}
            />
          </div>
        </div>

        {/* Second Row: Email and Contact Number */}
        <div className='flex mb-4'>
          <div className='w-1/2 pr-2'>
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder={'Email'}
            />
          </div>
          <div className='w-1/2 pl-2'>
            <label htmlFor="contact-number" className="text-gray-700">
              Contact Number
            </label>
            <Input
              id="contact-number"
              type="text"
              placeholder={'Contact Number'}
            />
          </div>
        </div>
        <button className='btn btn-wide bg-orange-500' type='submit'>Create Contact</button>
      </form>
    </div>
  );
}

export default CreateForm;
