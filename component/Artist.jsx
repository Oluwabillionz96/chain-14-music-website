import { useParams } from "react-router"
import { songs } from "../utils"

export default function Artist() {
    let params = useParams()
    const song = songs.find((song) => song.id == params.id)
    if (!song) {
        return (
            <div>
                <h1>Artist not found</h1>
            </div>
        )
    }

    return (
      <div>
        <h1>{song.name}</h1>
        <img src={song.image} alt="" />
      </div>
    );
}