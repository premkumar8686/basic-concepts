import React from 'react'
import { useState } from 'react'
import ProductCard from './ProductCard';
import { useEffect } from 'react';

export default function FetchData() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async function()
  {
    const products = await fetch('https://fakestoreapi.com/products');
    const finalData = await products.json();
    setProducts(finalData);
  }

  useEffect(()=>{
     fetchProducts();
  },[]);

  return (
    <>
      <section className='container my-5'>
        <div className='row'>

          {products.map((product, keyValue)=> <ProductCard productsData={product} key={keyValue} />)}

        </div>
      </section>
    </>
  )
}
