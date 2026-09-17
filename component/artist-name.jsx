import {useParams} from 'react-router'
import {artists} from "../utils"
import ArtistCard from "./artist-card"
// function ArtistName (){
//     let params = useParams()
//     console.log (params)
//     return (
//         <div>
//             <h1> {params.id}</h1>
//         </div>
        
//     )
// }

// export default ArtistName

function ArtistName (){
    let params = useParams()
    const artist = artists.find(item => item.id == params.id)
    console.log(artist)
    if (artist === undefined) {
        return (
            <div>
                <h1>Artist not found</h1>
            </div>
        )
    }

    return (
        <ArtistCard
            artist={artist.name}
            image={artist.image}
        />
    )
}

export default ArtistName       
     