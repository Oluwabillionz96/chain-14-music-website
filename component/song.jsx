import {songs} from "../utils"
import {NavLink} from "react-router"
export default function SongsSection(){
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
      <NavLink to="/songs">View  All Songs</NavLink>
    </div>
      
    </section>
  )
}