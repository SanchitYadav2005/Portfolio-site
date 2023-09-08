import "../styles/header.css";
import { motion } from "framer-motion";
import "font-awesome/css/font-awesome.min.css";
import { useInView } from "react-intersection-observer";
import icon from '../assets/fiverr.png';
import photo from '../assets/img.jpg';

function Header() {
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
                  src={icon}
                  alt="fiver img"
                />
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>
      <div className="icon-container" style={{ height: "100vh" }}>
        <i className="fa fa-angle-double-down floating" id="icon"></i>
      </div>
      <div className="container" ref={ref} style={{ height: "100vh" }}>
        <motion.div
          ref={ref}
          variants={variants}
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginLeft: "50px" }}
        >
          <div className="intro">
            <img className="intro-img" src={photo} alt="sanchit yadav" />
            <p className="para">
              Hey everyone this is Sanchit Yadav a pssionate web developer who
              wants to create websites and softwares. Currently I am student of
              Btech computer science. I am developing webistes since 2021. I was
              introuced to computer in my childhood after that interaction I
              fell in love with it. I am a freelance Full stack web developer.
              Below you can see my tech self (I say it tech self because it's
              just like have your own set of specality ☺️ ).
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Header;
