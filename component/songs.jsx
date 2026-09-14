import { useParams } from "react-router";

export default function Song() {
  let params = useParams();
    const song = song.find((song) => artist.id == params.id)
        if (!artist) {
            return (
                <div>
                    <h1>Artist not found</h1>
                </div>
            )
        }
    
        return (
          <div>
            <h1>{artist.name}</h1>
            <img src={artist.image} alt="" />
          </div>
        );

  console.log(params);
  return (
    <div>
      <h1> {params.id} </h1>
    </div>
  );
}
