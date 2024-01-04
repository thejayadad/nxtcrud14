'use client'
import React, { useState } from 'react';
import Input from './Input';
import { addContact } from '@/lib/action';
import Loading from './Loading';
import { toast } from 'react-toastify';


const CreateForm = () => {
    const [loading, setLoading] = useState(false);

  return (
    <div>
      <form 
      action={addContact}
      className='bg-gray-200 flex flex-col items-center p-2 rounded-md'>
        <div className='flex mb-4'>
          <div className='w-1/2 pr-2'>
            <label htmlFor="first-name" className="text-gray-700">
              First Name
            </label>
            <Input
              id="first-name"
              type="text"
              name='firstName'
              placeholder={'First Name'}
            />
          </div>
          <div className='w-1/2 pl-2'>
            <label htmlFor="last-name" className="text-gray-700">
              Last Name
            </label>
            <Input
              id="last-name"
              name='lastName'
              type="text"
              placeholder={'Last Name'}
            />
          </div>
        </div>

        <div className='flex mb-4'>
          <div className='w-1/2 pr-2'>
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <Input
              id="email"
              type="email"
              name='email'
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
              name='phone'
              placeholder={'Contact Number'}
            />
          </div>
        </div>        
        <button
          className='btn btn-wide bg-orange-500'
          type='submit'
          disabled={loading}
        >
          {loading ? <Loading size={20} /> : 'Create Contact'}
        </button>
      </form>
    </div>
  );
}

export default CreateForm;
