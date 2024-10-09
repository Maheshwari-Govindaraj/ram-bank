import React, { useState } from 'react';
import axios from 'axios';

const BlogPostForm = () => {
  const [postData, setPostData] = useState({
    userId: '',
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/blogPosts', postData);
      alert('Blog Post created successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add input fields for blog post data */}
      <input type="text" name="userId" onChange={handleChange} placeholder="User ID" required />
      <input type="text" name="title" onChange={handleChange} placeholder="Blog Title" required />
      <textarea name="content" onChange={handleChange} placeholder="Content" required></textarea>
      <button type="submit">Create Blog Post</button>
    </form>
  );
};

export default BlogPostForm;
