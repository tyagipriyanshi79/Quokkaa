import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const [data, setData] = useState({firstname: "", lastname: "", password: "", confirmpass: "", username: ""})

  const handleChange = (e)=>{

  }

  return (
    <div className="Auth">
      {/*left- side*/}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Quokkaa</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/*Right side*/}
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>{isSignUp ? "SignUp" : "Log In"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
              />
            </div>
          )}

          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Usernames"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="password"
              placeholder="Password"
            />
            {isSignUp && (
              <input
                type="text"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
              />
            )}
          </div>

          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => setIsSignUp((prev) => !prev)}
            >
              {isSignUp
                ? "Already have an account. Login!"
                : "Don't have an account? Sign Up!"}
            </span>
          </div>
          <button className="button infoButton" type="submit">
            {isSignUp ? "SignUp" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
