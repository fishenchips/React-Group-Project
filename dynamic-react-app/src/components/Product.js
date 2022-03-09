import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <section  key={product.id}>
                      <a href={`/products/+ ${product.id}`}> <img src={product.url} alt={product.description} width='30%' height='30%'></img></a>
                        <h1 className='header1'>{product.title}</h1> 
                        <h3 className='header3'>{product.price}SEK</h3>                        
                        <p>{product.description}</p>
                                      
                    
        <button onClick={() => onAdd(product)}>Add To Cart</button>
        </section>
      </div>
    
  );
}
