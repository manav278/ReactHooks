import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";

function App() {
  // var val="Code with Manav"
  // -------------------------------
  // console.log(useState("Manav")[0])
  // const nameChange=()=>{
  //   val="Code with Patel"
  //   console.log(val);
  // }
  // -------------------------------

    const [name,setName]=useState("Manav")
    const nameChange=()=>{
      // if(name=="Manav")
      // {
      //   setName("Manav Jayesh Patel")
      // }
      // else if(name=="Manav Jayesh Patel")
      // {
      //   setName("Manav")
      // }
      name=="Manav" ? setName("Manav Jayesh Patel") : setName("Manav")
    }
    return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={nameChange}>Click me Plzz</button>
    </div>
  );
}

export default App;