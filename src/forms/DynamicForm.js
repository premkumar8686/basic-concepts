import React from 'react';
import { useState } from 'react';
import UserTable from './UserTable';

export default function DynamicForm() {

 const initialUser = [
    {fName: '',lName: '', skills: [{skillName: '', exp: ''}] }
 ];

 const [showData, setShowData] = useState([]);

 const [users, setUsers] = useState(initialUser);
 console.log(users);
 const emptyUser = {
    fName: '',
    lName: '', 
    skills: [] 
 }

 const emptySkill = {
    skillName: '',
    exp: 0
 } 

const addUser = (e) =>{
    e.preventDefault();
    setUsers([...users, emptyUser]);
}

const addSkills = (userId) => {
    users[userId].skills.push(emptySkill);
    setUsers([...users]);
}

const submitMyForm = (e) => {

    e.preventDefault();

    setShowData([...showData, ...users]);
    setUsers(initialUser);
}

  return (
    <>
      <div className='container my-5'>
        {/* Row Section Start */}
        <div className='row'>
             {/* Left Section Start */}
             <div className='col-md-4'>
                <form onSubmit={submitMyForm}>
                 {users.map((user, keys) => {
                    return <div key={keys}>
                      <input className='form-control' placeholder='First Name' value={user.fName} onChange={ 
                        (e)=> {
                            let data = e.target.value;
                            users[keys].fName = data;
                            setUsers([...users])
                        }
                        } name='fName' />
                      <input className='form-control mt-3 mb-4' placeholder='Second Name' value={user.lName} onChange={ 
                        (e)=> {
                            let data = e.target.value;
                            users[keys].lName = data;
                            setUsers([...users])
                        }
                        } />

                      <h6>Skill Set</h6>
                      {user.skills.map((skill, skillKeys)=>{
                        return <div className='my-2' key={skillKeys}>

                           <input className='form-control' placeholder='Skill Name' value={skill.skillName} onChange={ 
                        (e)=> {
                            let data = e.target.value;
                            user.skills[skillKeys].skillName = data;
                            setUsers([...users])
                        }
                        } />

                           <input className='form-control mt-2' placeholder='Experience' value={skill.exp} onChange={ 
                        (e)=> {
                            let data = e.target.value;
                            user.skills[skillKeys].exp = data;
                            setUsers([...users])
                        }
                        }/>

                        </div>
                      })}

                      <button className='btn btn-info text-white my-3' onClick={(e)=>{
                        e.preventDefault();
                        addSkills(keys)
                      } }>Add Skills</button>
                    </div>
                 })}
                    

                <button className='btn btn-primary text-white mt-3' onClick={addUser}>Add User</button>
                <br/>
                <br/>
                <input type='submit' className='btn btn-success form-control' />
                </form>
             </div>
             {/* Left Section End */}

             {/* Right Section Start */}
             <div className='col-md-8'>
                <UserTable baseData={showData} />
             </div>
             {/* Right Section End */}
        </div>
        {/* Row Section End */}
      </div>
    </>
  )
}
