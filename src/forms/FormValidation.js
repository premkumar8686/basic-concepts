import React from "react";
import { useState } from "react";

export default function FormValidation() {
  const initialUser = {
    fName: {value: '', errorMsg: ''},
    lName: {value: '', errorMsg: ''},
  };

  const [user, setUser] = useState(initialUser);

  const formSubmit = (e) => {
    
     e.preventDefault();

     if(user.fName.value === '')
     {
        setUser({...user, fName: {...user.fName, errorMsg: 'Please Enter First Name'} });
        return false;
     } else {
        setUser({...user, fName: user.fName.errorMsg = ''});
     }

     alert(user.fName.value);
  }

  return (
    <>
      <center>
        <div className="container my-5">
            <form onSubmit={formSubmit}>
                <span className="text-danger">{user.fName.errorMsg}</span>
                <input value={user.fName.value} className="form-control mt-3" placeholder='Enter Your Name' name='name' onChange={(e)=> setUser({...user, fName: {...user.fName, value: e.target.value }  })} />

                <input type="submit" value='Submit' className="btn btn-success mt-3"  />

            </form>
        </div>
      </center>
    </>
  );
}
