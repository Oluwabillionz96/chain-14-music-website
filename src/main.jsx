import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes,Route } from 'react-router'
import ArtistSection from '../component/artist-section.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="/contact" element={<h1>Contact Page</h1>} />
      <Route path="/artist" element={<ArtistSection/>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />

    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
