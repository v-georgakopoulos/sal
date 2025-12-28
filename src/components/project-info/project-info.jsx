import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS } from "../../data/projects-data";
import "./project-info.scss";

const ProjectInfo = () => {
  const { projectSlug } = useParams();
  const navigate = useNavigate();

  const currentProject = PROJECTS.find((p) => p.slug === projectSlug);

  if (!currentProject) return <p>Project not found</p>;

  const currentIndex = PROJECTS.findIndex((p) => p.slug === projectSlug);

  const nextProject = PROJECTS[currentIndex + 1];

  const { images, title, client, location, scope, description } =
    currentProject;
  const coverImage = images[1];
  const otherImages = images.slice(2);

  return (
    <div className="project-info-container">
      <div className="cover-image">
        <img src={coverImage} alt={`${title} cover`} />
      </div>

      <div className="info">
        <h3>{title}</h3>
        <div className="info-details">
          <p>
            Client <span>{client}</span>
          </p>
          <p>
            Location <span>{location}</span>
          </p>
          <p>
            Scope <span>{scope}</span>
          </p>
        </div>
        <div className="descriptions">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="other-images">
        {otherImages.map((img, index) => (
          <div key={index} className="other-image">
            <img src={img} alt={`${title} ${index + 1}`} />
          </div>
        ))}
      </div>

      {nextProject && (
        <div className="next-project">
          <button
            onClick={() => {
              navigate(`/${nextProject.slug}`);
            }}
          >
            Next Project →
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectInfo;
