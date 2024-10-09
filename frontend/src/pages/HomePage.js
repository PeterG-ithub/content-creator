import React from 'react';
import './HomePage.css'; // Add CSS file for styles if needed

// Functional component for the Home page layout
const HomePage = () => {
  return (
    <div className="home-page">
      {/* Header */}
      <header className="home-header">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/text-generation">Text Generation</a></li>
            <li><a href="/image-generation">Image Generation</a></li>
            <li><a href="/video-editing">Video Editing</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Content Creator App</h1>
        <p>Automate your YouTube Shorts, TikTok videos, and content creation with AI-generated stories, images, and videos.</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* Main Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <h2>Text Generation</h2>
          <p>Create engaging scripts with AI-based text generation.</p>
          <button onClick={() => window.location.href='/text-generation'}>Go to Text Generation</button>
        </div>
        <div className="feature-card">
          <h2>Image Generation</h2>
          <p>Generate custom images with AI to match your content.</p>
          <button onClick={() => window.location.href='/image-generation'}>Go to Image Generation</button>
        </div>
        <div className="feature-card">
          <h2>Video Editing</h2>
          <p>Edit and finalize your videos seamlessly within the app.</p>
          <button onClick={() => window.location.href='/video-editing'}>Go to Video Editing</button>
        </div>
      </section>

      {/* Recent Activity (Optional) */}
      <section className="recent-activity">
        <h3>Recent Projects</h3>
        <ul>
          <li>Project 1 - Video Editing</li>
          <li>Project 2 - Text Generation</li>
          <li>Project 3 - Image Creation</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>&copy; 2024 Content Creator App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
