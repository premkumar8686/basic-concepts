import React from 'react';
import { products } from './products';

export default function ProductsMap() {
  return (
    <>
      <section className='container'>
       <div className='row'>
         {products.map((ele, keys)=>{
            return(
                <>
                 <div className='col-md-3' key={keys}>
                   <h1>{ele.title}</h1>
                   <img src={ele.image} alt='lll' style={{width: '100px'}} />
                 </div>
                </>
            );
         })}
         </div>
      </section>
    </>
  )
}
