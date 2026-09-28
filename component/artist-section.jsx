import { NavLink } from "react-router";
import ArtistCard from "./artist-card";

const ArtistSection = ({artists=[]}) => {
  return (
    <section>
      <h2>Artists</h2>
      <div className="artists">
        {artists.map((item) => {
          return (
          <NavLink to={`/artist/${item.id}`}>
            <ArtistCard key={item.id} artist={item.name} image={item.image} />
          </NavLink> 
          );
        })}
      </div>
    </section>
  );
};

export default ArtistSection;
