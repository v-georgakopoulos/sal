import { Link } from "react-router-dom";
import "./project-card.scss";

const ProjectCard = ({ project }) => {
 
  return (
    <Link
      to={`/${project.slug}`}
      className="project-card-container"
    >
      <div className="img-project-container">
        <img src={project.images[0]} alt={project.name} />
      </div>
      <p>{project.name}</p>
    </Link>
  );
};

export default ProjectCard;
