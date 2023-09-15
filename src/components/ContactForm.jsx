import useInoutHook from "../hooks/useInoutHook";
import "../styles/form.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from '@emailjs/browser';
emailjs.init("5HlDQigCi5AbtQK2H")

function ContactForm() {
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
  const [
    value1,
    value2,
    handleChange1,
    handleChange2,
    reset,
  ] = useInoutHook("");
  const tamplateParams = {
    from_name: value1,
    message: value2
  }
  function handleClick(){
    emailjs.send("service_0azzzag","template_bi5ug2k", tamplateParams)
        .then(function(respones){
          console.log("success", respones.status, respones.text)
        }, function(error){
          console.log(error);
        })
  }
  
  return (
    <>
     <motion.div
          ref={ref}
          variants={variants}
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="main"
        >
      <h4 className="contact_me">Contact me</h4>
      <form
        action=""
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          reset;
        }}
       
      >
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            name="name"
            id="name"
            value={value1}
            onChange={handleChange1}
            placeholder="enter your name here...."
          />
        </div>
        <div className="input-container">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="50"
            rows="4"
            value={value2}
            onChange={handleChange2}
            placeholder="Message ..."
          />
        </div>
        <button className="btn" onClick={handleClick} >Contact</button>
      </form>
      </motion.div>
    </>
  );
}

export default ContactForm;
