import React, { useState } from "react";

export default function TextCount() {

  const [count, setCount] = useState(0);

  const counter = (e) => {

    let initValue = e.target.value.length;

    setCount(initValue);

  }

  return (
    <>
      <section className="container text-center">
        <textarea className="form-control mt-5" onChange={counter} maxLength={100}>

        </textarea>

        <h1 className="mt-5">Character Count: {count}</h1>
        <h1 className="mt-5">Remaining Character Count: {100 - count}</h1>

      </section>
    </>
  );
}
