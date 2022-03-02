import { motion } from 'framer-motion'
import React from 'react'
import { inputHover, button } from '../animations'
import {BuyBtn, Form, InputForm} from "../styledComponents"

function CheckoutForm() {
  return (
    <Form>
        <InputForm 
            whileHover="hover"
            variants={inputHover}
            placeholder='Firstname' name="firstname" type="text" 
        />
        <InputForm 
            whileHover="hover"
            variants={inputHover}
            placeholder='Lastname' name="lastname" type="text" 
        />
        <InputForm 
            whileHover="hover"
            variants={inputHover}
            placeholder='Email' name="email" type="email" 
        />
        <InputForm 
            whileHover="hover"
            variants={inputHover}
            placeholder="Adress" name="adress" type="text" 
        />
        <InputForm 
            whileHover="hover"
            variants={inputHover}
            placeholder="Zip code" name="zipcode" type="number" 
        />
        <InputForm 
            whileHover="hover"
            variants={inputHover}
            placeholder="Town" name="town" type="text" 
        />
        <InputForm 
            whileHover="hover"
            variants={inputHover}
            placeholder="Country" name="country" type="text" 
        />
        <br />
        <BuyBtn
            whileHover="hover"
            whileTap="press"
            variants={button}
        >
            Confirm purchase
        </BuyBtn>
    </Form>

    
  )
}

export default CheckoutForm