import React, { useState } from "react";
import SearchBar from "react-js-search";

export default function ReactJsSearch() {

  const initialEmployees = [
    { number: 12, name: "Buffon", position: "ST", success: true },
    { number: 21, name: "Pirlo", position: "MC", success: false },
    { number: 10, name: "Ruiz", position: "MDI" },
    { number: 7, name: "Nesta", position: "RB", success: true },
    { number: 4, name: "Cannavaro", position: "CB" },
    { number: 2, name: "Puyol", position: "CB", success: false },
    { number: 15, name: "Abate", position: "LB" },
    { number: 16, name: "Locatelli", position: "MDI" },
    { number: 1, name: "Buffon", position: "GK" },
    { number: 21, name: "Pirlo", position: "MC" },
    { number: 10, name: "Ruiz", position: "MDI" },
    { number: 7, name: "Nesta", position: "RB" },
  ];


   const employees = initialEmployees;
   const [filteredEmployees, setFilteredEmployees] = useState(initialEmployees);

   const onSearchClick = (searchText) => {
    setFilteredEmployees(employees.filter((emp)=> JSON.stringify(emp).includes(searchText)));
    // Here because of JSON.stringify we can search with all col data Even numbers
  };

 const ascending = () => {

  setFilteredEmployees([...filteredEmployees.sort((a,b) => a.name.localeCompare(b.name))]);
  // we Use localeCompare because we have text in object, object in array 
 }

 const descending = () => {

  setFilteredEmployees([...filteredEmployees.sort((a,b) => b.name.localeCompare(a.name))]);

 }


  return <>
      <SearchBar
        onSearchTextChange={
          (term, filteredData) => {
            setFilteredEmployees([...filteredData])
          }
        }
        onSearchButtonClick={onSearchClick}
        placeHolderText={"Search here..."}
        data={employees}
      />

      <center className="my-5">
          <button className="btn btn-success me-3" onClick={ascending}>ASC</button>
          <button className="btn btn-info me-3 text-white" onClick={descending}>DEC</button>
      </center>
      <hr />
      {
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp, ind) => (
              <tr key={ind}>
                <td>{emp.number}</td>
                <td>{emp.name}</td>
                <td>{emp.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
  </>;
}
