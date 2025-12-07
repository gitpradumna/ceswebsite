
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const navigate = useNavigate();
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
    <div className="blog-page">
      <div className="blog-hero">
        <h1>Blog</h1>
        <p>Insights, updates, and stories from the Civil Engineering Society</p>
      </div>

      <div className="container">
        <div className="blog-grid">
          {loading ? <p>Loading...</p> : blogs.length === 0 ? (
            <p>No blogs found.</p>
          ) : (
            blogs.map(post => (
              <article key={post._id} className="blog-card">
                <div className="blog-image">
                  {/* Optional: Add image field to blog schema for future */}
                  <span className="blog-category">Blog</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-author">{post.author}</span>
                    <span className="blog-date">{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.content.length > 120 ? post.content.slice(0,120) + '...' : post.content}</p>
                  {/* Future: <button className="read-more-btn" onClick={() => navigate(`/blog/${post._id}`)}>Read More →</button> */}
                </div>
              </article>
            ))
          )}
        </div>

        <div className="blog-sidebar">
          <div className="sidebar-section">
            <h3>Recent Posts</h3>
            <ul className="recent-posts">
              {blogs.slice(0,3).map(post => (
                <li key={post._id}>{post.title}</li>
              ))}
            </ul>
          </div>
          <div className="sidebar-section">
            <h3>Categories</h3>
            <ul className="categories">
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
