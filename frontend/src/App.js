import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TextGenerationPage from './pages/TextGenerationPage';
import ImageGenerationPage from './pages/ImageGenerationPage';
import VideoEditingPage from './pages/VideoEditingPage';
import SideNav from './components/SideNav'; // Import the SideNav component

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <SideNav />  {/* Add the SideNav here */}

        {/* Main content area */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/text-generation" element={<TextGenerationPage />} />
            <Route path="/image-generation" element={<ImageGenerationPage />} />
            <Route path="/video-editing" element={<VideoEditingPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;