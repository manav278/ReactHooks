import React,{useEffect, useState} from 'react'

export default function Useeffecta() {
    const [count,setCount]=useState(0)
    useEffect( () => {
        document.title=`Chats(${count})`
    })
    console.log("Patel---Outside")
  return (
    <div>
      <h1>Useeffecta</h1>
      <button onClick={ () => setCount(count+1)}>Click Here</button>
    </div>
  )
}
