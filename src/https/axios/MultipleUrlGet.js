import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function MultipleUrlGet() {

  const [users, setUsers] = useState([]);
  const [todo, setTodo] = useState([]);

  const getData = async () => {

   const promise1 = axios.get('https://jsonplaceholder.typicode.com/todos');
   const promise2 = axios.get('https://jsonplaceholder.typicode.com/users');

   const [data1, data2] = await axios.all([promise1, promise2]);

   setUsers(data2.data);
   setTodo(data1.data);

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

      <br/>

      <ul>
        {todo.map((todo, index) => {
            return <li key={index}>{todo.title}</li>
        })}
      </ul>
    </>
  )
}
