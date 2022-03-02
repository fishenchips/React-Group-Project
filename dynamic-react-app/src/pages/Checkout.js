import React, {useState} from 'react';
import styled from "styled-components";
import CheckoutForm from '../components/CheckoutForm';
import EmptyCheckout from '../components/EmptyCheckout';
import {motion} from "framer-motion";
import { button, checkout } from '../animations'
import {Table, TableHeader, TableRow, Img, DeleteBtn, ClearBtn, AlterQtyBtn} from "../styledComponents"

function Checkout({cartItems, updateCartItem, deleteCartItem, clearCart}) {

    if (cartItems.length == 0) {
        return < EmptyCheckout /> 
    }
    else {
        return (
            <motion.div
                initial="start"
                animate="end"
                variants={checkout}
            >
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
                                            <AlterQtyBtn>+</AlterQtyBtn> 
                                            <AlterQtyBtn>-</AlterQtyBtn>
                                        </td>
                                        <td>amount</td>
                                        <td>Sum: </td>
                                        <td>
                                            <DeleteBtn 
                                                onClick={()=> deleteCartItem(product.id)}
                                                whileHover="hover"
                                                whileTap="press"
                                                variants={button}
                                            >
                                                Delete
                                            </DeleteBtn>
                                        </td>
                                    </TableRow>
                                ))
                            }
                        </tbody>
                    </Table>
                    <ClearBtn 
                        onClick={()=> clearCart()}
                        whileHover="hover"
                        whileTap="press"
                        variants={button}
                    >
                        Clear shopping cart
                    </ClearBtn>
                    <h3>Total cost:</h3>
                </section>
                <CheckoutForm />
            </motion.div>
        )
    }
}
export default Checkout