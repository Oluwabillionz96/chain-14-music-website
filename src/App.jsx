import ArtistSection from '../component/artist-section'
import Header from '../component/header'
import PlayList from '../component/playlist-section'
import RecentlyPlayedSection from '../component/recently-played-section'
import AlbumSection from '../component/album-section'
import SongsSection from '../component/song'


const App = () => {
  return (
    <main>
      <Header />
      <ArtistSection />
    <PlayList />
    <AlbumSection />
      <RecentlyPlayedSection />
    <SongsSection />
      

    </main>
  )
}



export default App