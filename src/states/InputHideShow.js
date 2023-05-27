import React, { useState } from 'react'

export default function InputHideShow() {

  const [flag, setFlag] = useState(true);

  const toggle = () => {
    
        setFlag(!flag);
   
      
  }

  return (
    <>
      <section className='container text-center'>
        <input type={flag ? 'password' : 'text'} className='w-100 form-control mt-5' />
        <button className='btn btn-info text-white mt-5' onClick={toggle}>{flag ? 'Show' : 'Hide'}</button>
      </section>
    </>
  )
}
