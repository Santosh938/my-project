import React, { useState } from 'react'
import './css/Admin.css'
import Headers from './Headers'

const Admin = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var showPasswordIcon = document.getElementById("showPasswordIcon");
    
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showPasswordIcon.src = "https://img.icons8.com/material-outlined/24/000000/invisible.png";
    } else {
      passwordInput.type = "password";
      showPasswordIcon.src = "https://img.icons8.com/material-outlined/24/000000/visible.png";
    }
  }

  return (
    <>
    <Headers />
    <div className='admin'>
      <div class="login-container">
        <h2>Login</h2>
        <form>
          <div class="input-container">
            <input type="text" id="username" placeholder="Username" value={user} onChange={(e) => setUser(e.target.value)} required />
          </div>
          <div class="input-container">
            <input type="password" id="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} required />
            <div class="show-password-container" onclick="togglePasswordVisibility()">
              <img src="https://img.icons8.com/material-outlined/24/000000/visible.png" alt="Show Password" id="showPasswordIcon" onClick={togglePasswordVisibility} />
            </div>
          </div>
          <button type="submit" class="button">Login</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Admin
