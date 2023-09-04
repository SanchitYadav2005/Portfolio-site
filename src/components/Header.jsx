import "../styles/navbar.css";
import { motion } from "framer-motion";
import "font-awesome/css/font-awesome.min.css";

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav>
        <h1 className="name">Sanchit Yadav</h1>
        <ul className="list">
          <li className="list-item">
            <a className="list-item-link fa fa-instagram" id="instagram" href="#"></a>
          </li>
          <li className="list-item">
            <a className="list-item-link fa fa-linkedin" id="linkedin" href="#"></a>
          </li>
          <li className="list-item">
            <a className="list-item-link fa fa-twitter" id="twitter" href="#"></a>
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
  );
}

export default Header;
