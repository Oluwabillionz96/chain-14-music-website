import ArtistSection from '../component/artist-section'
import PlayList from '../component/playlist-section'
import RecentlyPlayedSection from '../component/recently-played-section'
// impor
import AlbumSection from '../component/album-section'
import SongsSection from '../component/song'


const App = () => {
  return (
    <main>
      <ArtistSection />
    <PlayList />
    <AlbumSection />
      <RecentlyPlayedSection />
    <SongsSection />
      

    </main>
  )
}



export default App