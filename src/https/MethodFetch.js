import React from 'react'

export default function MethodFetch() {

    let userPromise = fetch('https://jsonplaceholder.typicode.com/users');

    userPromise.then(function(response){

       let jsonData = response.json();
       jsonData.then(function(finalData){
         console.log(finalData);
       }, function(error){
         console.log(error);
       })
       
    }, function(error){
        console.log(error);
    });

  return (
    <>
      
    </>
  )
}
