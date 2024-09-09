import Accordion from "../Accordion/Accordion";
import InfoBox from "../InfoBox/InfoBox";
import { featuredInfo, featuredQuestions } from "../../constants";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured container">
      <h3>أفضل العروض</h3>
      <Accordion questions={featuredQuestions} />
      <div className="row">
        {featuredInfo.map((box, index) => (
          <InfoBox key={index} img={box.img} title={box.title} desc={box.desc} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
