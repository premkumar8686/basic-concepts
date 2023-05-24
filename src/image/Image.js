import React from 'react';
import dummy from '../images/dummy.jpg';


export default function Image() {
  return (
    <>
      <img src={dummy} alt='dummy' style={{width: '100px'}} />

      <img src='images/dummy.jpg' alt='dummy' style={{width: '100px'}} />
    </>
  )
}
