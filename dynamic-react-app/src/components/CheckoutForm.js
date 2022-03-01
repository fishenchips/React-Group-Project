import { motion } from 'framer-motion'
import React from 'react'
import {Form, InputForm} from "../styledComponents"

function CheckoutForm() {
  return (
    <Form>
        <InputForm 
           as={motion.input}
            whileHover={{ scale:1.2}}
            transition={{type: "spring", stiffness: 400}}
            placeholder='Firstname' name="firstname" type="text" 
        />
        <InputForm 
            as={motion.input}
            whileHover={{ scale:1.2}}
            transition={{type: "spring", stiffness: 300}}
            placeholder='Lastname' name="lastname" type="text" 
        />
        <InputForm 
            as={motion.input}
            whileHover={{ scale:1.2}}
            transition={{type: "spring", stiffness: 300}}
            placeholder='Email' name="email" type="email" 
        />
        <InputForm 
            as={motion.input}
            whileHover={{ scale:1.2}}
            transition={{type: "spring", stiffness: 300}}
            placeholder="Adress" name="adress" type="text" 
        />
        <InputForm 
            as={motion.input}
            whileHover={{ 
                scale:1.2,
                textShadow: "0px 0px 80px rbg(47, 79, 79)",
                boxShadow: "0px 0px 80px rbg(47, 79, 79)"
            }}
            transition={{type: "spring", stiffness: 300}}
            placeholder="Zip code" name="zipcode" type="number" 
        />
        <InputForm 
            as={motion.input}
            whileHover={{ scale:1.2}}
            transition={{type: "spring", stiffness: 300}}
            placeholder="Town" name="town" type="text" 
        />
        <InputForm 
            as={motion.input}
            whileHover={{ scale:1.2}}
            transition={{type: "spring", stiffness: 300}}
            placeholder="Country" name="country" type="text" 
        />
        <br />
        <button>Confirm purchase</button>
    </Form>

    
  )
}

export default CheckoutForm