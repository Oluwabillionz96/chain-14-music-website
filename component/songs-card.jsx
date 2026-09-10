export default function SongCard({number, img, title, artist}){
  return (
    <div className="song"> 
    <span className="song-number">{number}</span>
     <img src={img} /> 
     <div class="song-info"> 
     <h3>{title}</h3> 
     <p>{artist}</p> 
     </div>
     </div>
  )
}
