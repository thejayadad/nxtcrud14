import CreateForm from '@/components/CreateForm'
import Hero from '@/components/Hero'
import Modals from '@/components/Modals'
import {FiPlusCircle} from "react-icons/fi"

import React from 'react'

const HomePage = () => {
  return (
    <div>HomePage</div>
  )
}

export default HomePage

export default function Home() {
  return (
   <main>
    <Hero />
    <nav className='flex gap-6 px-4 py-8 justify-between items-center cursor-pointer'>
      <Modals 
        opening={<div className='flex items-center gap-1'><FiPlusCircle /> Create</div>}
        title={'Add Contacts'}
        children={<CreateForm />}
      />
    </nav>
    <div className='flex flex-col px-4 py-4'>
    <span>Search</span>

    <div className=' py-4'>
      <table
      className='table-auto w-full text-left whitespace-no-wrap'
      >
        <thead>
          <tr>
            <th 
            className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>
              First Name
            </th>
            <th
            className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'
            >
              Last Name
            </th>
            <th
            className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'
            >
            Email
            </th>
            <th
            className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'
            >
              Contact Number
            </th>
            <th
            className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
           className='border-t-2 border-gray-200 px-4 py-3' 
            >
              Jace
            </td>
            <td
           className='border-t-2 border-gray-200 px-4 py-3' 
            >
              Jace
            </td>
            <td
           className='border-t-2 border-gray-200 px-4 py-3' 
            >
              Jace
            </td>
            <td
           className='border-t-2 border-gray-200 px-4 py-3' 
            >
              Jace
            </td>
            <td
           className='border-t-2 border-gray-200 px-4 py-3' 
            >
              Jace
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
   </main>
  )
}
