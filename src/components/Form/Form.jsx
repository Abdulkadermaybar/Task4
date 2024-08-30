import TextArea from "../Input/TextArea";
import TextField from "../Input/TextField";
import Button from "../Button/Button";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-box">
      <form action="#">
        <TextField
          id="FullName"
          type="text"
          name="Full Name"
          placeholder="Your Name ..."
        />
        <TextField
          id="EmailAddress"
          type="text"
          name="Email Address"
          placeholder="Your E-mail ..."
        />
        <TextField
          id="Subject"
          type="text"
          name="Subject"
          placeholder="Subject ..."
        />
        <TextArea rows={6} name="Message" placeholder="Your Message" />
        <Button text="Send Message" icon={false} semicircular={true} />
      </form>
    </div>
  );
};

export default Form;
