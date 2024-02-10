import React,{useEffect, useState} from 'react'

export default function Useeffecta() {
    const [count,setCount]=useState(0)

    useEffect( () => {
      if(count>=1)
      {
        document.title=`Chats(${count})`
      }
      else
      {
        document.title="Chats"
      }    
    } , [count] ) // -> It means when 'count' variable will change , these 'useEffect' will run. [Dependency List Array]

    useEffect( () => {
        console.log("Second useEffect")
    } , []) // -> It will run only when first time component is loaded.
    
    console.log("Manav Patel-Outside")

  return (
    <div>
      <h1>Useeffecta</h1>
      <h1>{count}</h1>
      <button onClick={ () => setCount(count+1)}>Click Here</button>
    </div>
  )
}
