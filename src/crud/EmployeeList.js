import React, { useState } from "react";
import { RiEyeLine, RiPencilFill, RiDeleteBin6Line } from "react-icons/ri";

export default function EmployeeList(props) {
  const [deleteId, setDeleteId] = useState(0);
  const [employeeDetails, setEmployeeDetails] = useState({});

  const [empId, setEmpId] = useState(null);
  const [empName, setEmpName] = useState(null);
  const [empSalary, setEmpSalary] = useState(null);

  const myHeader = Object.keys(props.employeesData[0]).map((ele, keys) => (
    <th key={keys}>{ele}</th>
  ));

  const openModel = (id) => {
    setDeleteId(id);
  };

  const deleteRecord = (modelId) => {
    const finalData = props.employeesData.filter(
      (empObj) => empObj.eId !== modelId
    );
    props.deleteFunction(finalData);
  };

  const openViewModel = (empObj) => {
    setEmployeeDetails(empObj);
  };

  const openEditModel = (empObj) => {
    setEmpId(empObj.eId);
    setEmpName(empObj.Name);
    setEmpSalary(empObj.Sal);
  };

  const changeData = (e) => {
   if(e.target.name === 'name')
   {
     setEmpName(e.target.value);
   } else {
     setEmpSalary(e.target.value);
   } 
  }

  const editFormSubmit = (e) => {

    e.preventDefault()
    
    const updatedData = props.employeesData.map((empObj) => {

        if(empObj.eId === empId)
        {
            return {...empObj, Name: empName, Sal: empSalary}
        } else {
           return empObj;
        }

    })

    props.deleteFunction(updatedData);

  }

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            {myHeader}
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {props.employeesData.map((obj, keys) => {
            return (
              <tr key={keys}>
                <td>{obj.eId}</td>
                <td>{obj.Name}</td>
                <td>{obj.Sal}</td>
                <td className="d-flex justify-content-between">

                  <RiEyeLine
                    className="text-success cursor-pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#viewModal"
                    onClick={() => openViewModel(obj)}
                  />

                  <RiPencilFill
                    className="text-warning cursor-pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    onClick={() => openEditModel(obj)}
                  />

                  <RiDeleteBin6Line
                    className="text-danger cursor-pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                    onClick={() => openModel(obj.eId)}
                  />

                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* View Modal  */}
      <div className="modal" id="viewModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header ">
              <h6 className="modal-title ">Detail View Of Employee</h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <td>{employeeDetails.eId}</td>
                  </tr>
                  <tr>
                    <th>Name</th>
                    <td>{employeeDetails.Name}</td>
                  </tr>
                  <tr>
                    <th>Salary</th>
                    <td>{employeeDetails.Sal}</td>
                  </tr>
                </thead>
              </table>
            </div>

            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* View Modal  */}

      {/* Edit Modal  */}
      <div className="modal" id="editModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <h6 className="modal-title ">You can edit employee details here</h6>
            </div>

            <div className="modal-body">
               <form onSubmit={editFormSubmit} >
                    <div className="mb-3 mt-3">
                        <label htmlFor="id" className="form-label">Id:</label>
                        <input value={empId} type="number" className="form-control" id="id" placeholder="Id" name="id" disabled />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input value={empName} type="text" className="form-control" id="name" placeholder="Enter Name" name="name" onChange={changeData} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="salary" className="form-label">Salary:</label>
                        <input value={empSalary} type="text" className="form-control" id="salary" placeholder="Enter Salary" name="salary" onChange={changeData} />
                    </div>
                    <center>
                     <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                    </center>
                </form>
            </div>

            <div className="modal-footer justify-content-center">
             
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close Model
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Modal  */}

      {/* Delete Modal  */}
      <div className="modal" id="deleteModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <h6 className="modal-title ">Remove Record Notifications</h6>
            </div>

            <div className="modal-body">
              <p className="text-danger text-center">
                <b>Do you want to delete the record permanently</b>
              </p>
            </div>

            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => deleteRecord(deleteId)}
              >
                Yes
              </button>

              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Delete Modal  */}
    </>
  );
}
