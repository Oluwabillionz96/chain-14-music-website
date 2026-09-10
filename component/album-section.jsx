import { albums } from "../utils";
import AlbumCard from "./album-card";
import ArtistSection from "./artist-section";
import { NavLink } from "react-router";

export default function AlbumSection() {
  return (
    <section>
      <h2>Albums</h2>
      <div class="albums">
        {albums.map((item) => {
          return (
            <AlbumCard
              key={item.id}
              name={item.title}
              artist={item.artist}
              year={item.year}
              image={item.image}
            />
          );
        })}
      </div>
      <NavLink to="/artist">view artists</NavLink>
    </section>
  );
}
