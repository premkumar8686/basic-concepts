import React from 'react'

export default function Map() {

    const myArray = ['tata', 'toyota', 'Maruthi'];

  return (
    <>
      {myArray.map((ele, keys)=> <h1 key={keys}>{ele}</h1>)}
    </>
  )
}
