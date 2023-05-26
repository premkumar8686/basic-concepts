import React, { useState } from 'react'

export default function StateHideShow() {

   const [flag, setFlag] = useState(true);

   const toggle = () => {
     setFlag(!flag);
   }

  return (
    <>

    {flag ? <h1>Flag</h1> : null}

    <button className='btn btn-success text-white' onClick={toggle}>Toggle</button>  
    </>
  )
}
