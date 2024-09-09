import PropTypes from "prop-types";
import { cardData } from "../../constants";
import Card from "../Card/Card";
import "./Properties.css";

const Properties = () => {
  return (
    <section className="Properties container py-5" id="Properties">
      <div className="text-container text-center mb-4">
        <h2>العقارات</h2>
        <p>نقدم لك أفضل العقارات التي تناسبك</p>
      </div>
      <div className="row">
        {[...cardData.cards].map((card, index) => {
          if (index < 6) {
            return (
              <div className="col-md-4 mb-4" key={card.id}>
                <Card
                  img={card.img}
                  type={card.type}
                  prise={card.prise}
                  location={card.location}
                  bathrooms={card.bathrooms}
                  bedrooms={card.bedrooms}
                  area={card.area}
                  floor={card.floor}
                  parking={card.parking}
                />
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

// إضافة PropTypes للتحقق من صحة البيانات
Properties.propTypes = {
  cardData: PropTypes.shape({
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        prise: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        bedrooms: PropTypes.string.isRequired,
        bathrooms: PropTypes.string.isRequired,
        area: PropTypes.string.isRequired,
        floor: PropTypes.string.isRequired,
        parking: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};

export default Properties;
