import Link from 'next/link'
import React from 'react'
import {FiPlusCircle, FiHome} from "react-icons/fi"


const Navbar = () => {
  return (
    <nav className='flex gap-6 px-4 py-8 justify-between items-center cursor-pointer'>
    <Link className='flex items-center gap-1' href={'/'}><FiHome /> Home</Link>
    <Link
    className='flex items-center gap-1'
    href={'/contact'}>
    <FiPlusCircle /> Create
    </Link>
  </nav>
  )
}

export default Navbar