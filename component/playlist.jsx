import {useParams} from "react-router"
import {playlists} from "../utils"

export default function Playlist() {
    let params = useParams()
    const playlist = playlists.find((item) => item.id == params.id)
    if (playlist === undefined) {
        return <h1>Playlist not found</h1>
    }
    return (
    <div className="playlist">
              <h3>{playlist.name}</h3>
              <p>{playlist.songCount}</p>
            </div>    
    )
}