import { cardData } from "../../constants";
import Card from "../Card/Card";
import "./Properties.css";

const Properties = () => {
  return (
    <section className="Properties" id="Properties">
      <div className="text-container">
        <span>Properties</span>
        <h3>We Provide The Best Property You Like</h3>
      </div>
      <div className="card-container">
        {[...cardData.cards].map((card, index) => {
          if (index < 6) {
            return (
              <Card
                key={card.id}
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
            );
          }
        })}
      </div>
    </section>
  );
};

export default Properties;
