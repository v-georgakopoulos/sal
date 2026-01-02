import { ARTWORKS } from "../../data/artworks-data";
import ArtworksCard from "../../components/artwork-card/artwork-card";

import "./artworks.scss"

const Artworks = () => {
  return (
    <div className="artworks-container">
      <div className="artworks-grid">
        {ARTWORKS.map((artwork) => (
          <ArtworksCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </div>
  );
};

export default Artworks;
