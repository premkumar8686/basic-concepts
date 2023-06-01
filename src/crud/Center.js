import React, { useState } from "react";
import AddEmployee from "./AddEmployee";
import EmployeeList from "./EmployeeList";

export default function Center() {

      const initialEmployees = [
        { eId: 101, Name: "sanjay", Sal: 5000 },
        { eId: 102, Name: "deepak", Sal: 8000 },
        { eId: 103, Name: "ranjan", Sal: 7000 },
        { eId: 104, Name: "manoj", Sal: 9000 },
      ];

      const [employees, setEmployees] = useState(initialEmployees);

  return (
    <>
      <div className="container my-5">
        <section className="row">

          <div className="col-md-5">
            <AddEmployee employeesData={employees} mainDataFunction={setEmployees}/>
          </div>

          <div className="col-md-7">
            <EmployeeList employeesData={employees} deleteFunction={setEmployees}/>
          </div>

        </section>
      </div>
    </>
  );
}
