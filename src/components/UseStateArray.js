import React,{useState} from 'react'

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
    return (
        <div>
            {
                myArray.map((currElement) => {
                    return <h1 style={{ color: 'white', backgroundColor: 'black', width: '150px', border: '5px solid orange' }} key={currElement.id}>{currElement.name}<hr></hr>{currElement.College}</h1>
                })
            }
            <button onClick={handleClick}>Click Here to Clear All ToDos</button>

        </div>
    )
}