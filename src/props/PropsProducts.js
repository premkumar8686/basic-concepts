import React from "react";
import { products } from "../map/products";
import Product from "./Product";

export default function PropsProducts() {
  return (
    <>
     <div className="container">
      <section className="row">
        {products.map((ele, index) => {
          return (
            <Product ele={ele} key={index} />
          );
        })}
      </section>
      </div>
    </>
  );
}
