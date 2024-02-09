import React, { useState } from 'react'

export default function Basicform() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [allEntry, setAllEntry] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        setAllEntry([...allEntry, { email: email, password: password }])
        console.log(allEntry)
    }
    return (
        <div>
            <h1>Basic form</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button type='submit'>Login</button>
            </form>
            <div>
                {
                    allEntry.map((x) => {
                        return (
                            <div key={x.email} className="div-class">
                                <h1>Email Entered : {x.email}</h1>
                                <h1>Password Entered : {x.password}</h1>
                            </div>)
                    })
                }
            </div>
        </div>
    )
}
