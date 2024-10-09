import React, { useState } from 'react';
import axios from 'axios';

const UserProfileForm = () => {
  const [profileData, setProfileData] = useState({
    userId: '',
    profilePicture: '',
    preferences: {},
    activityLogs: []
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/userProfiles', profileData);
      alert('User Profile created successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add input fields for profile data */}
      <input type="text" name="userId" onChange={handleChange} placeholder="User ID" required />
      <input type="text" name="profilePicture" onChange={handleChange} placeholder="Profile Picture URL" />
      {/* Add additional fields as necessary */}
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default UserProfileForm;
