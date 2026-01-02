import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SUBCATEGORIES } from "../../data/categories-data";

import "./designs.scss"

const Designs = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="designs-container">
      {SUBCATEGORIES.map(sub => (
        <div
          className="design-card-container"
          key={sub.id}
          onMouseEnter={() => setHovered(sub.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <Link to={`/design/${sub.path}`}>
            <img src={sub.categoryImage} alt={sub.name} />
            <div className="logo-container">
              <img src={sub.logo} alt={sub.name} />
            </div>
          </Link>
        </div>
      ))}
      <AnimatePresence mode="wait">
        {hovered && (
          <motion.div
            key={hovered} // important: tells Framer Motion a new element is entering
            className="full-width-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {SUBCATEGORIES.find(sub => sub.id === hovered)?.description}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Designs;
