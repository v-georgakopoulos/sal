import { useParams } from "react-router-dom";
import { PROJECTS } from "../../data/projects-data";
import ProjectCard from "../../components/project-card/project-card";

import "./category.scss"

const Category = () => {
  const { subcategory } = useParams();

  const filteredProjects = PROJECTS.filter(project =>
    project.subcategory.includes(subcategory)
  );
  return (
    <div className="category-container">
      <div className="grid-category">
        {filteredProjects.map(project =>
          <ProjectCard key={project.id} project={project} subcategory={subcategory} />)}
      </div>
    </div>
  );
};

export default Category;
