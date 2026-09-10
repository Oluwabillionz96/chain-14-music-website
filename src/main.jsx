import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter ,Routes , Route} from "react-router";
import PlayList from '../component/playlist-section.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<App />} />
  <Route path="/about" element={<h1>About</h1>} />
  <Route path="/playlist" element={<PlayList/>} />
   <Route path="/*" element={<h1>404 Not Found</h1>} />
    </Routes>
  </BrowserRouter>,

  </StrictMode>,
)
