import useInoutHook from "../hooks/useInoutHook";
import "../styles/form.css";

function ContactForm() {
  const [
    value1,
    value2,
    value3,
    handleChange1,
    handleChange2,
    handleChange3,
    reset,
  ] = useInoutHook("");
  return (
    <>
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={value1}
            onChange={handleChange1}
          />
        </div>
        <div className="input-container">
          <label htmlFor="sub">Subject</label>
          <input
            type="text"
            name="sub"
            id="sub"
            value={value2}
            onChange={handleChange2}
          />
        </div>
        <div className="input-container">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={value3}
            onChange={handleChange3}
          />
        </div>
        <button>Contact</button>
      </form>
    </>
  );
}

export default ContactForm;
