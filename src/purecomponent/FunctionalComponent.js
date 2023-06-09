import React from 'react'
import { useState } from 'react'

export default function FunctionalComponent() {

  const [name, setName] = useState('Prem');

  const update = ()=> {
     setName('Prem');
  }

  console.log('Rendering...');
  return (
    <>
     {console.log('Rendering...')}
     <h1>{name}</h1>
     <button onClick={update}>Update</button>    
    </>
  )
}
