import React, {useState} from 'react';
import styled from "styled-components";
import CheckoutForm from '../components/CheckoutForm';
import {Table, TableHeader, TableRow, Img} from "../styledComponents"

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

function Checkout(  { /* cartItems  */ updateCartItem, item, deleteCartItem } ) {
    const [cartItems, setCartItems] = useState(defaultCart)

    const handleDeleteBtn = (e) => {
        e.preventDefault();


        //doesnt work because right now im using defaultCart
        deleteCartItem(cartItems.id)
    }

    console.log("default todos", cartItems)
  return (
    <div>
        <section>
            <Table>
                <thead>
                    <tr>
                        <td>
                            <TableHeader>Checkout</TableHeader>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map( (product) => (
                            <TableRow key={product.id}>
                                <td> 
                                    <Img 
                                        src={product.url} 
                                        alt={product.title}
                                    />
                                </td>
                                <td>{product.title}</td>
                                <td>{product.price} SEK</td>
                                <td>add / remove</td>
                                <td>amount</td>
                                <td>Sum: </td>
                                <td>
                                    <button onClick={handleDeleteBtn}>Delete</button>
                                </td>
                            </TableRow>
                        ))
                    }
                </tbody>
            </Table>
            <h3>Total cost:</h3>
        </section>
        <CheckoutForm />
    </div>
  )
}

export default Checkout