import { motion } from "framer-motion";
import salLogo from "../../assets/home-images/favicon-Sal.png";
import "./loader.scss";

const loaderVariants = {
    initial: {
        scale: 0.9,
        opacity: 0.6,
    },
    animate: {
        scale: [0.9, 1.05, 0.9],
        opacity: [0.6, 1, 0.6],
        transition: {
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
        },
    },
};

const Loader = () => {
    return (
        <motion.div
            className="loader-container"
            variants={loaderVariants}
            initial="initial"
            animate="animate"
        >
            <img src={salLogo} alt="sal" />
        </motion.div>
    );
};

export default Loader;
