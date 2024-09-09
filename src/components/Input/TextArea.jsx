import PropTypes from "prop-types";
import "./Input.css";

const TextArea = ({ name, rows, placeholder }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{name}</label>
      <textarea name={name} rows={rows} className="form-control" placeholder={placeholder}></textarea>
    </div>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextArea;
