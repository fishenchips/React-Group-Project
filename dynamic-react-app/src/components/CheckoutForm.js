import React from 'react'

function CheckoutForm() {
  return (
    <form>
        <input placeholder='Firstname' name="firstname" type="text" />
        <input placeholder='Lastname' name="lastname" type="text" />
        <input placeholder='Email' name="email" type="email" />
        <input placeholder="Adress" name="adress" type="text" />
        <input placeholder="Zip code" name="zipcode" type="number" />
        <input placeholder="Town" name="town" type="text" />
        <input placeholder="Country" name="country" type="text" />
    </form>
  )
}

export default CheckoutForm