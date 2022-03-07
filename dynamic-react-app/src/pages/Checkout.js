import React, {useState} from 'react';
import styled from "styled-components";
import CheckoutForm from '../components/CheckoutForm';
import EmptyCheckout from '../components/EmptyCheckout';
import {motion} from "framer-motion";
import { button, checkout } from '../animations'
import {Table, TableHeader, TableRow, Img, DeleteBtn, ClearBtn, AlterQtyBtn} from "../styledComponents"

function Checkout({ cartItems, setCartItems, onRemove, deleteCartItem, clearCart }) {

         
    console.log("cartItems", cartItems)

    let checkoutSum = 0;

    //function to add only one when pressing + and then updating cartItems array
    const addOne = (item) => {
        const exists = cartItems.find( cartItem => cartItem.id === item.id)
        if(exists) {
            exists.qty += 1
            setCartItems([
              ...cartItems
            ])
        }
    }
    
    if (cartItems.length == 0) {
        return <EmptyCheckout /> 
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
                                <th>Add/Decrease</th>
                                <th>Quantity</th>
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
                                            <AlterQtyBtn onClick={ ()=> addOne(product) }> + </AlterQtyBtn> 
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
                        Clear shopping cart
                    </ClearBtn>
                    <h3>
                        Total cost: $ 
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