import React from 'react';
import Swal from 'sweetalert2';

export default function SweetAlert() {

   const open = () => {
      Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
   }
  return (
    <>
      <center> 
        <button className='btn btn-info text-white mt-5' onClick={open}>Open Alert</button>
      </center>
    </>
  )
}
