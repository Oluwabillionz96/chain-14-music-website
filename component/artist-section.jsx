import ArtistCard from "./artist-card"
import {artists} from "../utils"
import { NavLink } from "react-router"
 






const ArtistSection = ()=> {
  return <section>
  <h2>Artists</h2>
  <div className="artists">
 {artists.map((item)=>{
  return <ArtistCard key={item.id} artist={item.name} image={item.image}/>
 })}
  </div>
  <NavLink to="/artist" className="view-all">View All</NavLink>
  </section>
}

export default ArtistSection