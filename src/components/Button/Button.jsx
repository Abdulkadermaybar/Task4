import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ text, onClick, semicircular, active }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${semicircular ? "btn-rounded" : ""} ${active ? "btn-primary" : "btn-outline-primary"}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  semicircular: PropTypes.bool,
  active: PropTypes.bool,
};

export default Button;
