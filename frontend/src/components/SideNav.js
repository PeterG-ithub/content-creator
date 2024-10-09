import React, { useState } from 'react';
import './SideNav.css';
import { Link } from 'react-router-dom';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`side-nav ${isOpen ? 'open' : ''}`}>
      {/* Toggle Button */}
      <button className="side-nav-toggle" onClick={toggleSideNav}>
        {isOpen ? '<' : '>'}
      </button>

      {/* Side Nav Links */}
      <nav className="side-nav-links">
        <Link to="/text-generation">Text Generation</Link>
        <Link to="/image-generation">Image Generation</Link>
        <Link to="/video-editing">Video Editing</Link>
      </nav>
    </div>
  );
};

export default SideNav;
