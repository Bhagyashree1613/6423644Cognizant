// src/register.js
import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (formData.name.length < 5) {
      err.name = 'Name must be at least 5 characters';
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      err.email = 'Email must be valid';
    }
    if (formData.password.length < 8) {
      err.password = 'Password must be at least 8 characters';
    }
    return err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert('Registration Successful!');
      setFormData({ name: '', email: '', password: '' });
    }
  };

  return (
    <div style={{ margin: '40px', fontFamily: 'Arial' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '300px', padding: '8px' }}
          />
          <div style={{ color: 'red' }}>{errors.name}</div>
        </div>
        <br />
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '300px', padding: '8px' }}
          />
          <div style={{ color: 'red' }}>{errors.email}</div>
        </div>
        <br />
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '300px', padding: '8px' }}
          />
          <div style={{ color: 'red' }}>{errors.password}</div>
        </div>
        <br />
        <button
          type="submit"
          style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none' }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
