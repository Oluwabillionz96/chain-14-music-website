import { NavLink } from "react-router"
import {recentlyPlayed} from "../utils"
import SongCard from "./songs-card"
export default function RecentlyPlayedSection(){
    return(
          <section>
        <h2>Recently Played</h2>
        <SongCard number={100}/>
        {recentlyPlayed.map((song)=>{
        return (
            <NavLink to={`/songs/${song.id}`} key={song.id}>
        <SongCard key={song.id}  number={song.id} img={song.img} title={song.title} artist={song.artist} />
        </NavLink>
        )
        })}
    </section>
    ) 
    
    
    
    
    
}