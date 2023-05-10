import React, { useState } from "react";
import faviconYardSale from "../assets/logos/favicon_yard_sale.svg";
import "./LoginFrom.css";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { 
      userName: 'nombre',
      password: '123'
    }
    if(user.userName === email && user.password === password ){
      history.push("/topbar");
    }
    console.log({email,password})
  };


  return (
    <div className="container">
  <div className="form-container">
    <img src={faviconYardSale} alt="logo" />

    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="email" className="label">
        Email address
      </label>
      <input
        type="text"
        id="email"
        placeholder="nombre@example.com"
        className="input input-email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="password" className="label">
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="*********"
        className="input input-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <input
        type="submit"
        value="Log in"
        className="primary-button login-button"
      />

      <a href="/">Forgot my password</a>
    </form>

    <button className="secondary-button signup-button">Sign up</button>
  </div>
</div>
  );
}

export default LoginForm;
