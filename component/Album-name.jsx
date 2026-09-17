import {useParams} from 'react-router'
import {albums} from "../utils"
import AlbumCard from "./album-card"


function AlbumName (){
    let params = useParams()
   const album = albums.find(item => item.id == params.id)
   console.log (album)
   if (album === undefined) {
    return (
        <div>
            <h1>Album not found</h1>
        </div>
    )
   }

    return (  <AlbumCard
              name={album.title}
              artist={album.artist}
              year={album.year}
              image={album.image}
            />
    )
        // <div>
        //     <AlbumCard album={album}  />
        //     {/* <h1> {album.title}</h1> */}
        // </div>
        
}

export default AlbumName