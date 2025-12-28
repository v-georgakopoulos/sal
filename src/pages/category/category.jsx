import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../../data/projects-data";
import ProjectCard from "../../components/project-card/project-card";

import "./category.scss"

const Category = () => {
  const { category } = useParams();

  const filteredProjects = PROJECTS.filter(project =>
    project.subcategory.includes(category)
  );

  return (
    <div className="category-container">
      {filteredProjects.map(project => (
        <Link
          key={project.slug}
          to={`/design/${category}`}
        >
          <ProjectCard project={project} />
        </Link>
      ))}
    </div>
  );
};

export default Category;
