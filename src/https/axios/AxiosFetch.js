import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function AxiosFetch() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url).then((response)=>{
        setUsers(response.data);
    }).catch((error) => {
        console.log(error);
    })
  },[]);

  return (
    <>
     <ul>
     {users.map((user, index) => {
        return <li key={index}>{user.name}</li>
     })}
        
     </ul>    
    </>
  )
}
