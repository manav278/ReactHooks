import React, { useState } from 'react'

export default function ShotCircuitEval() {
const [val,setVal]=useState("Patel")
  return (
    <div>
      <h1>{val || "Manav"}</h1>
      <h1>{val && "Manav"}</h1>
    </div>
  )
}
