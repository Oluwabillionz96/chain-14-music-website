import ArtistSection from "../component/artist-section";
import PlayList from "../component/playlist-section";
import RecentlyPlayedSection from "../component/recently-played-section";
import AlbumSection from "../component/album-section";
import SongsSection from "../component/song";

const App = () => {
  return (
    <>
      <ArtistSection />
      <PlayList />
      <AlbumSection />
      <RecentlyPlayedSection />
      <SongsSection />
    </>
  );
};

export default App;
