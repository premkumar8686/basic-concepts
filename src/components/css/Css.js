import React from 'react';
import './style.css';

export default function Css() {
  return (
    <>
      <h1 style={{color: '#C2782D'}}>Inline CSS</h1>
      <h1 className='myh1'>External CSS</h1>
    </>
  )
}
