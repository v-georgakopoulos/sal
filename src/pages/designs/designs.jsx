import { Link } from "react-router-dom";
import { SUBCATEGORIES } from "../../data/categories-data";

import "./designs.scss"

const Designs = () => {
  return (
    <div className="designs-container">
      {SUBCATEGORIES.map(sub => (
        <Link key={sub.id} to={`/design/${sub.path}`}>
          <img src={sub.image} alt={sub.name} />
        </Link>
      ))}
    </div>
  );
};

export default Designs;
