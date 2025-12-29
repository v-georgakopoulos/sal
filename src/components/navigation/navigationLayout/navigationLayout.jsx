import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "../navigation";
import ScrollToTop from "../../scrollToTop/scrollToTop";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  duration: 0.4,
  ease: "easeInOut",
};

const NavigationLayout = () => {
  const location = useLocation();

  return (
    <div className="layout">
      <Navigation />
      <ScrollToTop />

      <motion.main
        key={location.pathname}
        className="page-content"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
      >
        <Outlet />
      </motion.main>
    </div>
  );
};

export default NavigationLayout;
