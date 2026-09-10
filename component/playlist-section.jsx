import {playlists} from "../utils"

const PlayList = ()=> {
  return <section>
  <h2> PlayList  </h2>
  <div className="playlists">
  {playlists.map((playlist)=>{
    return <div key={playlist.id} className="playlist"><h3>{playlist.name} 
    </h3>
    <p>{playlist.songCount}</p>
   
    </div>
  })}
  </div>
  </section>
}

export default PlayList