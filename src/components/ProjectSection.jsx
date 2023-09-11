import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ProjectSection() {
  const [ref, isVisible] = useInView({ threshold: 0.5 });
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  return (
    <>
      <div className="container">
        <motion.div
          ref={ref}
          variants={variants}
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2>display projects here</h2>
        </motion.div>
      </div>
    </>
  );
}

export default ProjectSection;
