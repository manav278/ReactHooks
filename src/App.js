import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Hooksa from './components/Hooksa';

function App() {
  // var val="Code with Manav"
  // -------------------------------
  // console.log(useState("Manav")[0])
  // const nameChange=()=>{
  //   val="Code with Patel"
  //   console.log(val);
  // }

  //--------------------------------

  const [name, setName] = useState("Manav")
  const nameChange = () => {
    // if(name=="Manav")
    // {
    //   setName("Manav Jayesh Patel")
    // }
    // else if(name=="Manav Jayesh Patel")
    // {
    //   setName("Manav")
    // }
    name === "Manav" ? setName("Manav Jayesh Patel") : setName("Manav")
  }

  //--------------------------------

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
    <div className="App">

      {/* <h1>{name}</h1>
      <button onClick={nameChange}>Click here for 'App' Component</button>
      <hr></hr>
      //--------------------------------
      <Hooksa></Hooksa>
      <hr></hr> 
      //--------------------------------
      */}

      {
        myArray.map((currElement) => {
          return <h1 style={{ color: 'white', backgroundColor: 'black', width: '150px', border: '5px solid orange' }} key={currElement.id}>{currElement.name}<hr></hr>{currElement.College}</h1>
        })
      }
      <button onClick={handleClick}>Click Here to Clear All ToDos</button>

    </div>
  );
}

export default App;
