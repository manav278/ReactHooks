import React, { useState } from 'react'

const Hooksa = () => {
    const changeSt = () => {
        name === "Manav" ? setName("DDU IT") : setName("Manav")
    }
    // const [name, setName] = React.useState('Manav')
    const [name, setName] = useState('Manav')
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeSt} >Click Here for 'Hooksa' Component</button>
        </div>
    )
}

export default Hooksa
