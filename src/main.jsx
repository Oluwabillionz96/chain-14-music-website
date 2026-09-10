import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter ,Routes , Route} from "react-router"
import AlbumSection from '../component/album-section.jsx'
import ArtistSection from '../component/artist-section.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
     
      <Route path="/album" element={<AlbumSection/>} />
      <Route path="/artist" element={<ArtistSection/>} />

<Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
