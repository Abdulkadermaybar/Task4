import PropTypes from "prop-types";
import "./Input.css";

const TextField = ({ id, name, type, placeholder }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{name}</label>
      <input type={type} id={id} placeholder={placeholder} className="form-control" />
    </div>
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextField;
