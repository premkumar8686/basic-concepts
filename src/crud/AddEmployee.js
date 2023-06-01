import React, { useState } from "react";

export default function AddEmployee(props) {

  const mainArrayLength = props.employeesData.length;

  const lastObj = props.employeesData[mainArrayLength - 1];

  const [name, setName] = useState(null);
  const [salary, setSalary] = useState(null);

  const collectingData = (e) => {
    if(e.target.name === 'name')
    {
      setName(e.target.value);
    } else {
      setSalary(e.target.value);
    }
  }

  const addNewEmployee = (e) => {

    e.preventDefault();

    const newEmpObj = {
      eId: lastObj.eId + 1,
      Name: name,
      Sal: salary
    }

    // props.mainDataFunction([...props.employeesData, newEmpObj]) 

    props.employeesData.push(newEmpObj);

    props.mainDataFunction([...props.employeesData]);

    setName('');
    setSalary('');

  }




  return (
    <>
      <form onSubmit={addNewEmployee}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            name='name'
            onChange={collectingData}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="salary" className="form-label">
            Salary
          </label>
          <input
            type="number"
            className="form-control"
            id="salary"
            value={salary}
            name='salary'
            onChange={collectingData}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

      </form>
    </>
  );
}
