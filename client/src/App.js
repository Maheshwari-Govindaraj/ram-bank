import React from 'react';
import UserForm from './components/UserForm';
import UserProfileForm from './components/UserProfileForm';
import BlogPostForm from './components/BlogPostForm';

function App() {
  return (
    <div>
      <h1>RAM-BANK Application</h1>
      <h2>Create User</h2>
      <UserForm />
      <h2>Create User Profile</h2>
      <UserProfileForm />
      <h2>Create Blog Post</h2>
      <BlogPostForm />
    </div>
  );
}

export default App;
