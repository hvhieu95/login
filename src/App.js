import React, { useState } from "react";
import "./style/index.css";
import Logo from "./image/Logo.png";
import Cellular from "./image/Cellular.png";
import Wifi from "./image/Wi-Fi.png";
import Battery from "./image/Battery.png";
import Hide from "./image/hide.png";
import Rectangle from "./image/Rectangle.png";
import { Clock } from "./clock";


function App() {
  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    return (
      <div className="container">
        <div className="login">
          <img src={Logo} alt="logo" className="logo" />
          <div className="statusBar">
            <div className="controls">
              <img src={Cellular} alt="cellular" className="cellular" />
              <img src={Wifi} alt="wifi" className="wifi" />
              <img src={Battery} alt="battery" className="battery" />
            </div>
       <Clock />
          </div>
          <span className="text02">
            <span>Welcome 🎉</span>
          </span>
          <div className="frame1">
            <div className="frame11">
              <span className="text04">
                <span>Email</span>
              </span>
            </div>
            <div className="input">
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text06"
              />
            </div>
          </div>

          <div className="frame2">
            <div className="frame12">
              <span className="text08">
                <span>Password</span>
              </span>
            </div>
            <div className="input1">
              <input
                className="text10"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={Hide}
                alt="hide"
                className="hide"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <img src={Rectangle} alt="rectangle" className="rectangle" />
          <button className="button">
            <span className="text12">
              <span>Login</span>
            </span>
          </button>
          <div className="frame21">
            <div className="group1">
              <span className="text14">
                <span>Remember me</span>
              </span>
              <input
                className=" checkbox"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
            </div>
            <span className="text16">
              <span>Forgot password</span>
            </span>
          </div>
          <div className="frame22">
            <span className="text18">
              <span>Don’t have an account?</span>
            </span>

            <span className="text20">
              <span>Sign up</span>
            </span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {" "}
      <Login />
    </div>
  );
}

export default App;
