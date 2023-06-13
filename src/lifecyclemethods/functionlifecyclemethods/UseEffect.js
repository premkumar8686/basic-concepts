import React, { useState } from 'react'
import { useEffect } from 'react'

export default function UseEffect() {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    useEffect(()=>{
      console.log('useEffect is calling');
      console.log('====================================');
      return () => {
        console.log('useEffect Unmount is calling');
        console.log('====================================');
       }
    },[a,b]);

    const upDateA = () => {
        setA(10)
    }
    const upDateB = () => {
        setB(10)
    }

    const upDateC = () => {
        setC(10)
    }


  return (
    <>
      <h1>{`A = ${a} : B = ${b} : C = ${c}`}</h1>
      <button className='btn btn-success' onClick={upDateA}>Update A</button>
      <button className='btn btn-success m-3' onClick={upDateB}>Update B</button>
      <button className='btn btn-success' onClick={upDateC}>Update C</button>
    </>
  )
}
