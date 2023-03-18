import React, { useState } from "react";
import "./login.css"
const Login = () =>{
     const [popupStyle, showPopup] = useState("hide")
     const popup = () =>{
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
     }
    return (
        <div className="covers">
            <h1>Login</h1>
            <input type="text  " placeholder="username" />
            <input type="password m-4" placeholder="password" />
            <div className="check">
            <input class="checkbox" type="checkbox" value="" id=""/><h3>onclick</h3></div>
             



            <div className="login-btn" onClick={popup}>Login</div>
            <p className="text">or Login Using</p>
            <div className="alt-login">
                <div className="facebook "> <i class="fa-brands fa-facebook "></i></div>
                <div className="google"><i class="fa-brands fa-google"></i></div>
   <div className="twitter" ><i class="fa-brands fa-twitter"></i></div> 
   <div className="linkdin" ><i class="fa-brands fa-linkedin"></i></div>   

            </div>
            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>user name and passward  incorrent</p>
            </div>
          

        </div>
    )
}
export default Login