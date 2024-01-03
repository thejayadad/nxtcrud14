import Hero from '@/components/Hero'
import React from 'react'

const ContactsPage = () => {
  return (
    <section className='px-4 py-8'>
        <div className='flex flex-col items-center justify-center'>
           <h1 className='text-center px-8 py-24'>Contact Book</h1>
        </div>
    {/* The button to open modal */}
<label htmlFor="my_modal_6" className="btn">open modal</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
    </section>
  )
}

export default ContactsPage