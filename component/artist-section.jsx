import ArtistCard from "./artist-card"
import {artists} from "../utils"
 






const ArtistSection = ()=> {
  return <section>
  <h2>Artists</h2>
  <div className="artists">
 {artists.map((item)=>{
  return <ArtistCard key={item.id} artist={item.name} image={item.image}/>
 })}
  </div>
  </section>
}

export default ArtistSection