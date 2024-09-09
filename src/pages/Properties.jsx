import { useState } from "react";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import { cardData } from "../constants";
import "./style.css";

const Properties = () => {
  const [type, setType] = useState(null);

  return (
    <div className="properties-page">
      <Header title="العقارات" subTitle="الرئيسية / العقارات" />
      <div className="container py-5">
        <div className="row mb-4">
          {cardData.btnFilter.map((btn, index) => (
            <div className="col-md-3" key={index}>
              <Button
                text={btn.name}
                icon={false}
                semicircular={false}
                onClick={() => setType(btn.type)}
                active={btn.type === type}
              />
            </div>
          ))}
        </div>
        <div className="row">
          {cardData.cards.map((el) => {
            if (el.type === type || type === null) {
              return (
                <div className="col-md-4 mb-4" key={el.id}>
                  <Card
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
                </div>
              );
            }
          })}
        </div>
        <div className="pagination-container d-flex justify-content-center mt-4">
          <ul className="pagination">
            <li className="page-item">1</li>
            <li className="page-item">2</li>
            <li className="page-item">3</li>
            <li className="page-item">
              <i className="fa-solid fa-chevron-right"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Properties;
