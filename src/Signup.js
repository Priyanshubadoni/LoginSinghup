import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
  const initialFormData = { username: '', email: '', password: '' };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://6570054809586eff66409716.mockapi.io/UserData', formData)
      .then(response => {
        console.log('User data posted successfully:', response.data);
        setFormData(initialFormData);
      })
  };

  return (
    <div className="container">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default SignupForm;
