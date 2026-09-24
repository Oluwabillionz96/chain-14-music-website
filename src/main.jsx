import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import RecentlyPlayedSection from '../component/recently-played-section'
import App from './App.jsx'
import AlbumSection from '../component/album-section.jsx'
import SongsSection from '../component/song.jsx'
import PlayList from '../component/playlist-section.jsx'
import ArtistSection from '../component/artist-section.jsx'
import RootLayout from '../component/root-layout.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>
 <Routes>
  <Route  element={<RootLayout />} >
  <Route path="/" element={<App />} />
  <Route path="/playlist" element={<PlayList/>} />
    <Route path="/recently-played" element={<RecentlyPlayedSection />} />
          <Route path="/songs" element={<SongsSection />} />
          <Route path="/songs/:id" element={<SongsSection />} />
          <Route path="/artist" element={<ArtistSection/>} />
          <Route path="/album" element={<AlbumSection/>} />
   <Route path="*" element={<h1>404 Not Found</h1>} />
   </Route>
    </Routes>
  </BrowserRouter>

  </StrictMode>
)
