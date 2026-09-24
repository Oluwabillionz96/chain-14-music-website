import ArtistSection from '../component/artist-section'
import PlayList from '../component/playlist-section'
import RecentlyPlayedSection from '../component/recently-played-section'
import AlbumSection from '../component/album-section'
import SongsSection from '../component/song'
import { useState, useEffect } from 'react'



const App = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://chain14-music-website-backend.vercel.app/artists');
      const artists= await res.json();
      console.log(artists);
      setArtists(artists.data);
    }

    fetchData();
  }, []);

 

  return (
    <>
      <ArtistSection artists={artists} />
    <PlayList />
    <AlbumSection />
      <RecentlyPlayedSection />
    <SongsSection />
      

    </>
  )
}



export default App