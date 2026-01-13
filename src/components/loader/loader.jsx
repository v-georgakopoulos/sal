import { motion } from "framer-motion";
import salLogo from "../../assets/home-images/favicon-Sal.png";
import "./loader.scss";

const spinClockwise = {
    animate: {
        rotate: 360,
        transition: {
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
        },
    },
};

const spinCounterClockwise = {
    animate: {
        rotate: -360,
        transition: {
            repeat: Infinity,
            duration: 1.8,
            ease: "linear",
        },
    },
};

const Loader = () => {
    return (
        <div className="loader-container">
            {/* Outer ring */}
            <motion.div
                className="ring ring--outer"
                variants={spinCounterClockwise}
                animate="animate"
            />

            {/* Inner ring */}
            <motion.div
                className="ring ring--inner"
                variants={spinClockwise}
                animate="animate"
            />

            {/* Logo */}
            <img src={salLogo} alt="Sal logo" className="loader-logo" />
        </div>
    );
};

export default Loader;
