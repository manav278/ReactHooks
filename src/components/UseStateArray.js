import React, { useState } from 'react'
import '../App.css'
export default function UseStateArray() {

    var array = [
        {
            id: "1",
            name: "Admin1",
            College: "DDU"
        },
        {
            id: "2",
            name: "Admin2",
            College: "DDU"
        },
        {
            id: "3",
            name: "Admin3",
            College: "DDU"
        },
        {
            id: "4",
            name: "Admin4",
            College: "DDU"
        }
    ]

    const [myArray, setMyArray] = useState(array)
    const handleClick = () => {
        setMyArray([])
    }
    const handleInnerBtn = (id) => {
        const newArr = myArray.filter((currentElement) => {
            return id != currentElement.id
        })
        setMyArray(newArr)
    }
    return (
        <div>
            {
                myArray.map((currElement) => {
                    return <div className='div-class' key={currElement.id}>
                        <p>{currElement.name}</p>
                        <p>{currElement.College}</p>
                        <button onClick={() => { handleInnerBtn(currElement.id) }}>Remove</button>
                    </div>
                })
            }
            <button onClick={handleClick} className='btn-class'>Click Here to Clear All ToDos</button>

        </div>
    )
}
