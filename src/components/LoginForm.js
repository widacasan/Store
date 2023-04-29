import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="form-container">
      <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="label">Email address</label>
        <input 
          type="text" 
          id="email" 
          placeholder="platzi@example.com" 
          className="input input-email" 
          value={email} 
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password" className="label">Password</label>
        <input 
          type="password" 
          id="password" 
          placeholder="*********" 
          className="input input-password" 
          value={password} 
          onChange={(event) => setPassword(event.target.value)}
        />

        <input type="submit" value="Log in" className="primary-button login-button" />
        
        <a href="/">Forgot my password</a>
      </form>
      

      <button className="secondary-button signup-button">Sign up</button>
    </div>
  );
}

export default LoginForm;
