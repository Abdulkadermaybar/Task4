import PropTypes from "prop-types";
import "./Slide.css";

const Slide = ({ img, text }) => {
  return (
    <div className="slide">
      <img src={img} alt="Slide" className="img-fluid" />
      <div className="text-continer">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

Slide.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Slide;
