import React, { useState } from 'react'
import '../App.css'
export default function Usestateobject() {
    const [obj, setObj] = useState({
        id: 1,
        name: "Manav",
        College: "DDU",
        City: "Vadodara"
    })
    const onHandleClick = () => {
        setObj({ ...obj, name: "Samarth" })
    }
    return (
        <div>
            <h1>{obj.name},{obj.City}</h1>
            <button onClick={onHandleClick} className='btn-class'>Update</button>
        </div>
    )
}
