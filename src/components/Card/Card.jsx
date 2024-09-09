import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./Card.css";

const Card = ({ img, type, price, location, bedrooms, bathrooms, area, floor, parking }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={type} />
      <div className="card-body">
        <h5 className="card-title">{type}</h5>
        <p className="card-text">{location}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Bedrooms: {bedrooms}</li>
          <li className="list-group-item">Bathrooms: {bathrooms}</li>
          <li className="list-group-item">Area: {area}</li>
          <li className="list-group-item">Floor: {floor}</li>
          <li className="list-group-item">Parking: {parking}</li>
        </ul>
        <Button text="احجز زيارة" semicircular={true} />
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  floor: PropTypes.string.isRequired,
  parking: PropTypes.string.isRequired,
};

export default Card;
