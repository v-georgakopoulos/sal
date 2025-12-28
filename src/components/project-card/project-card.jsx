import { Link } from "react-router-dom";
import "./project-card.scss";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card-container">
      <Link to={`/${project.slug}`} className="project-card">
        <div className="project-card-image">
          <img src={project.images[0]} alt={project.name} />
        </div>
        <div className="overlay">
          <p className="project-name">{project.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
