import React from 'react'
import Memo2 from './Memo2'
import { useState } from 'react'

export default function Memo() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('Prem');

  const increment = () => {
    setCount(count + 1);
  }

  const changeName = () => {
    setName('Prem Kumar');
  }

  return (
    <>
      {console.log('Memo Render...')}
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <Memo2 passData={name} />
      <button onClick={changeName}>Change Name</button>

    </>
  )
}
