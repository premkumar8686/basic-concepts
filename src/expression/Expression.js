import React from 'react'

export default function Expression() {

   let name = 'Prem';
   let test = `My Name is ${name}`;

  return (
    <>
     {name} <br/>
     {test}
    </>
  )
}
