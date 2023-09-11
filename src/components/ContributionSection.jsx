import GitHubCalendar from "react-github-calendar";
import "../styles/github.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ContributionSection() {
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
    <motion.div
     ref={ref}
     variants={variants}
     animate={isVisible ? "visible" : "hidden"}
     transition={{ duration: 0.5, ease: "easeOut" }}>
      <div className="container">
        <h3>My Activity</h3>
        <GitHubCalendar username="SanchitYadav2005" colorScheme="light" />
      </div>
      </motion.div>
    </>
  );
}

export default ContributionSection;
