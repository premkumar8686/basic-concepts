import React, { useEffect, useState } from 'react'

export default function Demo2() {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const increment = () => {
     setCount(count + 1);
     console.log('Increment: ' + count );
  }


  const increment1 = () => {
     setCount1(count1 + 1);
     console.log('Second Increment: ' + count1 );
  }

  useEffect(() => {

    console.log('Use Effect Increment: ' + count );
    console.log('Second Use Effect Increment: ' + count1 );

  });


  return (
    <>
      <h1>{count}</h1>
      <button className='btn btn-success text-white mt-5d' onClick={increment}>Increment</button>
      <h1>{count1}</h1>
      <button className='btn btn-success text-white mt-5d' onClick={increment1}>Increment</button>
    </>
  )
}
