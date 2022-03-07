import React, {useState} from 'react';
import styled from "styled-components";
import CheckoutForm from '../components/CheckoutForm';
import EmptyCheckout from '../components/EmptyCheckout';
import {motion} from "framer-motion";
import { button, checkout } from '../animations'
import {Table, TableHeader, TableRow, Img, DeleteBtn, ClearBtn, AlterQtyBtn} from "../styledComponents"

function Checkout({cartItems, onAdd, onRemove, deleteCartItem, clearCart}) {

         
    console.log("cartItems", cartItems)

    let checkoutSum = 0;

    console.log(checkoutSum, "summan")

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
                            <TableRow>
                                <th>Image</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Increase/Decrease</th>
                                <th>Sum</th>
                                <th>Remove</th>
                            </TableRow>
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
                                        <td>${product.price}</td>
                                        <td>
                                            <AlterQtyBtn onClick={ ()=> onAdd(product) }> + </AlterQtyBtn> 
                                            <AlterQtyBtn onClick={ ()=> onRemove(product) }> - </AlterQtyBtn>
                                        </td>
                                        {console.log("from checkoutt", product.qty)}
                                        <td>
                                            {product.qty} 
                                        </td>
                                        <td>
                                            ${(product.qty) * (product.price)}
                                        </td>
                                        <td>
                                            <DeleteBtn 
                                                onClick={()=> deleteCartItem(product.id) }
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
                        Clear shopping cartt
                    </ClearBtn>
                    <h3>
                        Total cost: 
                        {cartItems.map( (product) => (
                            checkoutSum += parseFloat((product.qty) * (product.price))
                        ))}
                    </h3>
                </section>
                <CheckoutForm />
            </motion.div>
        )
    }
}
export default Checkout