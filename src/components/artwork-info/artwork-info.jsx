import { Navigate,  useParams } from "react-router-dom"
import { ARTWORKS } from "../../data/projects-data";

const ArtworkInfo = () => {

    const {artworkSlug} = useParams();
    const currentArtwork = ARTWORKS.find((art) => art.slug === artworkSlug)

    if(!currentArtwork) {
        return <Navigate to="/404" replace/>
    }

    return(
        <div className="artworks-info-container">

        </div>
    )
}

export default ArtworkInfo
