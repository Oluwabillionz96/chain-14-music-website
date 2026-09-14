import { useParams } from "react-router";
import { songs } from "../utils";

export default function Song() {
  let params = useParams();
    const song = songs.find((song) => song.id == params.id)
        if (!song) {
            return (
                <div>
                    <h1>song not found</h1>
                </div>
            )
        }
    
        return (
          <div>
            <h1>{song.title}</h1>
            <img src={song.image} alt="" />
          </div>
        );
  
}
