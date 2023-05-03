import React, { useState } from 'react';
import faviconYardSale from '../assets/logos/favicon_yard_sale.svg'

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="form-container" >
      <img src={faviconYardSale} alt="logo"  />

      <form class="form" onSubmit={handleSubmit}>
        <label htmlFor="email" class="label">Email address</label>
        <input 
          type="text" 
          id="email" 
          placeholder="platzi@example.com" 
          class="input input-email" 
          value={email} 
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password" class="label">Password</label>
        <input 
          type="password" 
          id="password" 
          placeholder="*********" 
          class="input input-password" 
          value={password} 
          onChange={(event) => setPassword(event.target.value)}
        />

        <input type="submit" value="Log in" class="primary-button login-button" />
        
        <a href="/">Forgot my password</a>
      </form>
      

      <button class="secondary-button signup-button">Sign up</button>
    </div>
  );
}

export default LoginForm;
