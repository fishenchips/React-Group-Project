import React, {useState} from 'react';
import styled from "styled-components";
import CheckoutForm from '../components/CheckoutForm';
import EmptyCheckout from '../components/EmptyCheckout';
import {Table, TableHeader, TableRow, Img} from "../styledComponents"

function Checkout({cartItems, updateCartItem, deleteCartItem, clearCart}) {

    if (cartItems.length == 0) {
        return < EmptyCheckout /> 
    }
    else {
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
                                        <td>
                                            <button>+</button> 
                                            <button>-</button>
                                        </td>
                                        <td>amount</td>
                                        <td>Sum: </td>
                                        <td>
                                            <button onClick={()=> deleteCartItem(product.id)}>Delete</button>
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
}
export default Checkout