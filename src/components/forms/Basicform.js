import React, { useState } from 'react'

export default function Basicform() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <h1>Basic form</h1>
            <form action="">
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='email' onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
