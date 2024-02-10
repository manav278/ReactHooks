import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Hooksa from './components/Hooksa';
import UseStateArray from './components/UseStateArray';
import Usestateobject from './components/Usestateobject';
import ShotCircuitEval from './components/ShotCircuitEval';
import Basicform from './components/forms/Basicform';
import Useeffecta from './components/useeffect/Useeffecta';

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


  return (
    <div className="App">

      {/* <h1>{name}</h1>
      <button onClick={nameChange}>Click here for 'App' Component</button>
      <hr></hr> */}

      {/* //-------------------------------- */}

      {/* <Hooksa></Hooksa>
      <hr></hr>  */}

      {/* --------------------------------- */}

      {/* <UseStateArray></UseStateArray> */}

      {/* --------------------------------- */}

      {/* <Usestateobject></Usestateobject> */}

      {/* --------------------------------- */}

      {/* <ShotCircuitEval></ShotCircuitEval> */}

      {/* <Basicform></Basicform> */}

      {/* --------------------------------- */}

      <Useeffecta></Useeffecta>

    </div>
  );
}

export default App;
