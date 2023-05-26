import React, { useState } from 'react'

export default function FunctionState() {
 
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button className='btn btn-success text-white' onClick={increment}>Increment</button>
    </>
  )
}
