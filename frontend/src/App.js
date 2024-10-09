import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TextGenerationPage from './pages/TextGenerationPage';
import ImageGenerationPage from './pages/ImageGenerationPage';
import VideoEditingPage from './pages/VideoEditingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/text-generation" element={<TextGenerationPage />} />
        <Route path="/image-generation" element={<ImageGenerationPage />} />
        <Route path="/video-editing" element={<VideoEditingPage />} />
      </Routes>
    </Router>
  );
};

export default App;

