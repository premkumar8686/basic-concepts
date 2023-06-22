import React from 'react'
import { useEffect } from 'react';

export default function AsyncAwait() {

    const fetchData = async () => {
        let userPromise = await fetch('https://fakestoreapi.com/products');
        let finalData = await userPromise.json();
        console.log(finalData);
    }  

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <>
     
    </>
  )
}
