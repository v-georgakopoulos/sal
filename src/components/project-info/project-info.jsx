import { useParams } from "react-router-dom";
import { PROJECTS } from "../../data/projects-data";

import "./project-info.scss";

const ProjectInfo = () => {
  const { projectSlug } = useParams();

  const project = PROJECTS.find((p) => p.slug === projectSlug);
  const { images, title, description } = project;
  const [coverImage, ...otherImages] = images;

  return (
    <div className="project-info-container">
      <div className="cover-image">
        {coverImage && (
          <img
            src={coverImage}
            alt={project.title + " cover"}
            className="cover-image"
          />
        )}
      </div>
      <div className="info">
        <h3>{title}</h3>
        <div className="descriptions">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="other-images">
        {otherImages.map((img, index) => (
          <div key={index} className="other-image">
            <img src={img} alt={img.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectInfo;
