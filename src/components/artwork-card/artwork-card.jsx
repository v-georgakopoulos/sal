
import { Link } from "react-router-dom"
import "./artworks-card.scss"

const ArtworksCard = ({artwork}) => {

    return (
        <div className="artworks-card-container">
          <Link to={`/artworks/${artwork.slug}`} className="artwork-card">
          <div className="artwork-card-image">
            <img src={artwork.images[0]} alt={artwork.name} />
          </div>
          <div className="artwork-overlay">
            <p className="artwork-name">{artwork.name.toUpperCase()}</p>
          </div>
          </Link>
        </div>
    )
}

export default ArtworksCard