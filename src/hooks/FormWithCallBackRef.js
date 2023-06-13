import React from 'react'

export default function FormWithCallBackRef() {

    let myRef1;
    let myRef2;

    const formSubmit = (e) => {
       e.preventDefault();

       alert(`${myRef1.value} : ${myRef2.value}` )
    }
  return (
    <>
       <center>
        <div className="container my-5">
          <form onSubmit={formSubmit}>
           
             <input type='text' className="form-control" placeholder="Name" ref={inputBox =>  {myRef1 = inputBox} } />
             <input type='number' className="form-control mt-4" placeholder="Age" ref={inputBox => {myRef2 = inputBox} } />   
             <input type='submit' className="btn btn-success mt-4" value='Submit' />   
         
          </form>
        </div>
      </center>
    </>
  )
}
