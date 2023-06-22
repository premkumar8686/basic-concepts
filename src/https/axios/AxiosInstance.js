import React from 'react';
import baseURL from './api';
import { useState } from 'react';
import { useEffect } from 'react';

export default function AxiosInstance() {

  const [users, setUsers] = useState([]);

  const fetchFunction = async () => {
    const finalData = await baseURL.get('/users');
    setUsers(finalData.data);
    console.log(finalData.data);
  }

  useEffect(()=>{
     fetchFunction()
  },[]);

  return (
    <>
      {users.map((user, index) => {
        return <li key={index}>{user.name}</li>
      })}
    </>
  )
}
