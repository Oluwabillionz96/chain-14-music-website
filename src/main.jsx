import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import RecentlyPlayedSection from '../component/recently-played-section'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<h1>About Us</h1>} />
    <Route path="/recently-played" element={<RecentlyPlayedSection />} />
    <Route path="*" element={<h1>404 Not Found</h1>} />
  </Routes>
  </BrowserRouter>
  </StrictMode>,
)
