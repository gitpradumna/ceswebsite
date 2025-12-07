import React, { useEffect, useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="blog-section">
      <h2 className="blog-title">Latest Blogs</h2>
      {loading ? <p>Loading...</p> : (
        <div className="blog-list">
          {blogs.map(blog => (
            <div className="blog-card" key={blog._id}>
              <h3>{blog.title}</h3>
              <p className="blog-author">By {blog.author}</p>
              <p className="blog-content">{blog.content}</p>
              <span className="blog-date">{new Date(blog.createdAt).toLocaleDateString()}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
