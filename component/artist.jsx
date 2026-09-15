import { useParams } from "react-router";
import { artists } from "../utils";
import ArtistCard from "./artist-card";

export default function Artist() {
  let params = useParams();
  const artist = artists.find((item) => item.id == params.artistId);
  if (artist === undefined) {
    return <h1>Artist not found</h1>;
  }
    return <ArtistCard image={ artist.image} name={artist.name} />
}
