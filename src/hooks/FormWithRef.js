import React from "react";
import { useRef } from "react";

export default function FormWithRef() {

   const myRef1 = useRef();
   const myRef2 = useRef();

   const formSubmit = (e) => {

      e.preventDefault()

      alert(`Name: ${myRef1.current.value} and Age: ${myRef2.current.value}`)
   }

  return (
    <>
      <center>
        <div className="container my-5">
          <form onSubmit={formSubmit}>
           
             <input type='text' className="form-control" placeholder="Name" ref={myRef1} />
             <input type='number' className="form-control mt-4" placeholder="Age" ref={myRef2} />   
             <input type='submit' className="btn btn-success mt-4" value='Submit' />   
         
          </form>
        </div>
      </center>
    </>
  );
}
