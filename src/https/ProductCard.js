import React from 'react'

export default function ProductCard(props) {

  const { title, price, image } = props.productsData;

  return (
    <>
      <div className="card m-2" style={{ width: "400px" }}>
        <img
          className="card-img-top"
          src={image}
          alt="ProductImage"
          style={{ width: "400px", height: "400px" }}
        />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </>
  );
}
