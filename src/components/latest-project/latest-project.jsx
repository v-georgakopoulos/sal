import { Link } from "react-router-dom";
import { PROJECTS } from "../../data/projects-data";
import "./latest-project.scss";

const LatestProject = () => {
  const latestProject = [...PROJECTS].sort(
    (a, b) => b.createdAt - a.createdAt
  )[0];

  if (!latestProject) return null;

  const coverImage = latestProject.images[0];
  const subcategory = latestProject.subcategory[0];

  return (
    <div className="latest-project-container">
      <div className="grid-latest">
        <Link to={`/designs/${subcategory}/${latestProject.slug}`}>
          <div className="latest-image">
            <img src={coverImage} alt={latestProject.title} />
          </div>
        </Link>

        <div className="latest-project">
          <h1>New Arrival</h1>
        </div>
      </div>
    </div>
  );
};

export default LatestProject;
