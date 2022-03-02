import React, {useEffect, useState } from 'react';

function Clock() {
    //useState should be equal to new Date() function
    const [date, setDate] = useState(new Date())
/*     console.log(Date())
 */

    //useEffect is both componentDidUpdate and componentDidMount
    useEffect( () => {
        //set timer for update every second
        let timerId = setInterval(
            tick,
            1000
        )

        //return statement is for componentDidUnmount
        return () => {
            clearInterval(timerId)
        }
    })
    
    //function to make tick set a new date
    const tick = () => {
        setDate(new Date())
    }

  return (
        <div>{ date.toLocaleTimeString() }</div>
    )
}

export default Clock