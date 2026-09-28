import ArtistSection from '../component/artist-section'
import PlayList from '../component/playlist-section'
import RecentlyPlayedSection from '../component/recently-played-section'
import AlbumSection from '../component/album-section'
import SongsSection from '../component/song'
import { useState, useEffect } from 'react'



const App = () => {
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await Promise.all([
        fetch('https://chain14-music-website-backend.vercel.app/artists'),
        fetch('https://chain14-music-website-backend.vercel.app/songs'),
        fetch('https://chain14-music-website-backend.vercel.app/songs/recentlyPlayed'),
        fetch('https://chain14-music-website-backend.vercel.app/albums'),
        fetch('https://chain14-music-website-backend.vercel.app/playlists'),
  
      ]);
      const data = await Promise.all([res[0].json(), res[1].json(), res[2].json(), res[3].json(), res[4].json()]);

      setArtists(data[0].data);
      setSongs(data[1].data);
      setRecentlyPlayed(data[2].data);
      setAlbums(data[3].data);
      setPlaylists(data[4].data);
    }

    fetchData();

  }, []);


  return (
    <>
      <ArtistSection artists={artists} />
      <PlayList playlists={playlists} />
      <AlbumSection albums={albums} />
      <RecentlyPlayedSection recentlyPlayed={recentlyPlayed} />
      <SongsSection songs={songs} />
    </>
  )
}



export default App