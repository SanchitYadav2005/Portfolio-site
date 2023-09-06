import "../styles/header.css";
import { motion } from "framer-motion";
import "font-awesome/css/font-awesome.min.css";
import { useInView } from "react-intersection-observer";

function Header() {
  const [ref, isVisible] = useInView({ threshold: 0.7 });
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
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <nav>
          <h1 className="name">Sanchit Yadav</h1>
          <ul className="list">
            <li className="list-item">
              <a
                className="list-item-link fa fa-instagram"
                id="instagram"
                href="#"
              ></a>
            </li>
            <li className="list-item">
              <a
                className="list-item-link fa fa-linkedin"
                id="linkedin"
                href="#"
              ></a>
            </li>
            <li className="list-item">
              <a
                className="list-item-link fa fa-twitter"
                id="twitter"
                href="#"
              ></a>
            </li>
            <li className="list-item">
              <a className="list-item-link" href="#">
                <img
                  className="list-item-link-img"
                  src="src\assets\fiverr.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>
      <div style={{ height: "100vh" }}>
        <h1>Scroll down to next section 👇</h1>
      </div>
      <div ref={ref} style={{ height: "100vh", backgroundColor: "#23cebd" }}>
      <motion.div
          ref={ref}
          variants={variants}
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginLeft: "50px" }}
        >
        <div style={{ marginLeft: "50px" }}>
          <h1>Hey I'm on the screen</h1>
          <img
            style={{ borderRadius: "30px" }}
            alt="ralph from the simpsons waving his hand"
            src="https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
        </motion.div>
      </div>
    </>
  );
}

export default Header;
