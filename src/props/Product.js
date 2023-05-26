import React from "react";

export default function Product(props) {

  const {image, title, description, price} = props.ele;

  return (
    <>
      <div className="col-md-4 mt-5" >
        <div className="card" style={{ width: "18rem" }}>
          <center>
            <img
              src={image}
              className="card-img-top"
              alt="..."
              style={{ width: "100px", height: "100px" }}
            />
          </center>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="btn btn-primary">₹ {price}</div>
          </div>
        </div>
      </div>
    </>
  );
}
