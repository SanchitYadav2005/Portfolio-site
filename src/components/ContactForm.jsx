import useInoutHook from "../hooks/useInoutHook";
import "../styles/form.css";

function ContactForm() {
  const [value, handleChange, reset] = useInoutHook("");
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
            value={value}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="sub">Subject</label>
          <input type="text" name="sub" id="sub" value={value} onChange={handleChange}/>
        </div>
        <div className="input-container">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10" value={value} onChange={handleChange}/>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
