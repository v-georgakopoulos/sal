import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ARTWORKS } from "../../data/artworks-data";

import "./artwork-info.scss";

const ArtworkInfo = () => {
    const { artworkSlug } = useParams();

    const currentArtwork = ARTWORKS.find(
        (art) => art.slug === artworkSlug
    );

    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (currentArtwork?.images?.length > 1) {
            setSelectedImage(currentArtwork.images[1]);
        }
    }, [currentArtwork]);



    if (!currentArtwork) {
        return <Navigate to="/404" replace />;
    }

    const {
        title,
        artist,
        series,
        technique,
        year,
        dimensions,
        country,
        edition,
        signed,
        certificate,
        status,
        images,
        description,
    } = currentArtwork;

    const galleryImages = images.slice(1);

    return (
        <div className="artworks-info-container">
            <div className="artworks-large-image-container">
                <img src={selectedImage} alt={title} />
            </div>

            <div className="artworks-info">
                <div className="artworks-info-header">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <div className="artworks-info-details">
                    <h3>Details</h3>
                    <p>Artist <span>{artist}</span></p>
                    <p>Title of Artwork <span>{title}</span></p>
                    <p>Series <span>{series}</span></p>
                    <p>Technique <span>{technique}</span></p>
                    <p>Year <span>{year}</span></p>
                    <p>Dimensions <span>{dimensions}</span></p>
                    <p>Country of Origin <span>{country}</span></p>
                    <p>Edition <span>{edition}</span></p>
                    <p>Signed <span>{signed}</span></p>
                    <p>Certificate <span>{certificate}</span></p>
                    <p>Status <span>{status}</span></p>
                </div>

                <div className="artworks-small-images-container">
                    {galleryImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Artwork thumbnail ${index + 1}`}
                            onClick={() => setSelectedImage(img)}
                            className={`artwork-small-image ${selectedImage === img ? "active" : ""
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArtworkInfo;
