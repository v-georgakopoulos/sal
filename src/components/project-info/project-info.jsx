import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS } from "../../data/projects-data";
import "./project-info.scss";

const ProjectInfo = () => {
  const { projectSlug } = useParams();
  const navigate = useNavigate();

  // 1️⃣ Find current project
  const currentProject = PROJECTS.find((p) => p.slug === projectSlug);

  if (!currentProject) return <p>Project not found</p>;

  // 2️⃣ Find index
  const currentIndex = PROJECTS.findIndex((p) => p.slug === projectSlug);

  // 3️⃣ Get next project
  const nextProject = PROJECTS[currentIndex + 1];

  const { images, title, description } = currentProject;
  const [coverImage, ...otherImages] = images;

  return (
    <div className="project-info-container">
      <div className="cover-image">
        {coverImage && <img src={coverImage} alt={`${title} cover`} />}
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
            <img src={img} alt={`${title} ${index + 1}`} />
          </div>
        ))}
      </div>

      {nextProject && (
        <div className="next-project">
          <button
            onClick={() => {
              navigate(`/${nextProject.slug}`);
              window.scrollTo({ top: 0, behavior: "smooth" });
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
