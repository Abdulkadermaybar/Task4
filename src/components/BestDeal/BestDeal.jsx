import { useState } from "react";
import { bestDealData } from "../../constants";
import InfoBox from "../InfoBox/InfoBox";
import Button from "../Button/Button";
import "./BestDeal.css";

const BestDeal = () => {
  const [type, settype] = useState("Appartment");

  return (
    <section className="BestDeal" id="BestDeal">
      <div className="header">
        <div className="text-container">
          <span>Best Deal</span>
          <h3>Find Your Best Deal Right Now!</h3>
        </div>
        <div className="btns-container">
          {bestDealData.map((data, index) => {
            return (
              <Button
                key={index}
                text={data.type}
                icon={false}
                semicircular={false}
                onClick={() => settype(data.type)}
                active={data.type === type ? true : false}
              />
            );
          })}
        </div>
      </div>

      {bestDealData.map((data, index) => {
        if (data.type === type) {
          return (
            <div className="body-container" key={index}>
              <div className="box-container">
                <div className="boxes">
                  {[...data.infoBox].map((box, index) => {
                    return (
                      <InfoBox
                        key={index}
                        title={box.desc}
                        desc={box.title}
                        noIcon={true}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="image-container">
                <img src={data.image} alt="property" />
              </div>

              <div className="info-container">
                <h6>{data.infoTitle}</h6>
                <p>{data.infoDesc}</p>
                <p>{data.infoDesc2}</p>
                <Button
                  text="Schedule a visit"
                  icon={true}
                  semicircular={true}
                />
              </div>
            </div>
          );
        }
      })}
    </section>
  );
};

export default BestDeal;
