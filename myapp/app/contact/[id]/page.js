import HeadingText from '@/components/HeadingText'
import Input from '@/components/Input';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar'
import { updateContactt } from '@/lib/action';
import { getContact } from '@/lib/data';
import React from 'react'

const SingleContact = async ({params}) => {
    const { id } = params;
    const contact = await getContact(id)
  return (
    <section>
    <HeadingText
        title='Update Contact'
        description='View And Update Contacts Below'
        />
        <Navbar /> 
        <div className='flex flex-col px-4 py-4'>
            <form
            action={updateContactt}
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
                    placeholder={contact.firstName}
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
                    placeholder={contact.lastName}
                  />
                </div>
              </div>
      
              <div className='flex mb-4'>
                <div className='w-1/2 pr-2'>
                    <input hidden name='id' defaultValue={contact.id} />
                  <label htmlFor="email" className="text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name='email'
                    placeholder={contact.email}
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
                    placeholder={contact.phone}
                  />
                </div>
              </div>        
              <button
                className='btn btn-wide bg-orange-500'
                type='submit'
              >
                Update Contact
              </button>
            </form>
        </div>
    </section>
  )
}

export default SingleContact