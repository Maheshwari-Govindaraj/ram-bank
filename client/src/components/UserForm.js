import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    address: '',
    occupation: '',
    passwordHash: ''
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', userData);
      alert('User created successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add input fields for all user data */}
      <input type="text" name="firstName" onChange={handleChange} placeholder="First Name" required />
      <input type="text" name="lastName" onChange={handleChange} placeholder="Last Name" required />
      <select name="gender" onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input type="date" name="dateOfBirth" onChange={handleChange} required />
      <input type="email" name="email" placeholder='EmailID' onChange={handleChange} required />
      <input type="text" name="phoneNumber" placeholder='PhoneNumber' onChange={handleChange} required />
      <input type="text" name="address" placeholder='Address' onChange={handleChange} required />
      <input type="text" name="occupation" placeholder='Occupation' onChange={handleChange} required />
      <input type="password" name="passwordHash" placeholder='Password' onChange={handleChange} required />
      <button type="submit">Create User</button>
    </form>
  );
};

export default UserForm;
