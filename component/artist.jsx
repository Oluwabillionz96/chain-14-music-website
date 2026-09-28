import { useParams } from "react-router"

import ArtistCard from "./artist-card";
import{useState, useEffect} from "react"    

export default function Artist() {
    const [artist, setArtist] = useState(null);
     let {id} = useParams();
    useEffect(() => {
        async function fetchData(){
            const res = await fetch('https://chain14-music-website-backend.vercel.app/artists/1')
            const data = await res.json();
            setArtist(data.data);
        }

        fetchData();
    }, [id]);

    // let {id} = useParams();
    if(!artist /*=== undefined*/) {
        return <h1>Artist not found</h1>
    }

    return (
<>
 <ArtistCard image={artist.image} name={artist.name} />
</>
    )
}