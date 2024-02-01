import React, { useState } from 'react'
import './css/Login.css' 

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className={"mainContainer"}>
            <div className={"titleContainer"}>
                <div>Login</div>
            </div>
            <br />
            <div className={"inputContainer"}>
                <input
                    placeholder="Enter your username here"
                    onChange={ev => setEmail(ev.target.value)}
                    className={"inputBox"} 
                    value={email}/>
            </div>
            <br />
            <div className={"inputContainer"}>
                <input
                    value={password}
                    placeholder="Enter your password here"
                    onChange={ev => setPassword(ev.target.value)}
                    className={"inputBox"} />
                <label className="errorLabel">{}</label>
            </div>
            <br />
            <div className={"inputContainer"}>
                <input
                    className={"inputButton"}
                    type="button"
                    // onClick={onButtonClick}
                    value={"Log in"} />
            </div>
        </div>
    )
}

export default Login
