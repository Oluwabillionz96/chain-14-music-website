import { albums } from "../utils";
import AlbumCard from "./album-card";
 import { NavLink } from "react-router";
export default function AlbumSection() {
  return (
    <section>
      <h2>Albums</h2>
      <div class="albums">
        {albums.map((item) => {
          return (
            <NavLink to={`/album/${item.id}`}>
              <AlbumCard
                key={item.id}
                name={item.title}
                artist={item.artist}
                year={item.year}
                image={item.image}
              />
            </NavLink>
          );
        })}
      </div>
    </section>
  );
}
