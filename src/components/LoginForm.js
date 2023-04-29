import React from "react";
import TextInput from "./TextInput";


const LoginForm = () => {
  return (
    <div className="from-container">
      <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

      <h1 className="title">Create a new password</h1>
      <p className="subtitle">Enter a new password for your account</p>

      <form action="/" className="from">
        <TextInput label="password" placeholder="********" type="password" />
        <TextInput label="new-password" placeholder="********" type="password" />

        <input type="submit" value="Confirm" className="primary-button login-button" />
      </form>
    </div>
  );
};

export default LoginForm;
