import {useParams} from "react-router"
import {artists} from "../utils"

export default function Artist(){
    let params = useParams()
    console.log(params)
    const artist = artists.find((item) => item.id == params.id)
    if (artist === undefined) {
        return <h1>Artist not found</h1>
    }
    return(
      <ArtistCard image={artist.image} name={artist.name} />
    )
}