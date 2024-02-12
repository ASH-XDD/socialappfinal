
import React, { useState } from 'react';

function Login() {
  const [selectedType, setSelectedType] = useState(null); // Initially no login type is selected
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Perform login action based on selectedType, email, and password
    console.log('Login as:', selectedType, 'with email:', email, 'and password:', password);
    // Here, you would typically send the login credentials to a server for authentication
  };

  // Check if the user is already registered
  const isUserRegistered = false; // You can implement your logic to check if the user is registered

  return (
    <div>
      
      <label>
       Login type
        <select value={selectedType} onChange={handleLoginTypeChange}>
          <option value="">Select</option>
          <option value="user">User</option>
          {/* Render the 'admin' option only if the user is not registered */}
          {!isUserRegistered && <option value="admin">Admin</option>}
        </select>
      </label>
      {/* Render email and password fields only if a login type is selected */}
      {selectedType && (
        <form onSubmit={handleLoginSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Login;
