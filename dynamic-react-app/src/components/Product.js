import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <section  key={product.id}>
                        <img src={product.url} alt={product.description} width='30%' height='30%'></img>
                        <h1>{product.title}</h1>
                        <h3>{product.price}SEK</h3>                        
                        <p>{product.description}</p>
                                      
                    
        <button onClick={() => onAdd(product)}>Add To Cart</button>
        </section>
      </div>
    
  );
}
