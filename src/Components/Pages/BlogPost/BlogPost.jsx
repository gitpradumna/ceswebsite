import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample blog data - replace with actual data from backend
  const blogPosts = {
    1: {
      id: 1,
      title: 'Latest Advancements in Sustainable Construction',
      author: 'John Doe',
      date: 'December 5, 2025',
      image: '/path-to-image.jpg',
      category: 'Technology',
      content: `
        <p>The construction industry is undergoing a transformative shift towards sustainability, driven by the urgent need to address environmental concerns and reduce carbon footprints. This evolution encompasses innovative materials, energy-efficient designs, and eco-conscious construction practices.</p>
        
        <h2>Eco-Friendly Building Materials</h2>
        <p>Modern construction increasingly relies on sustainable materials such as bamboo, recycled steel, and cross-laminated timber (CLT). These materials not only minimize environmental impact but also offer comparable or superior structural properties to traditional materials.</p>
        
        <h2>Green Building Technologies</h2>
        <p>Smart building systems, solar integration, and rainwater harvesting are becoming standard features in sustainable construction. These technologies significantly reduce operational costs while promoting environmental stewardship.</p>
        
        <h2>The Future of Construction</h2>
        <p>As we move forward, the integration of AI and IoT in construction management promises even greater efficiency and sustainability. The future of civil engineering lies in our ability to balance innovation with environmental responsibility.</p>
      `
    },
    2: {
      id: 2,
      title: 'Workshop Recap: Structural Analysis with Modern Tools',
      author: 'Jane Smith',
      date: 'November 28, 2025',
      image: '/path-to-image.jpg',
      category: 'Events',
      content: `
        <p>Our recent workshop on structural analysis brought together students and professionals to explore cutting-edge software and methodologies transforming the field of structural engineering.</p>
        
        <h2>Workshop Highlights</h2>
        <p>Participants gained hands-on experience with industry-standard software including SAP2000, ETABS, and STAAD.Pro. The workshop covered everything from basic modeling to advanced dynamic analysis.</p>
        
        <h2>Key Takeaways</h2>
        <p>The session emphasized the importance of understanding both theoretical principles and practical software applications. Attendees learned to optimize structural designs while ensuring safety and compliance with building codes.</p>
        
        <h2>Looking Ahead</h2>
        <p>Based on overwhelming positive feedback, we're planning a follow-up workshop focused on finite element analysis and parametric design. Stay tuned for announcements!</p>
      `
    },
    3: {
      id: 3,
      title: 'Infrastructure Development: Challenges and Solutions',
      author: 'Mike Johnson',
      date: 'November 20, 2025',
      image: '/path-to-image.jpg',
      category: 'Research',
      content: `
        <p>Infrastructure development faces unprecedented challenges in the 21st century, from aging structures to rapid urbanization. Understanding these challenges is crucial for developing effective solutions.</p>
        
        <h2>Current Challenges</h2>
        <p>Many countries struggle with deteriorating infrastructure, funding constraints, and the need to adapt to climate change. These issues require innovative approaches and sustainable solutions.</p>
        
        <h2>Innovative Solutions</h2>
        <p>Modern engineering leverages advanced materials, predictive maintenance using AI, and modular construction techniques to address infrastructure challenges efficiently and cost-effectively.</p>
        
        <h2>Policy and Planning</h2>
        <p>Successful infrastructure development requires collaboration between engineers, policymakers, and communities. Integrated planning ensures projects meet current needs while remaining adaptable to future requirements.</p>
      `
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <div className="blog-post-not-found">
            <h1>Blog Post Not Found</h1>
            <button className="back-btn" onClick={() => navigate('/blog')}>← Back to Blog</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="blog-post-hero">
        <div className="container">
          <button className="back-btn" onClick={() => navigate('/blog')}>← Back to Blog</button>
          <span className="blog-post-category">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="blog-post-meta">
            <span className="blog-post-author">By {post.author}</span>
            <span className="blog-post-date">{post.date}</span>
          </div>
        </div>
      </div>

      <div className="container">
        <article className="blog-post-content">
          <div className="blog-post-image">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
