import { useState } from "react";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import { bestDealData, cardData } from "../constants";
import "./style.css";

const Properties = () => {
  const [type, settype] = useState(null);

  return (
    <div className="properties-page">
      <Header title="Properties" subTitle="Home / Properties" />
      <div className="btns-container">
        {[...cardData.btnFilter].map((btn, index) => {
          return (
            <Button
              key={index}
              text={btn.name}
              icon={false}
              semicircular={false}
              onClick={() => settype(btn.type)}
              active={btn.type === type ? true : false}
            />
          );
        })}
      </div>
      <div className="card-container">
        {[...cardData.cards].map((el) => {
          if (el.type === type || type === null) {
            return (
              <Card
                key={el.id}
                img={el.img}
                type={el.type}
                prise={el.prise}
                location={el.location}
                bathrooms={el.bathrooms}
                bedrooms={el.bedrooms}
                area={el.area}
                floor={el.floor}
                parking={el.parking}
              />
            );
          }
        })}
      </div>
      <div className="pagination-container">
        <ul className="pagination">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>
            <i className="fa-solid fa-chevron-right"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Properties;
