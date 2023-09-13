import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import '../styles/projects.css'

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
      <div className="project">
        <motion.div
          ref={ref}
          variants={variants}
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2>Personal projects</h2>
          <div className="project-container">
            <div className="card">
              <video className="project-video" loop autoPlay muted>
                <source src="/src/assets/unplash.mp4" type="video/mp4"/>
              </video>
              <p className="card-info">
                It is an simple unplash clone that fetches data using unplash api and display it to the screen you can download the images from it. It uses react and material ui.
              </p>
            </div>
          </div>
          <h4>More comming soon......</h4>
        </motion.div>
      </div>
    </>
  );
}

export default ProjectSection;
