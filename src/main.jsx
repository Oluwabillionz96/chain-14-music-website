import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import RecentlyPlayedSection from '../component/recently-played-section'
import App from './App.jsx'
import ArtistSection from '../component/artist-section.jsx'
import SongsSection from '../component/song.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/recently-played" element={<RecentlyPlayedSection />} />
     <Route path="/songs" element={<SongsSection />}  />
    <Route path="*" element={<h1>404 Not Found</h1>} />
  </Routes>
  </BrowserRouter>
  </StrictMode>,
)
