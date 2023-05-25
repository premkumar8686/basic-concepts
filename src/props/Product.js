import React from "react";

export default function Product(props) {
  return (
    <>
      <div className="col-md-4 mt-5" >
        <div className="card" style={{ width: "18rem" }}>
          <center>
            <img
              src={props.ele.image}
              className="card-img-top"
              alt="..."
              style={{ width: "100px", height: "100px" }}
            />
          </center>
          <div className="card-body">
            <h5 className="card-title">{props.ele.title}</h5>
            <p className="card-text">{props.ele.description}</p>
            <div className="btn btn-primary">₹ {props.ele.price}</div>
          </div>
        </div>
      </div>
    </>
  );
}
