import React from "react";
import users from "./usersList.json";

export default function JsonDataRead() {
  const headings = Object.keys(users[0]).map((ele, keys) => (
    <th key={keys}>{ele}</th>
  ));


  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>{headings}</tr>
        </thead>
        <tbody>
          {users.map((ele, index)=>{
            return(
                <tr key={index}>
                    {Object.values(ele).map((value, index)=> <td key={index}>{value}</td>)}
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
