import React from 'react'

export default function MethodFetch2() {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((finalData) => console.log(finalData))
    .catch(error => console.log(error) )


  return (
    <>
      
    </>
  )
}
