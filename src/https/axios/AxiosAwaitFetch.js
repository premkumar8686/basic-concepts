import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function AxiosAwaitFetch() {

    const [users, setUsers] = useState([]);

    const getData = async () => {
       const url = 'https://jsonplaceholder.typicode.com/users';
       const finalData = await axios.get(url);
       setUsers(finalData.data);
    }
    
    useEffect(()=>{
       getData();
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
