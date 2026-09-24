// import {songs} from "../utils"
import {useState, useEffect} from "react"
export default function SongsSection(){
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://chain14-music-website-backend.vercel.app/songs');
      const songs = await res.json();
      // console.log(songs);
      setSongs(songs.data);
    }

    fetchData();
  }, []);

  return(
    <section>
    <h2>All Songs</h2> 
    <div class="all-songs">

      <div class="all-songs-header"> 
        <span>#</span> 
        <span>Title</span> 
        <span>Album</span> 
        <span>Duration</span> 
      </div>
    {songs.map((song)=> 
    <div className="all-song" key={song.id}> 
        <span>{song.id}</span> 
        <div className="track"> 
          <img src={song.image} /> 
          <div> 
            <h3>{song.title}</h3> 
            <p>{song.artist}</p> 
          </div> 
        </div> 
        <span className="album-name">{song.album}</span> 
        <span className="song-duration">{song.duration}</span> 
    </div>
      )}
    </div>
    <div>
    </div>
      
    </section>
  )
}