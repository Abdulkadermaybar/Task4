import { featuredInfo, featuredQuestions } from "../../constants";
import Accordion from "../Accordion/Accordion";
import InfoBox from "../InfoBox/InfoBox";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="Featured" id="Featured">

      <div className="image-container">
        <img src="/assets/images/featured.jpg" alt="featured" />
        <div className="icon-box">
          <img src="/assets/images/featured-icon.png" alt="featured-icon" />
        </div>
      </div>

      <div className="text-container">
        <span>Featured</span>
        <h3>Best Appartment & Sea View</h3>
        <Accordion questions={featuredQuestions} />
      </div>

      <div className="box-container">
        <div className="boxes">
          {featuredInfo.map((box, index) => {
            return (
              <InfoBox
                key={index}
                img={box.img}
                title={box.title}
                desc={box.desc}
              />
            );
          })}
        </div>
      </div>
      
    </section>
  );
};

export default Featured;
