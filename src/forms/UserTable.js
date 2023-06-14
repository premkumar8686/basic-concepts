import React, { useState } from 'react';
import { RiEyeLine, RiBallPenFill, RiDeleteBin5Line } from "react-icons/ri";

export default function UserTable(props) {

  const [myUser, setMyUser] = useState({skills: []});


  return (
    <>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Second Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.baseData.map((user, keys) => {
            return (
              <tr key={keys}>
                <td>{user.fName}</td>
                <td>{user.lName}</td>
                <td>
                  <div className="d-flex justify-content-between">
                    <RiEyeLine
                      className="text-success cursor-pointer"
                      data-bs-toggle="modal"
                      data-bs-target="#viewModal"
                      onClick={() => setMyUser(user)}
                    />

                    <RiBallPenFill className="text-warning" />

                    <RiDeleteBin5Line
                      className="text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                      
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <!-- The Modal --> */}
      <div class="modal" id="viewModal">
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal Header --> */}
            <div class="modal-header">
              <h4 class="modal-title">View User</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* <!-- Modal body --> */}
            <div class="modal-body">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <td>{myUser.fName}</td>
                  </tr>
                  <tr>
                    <th>Last Name</th>
                    <td>{myUser.lName}</td>
                  </tr>
                </thead>
              </table>
              <center>
                <p>
                  <b>Skills</b>
                </p>
              </center>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Skill Name</th>
                    <th>Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {myUser.skills.map((skill, keys) => {
                    return (
                      <tr key={keys}>
                        <td>{skill.skillName}</td>
                        <td>{skill.exp}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- The Modal --> */}

      {/* <!-- The Modal --> */}
      <div class="modal" id="deleteModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Delete Alert</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div class="modal-body">
              <p className='text-danger text-center'> 
                <b>Are you sure you want to delete this record <br/>Permanently</b> 
              </p>
            </div>

            <div class="modal-footer justify-content-between">
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Yes
              </button>

              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- The Modal --> */}
    </>
  );
}
