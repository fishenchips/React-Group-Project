import React, {useState} from 'react';
import styled from "styled-components";

const defaultCart = [{
    id: 234967,
    title: "Tennis racket",
    description: "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n        recusandae alias error harum maxime adipisci amet laborum.",
    price: 5500,
    storage: 77,
    url: "https://cdn.pixabay.com/photo/2020/04/10/10/44/activity-5025174_1280.jpg"
  },
  {
    id: 5456463,
    title: "Rollerblades",
    description: "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n        recusandae alias error harum maxime adipisci amet laborum.",
    price: 3500,
    storage: 24,
    url: "https://cdn.pixabay.com/photo/2016/12/17/09/01/sport-1913035_1280.png"
  }
]

function Checkout() {
    const [item, setItem] = useState(defaultCart)


    console.log("default todos", item)
  return (
    <section>
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    item.map( (product) => (
                        <tr key={product.id}>
                            <td> 
                                <Img 
                                    src={product.url} 
                                    alt={product.title}
                                    

                                />
                            </td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </section>
  )
}

const Img = styled.img`
    height: 40px;
`
  


export default Checkout