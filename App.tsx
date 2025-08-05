import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UrlShortenerPage from './pages/UrlShortenerPage';
import UrlStatisticsPage from './pages/UrlStatisticsPage';
import { Box } from '@mui/material';


function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<UrlShortenerPage />} />
        <Route path="/statistics" element={<UrlStatisticsPage />} />
      </Routes>
    </Box>
  );
}

export default App;
