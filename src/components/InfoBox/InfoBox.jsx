import PropTypes from "prop-types";
import "./InfoBox.css";

const InfoBox = ({ img, title, desc, noIcon }) => {
  return (
    <div className="info-box d-flex align-items-center mb-3">
      {!noIcon && <img src={img} alt="icon" className="me-3" />}
      <div>
        <h6>{title}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
};

InfoBox.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  noIcon: PropTypes.bool,
};

export default InfoBox;
