import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {

  const [count, setCount] = useState(0);

  const myIncrement = () => {

    setCount( count + 1 );
    
  }

  const myRef = useRef();

  useEffect(()=>{
    console.log('useEffect...');
    myRef.val = count;
  });

  return (
    <>
      {console.log('Render...')}
      <center>
        <h1> {`New Value: ${count} - Old Value ${myRef.val}`} </h1>
        <button className='btn btn-success' onClick={myIncrement}>Increment</button>
      </center>
    </>
  )
}
