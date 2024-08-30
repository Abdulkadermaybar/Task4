import Button from "../Button/Button";
import "./Card.css";

const Card = ({
  img,
  type,
  prise,
  location,
  bedrooms,
  bathrooms,
  area,
  floor,
  parking,
}) => {
  return (
    <div className="Card">
      <div className="header">
        <img src={img} alt={type} />
      </div>

      <div className="body">
        <div className="prise-box">
          <span className="type">{type}</span>
          <span className="prise">{prise}</span>
        </div>
        <p className="location">{location}</p>
        <div className="details-box">
          <p className="bedrooms">
            bedrooms: <span>{bedrooms}</span>
          </p>
          <p className="bathrooms">
            bathrooms: <span>{bathrooms}</span>
          </p>
          <p className="area">
            area: <span>{area}</span>
          </p>
          <p className="floor">
            floor: <span>{floor}</span>
          </p>
          <p className="parking">
            parking: <span>{parking}</span>
          </p>
        </div>
      </div>

      <div className="footer">
        <Button text="Schedule a visit" icon={false} semicircular={true} />
      </div>
    </div>
  );
};

export default Card;
