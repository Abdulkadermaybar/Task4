import Header from "../components/Header/Header";
import InfoBox from "../components/InfoBox/InfoBox";
import BestDeal from "../components/BestDeal/BestDeal";
import Accordion from "../components/Accordion/Accordion";
import { featuredQuestions, propertyDetailsInfo } from "../constants";
import Card from "../components/Card/Card";

import "./style.css";

const PropertyDetails = () => {
  return (
    <div className="PropertyDetails-page">
      <Header title="Single Property" subTitle="Home / Single Property" />
      <div className="container">
        <div className="box-container">
          <div className="boxes">
            {propertyDetailsInfo.map((box, index) => {
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

        <div className="card-container">
          <Card
            img="/public/assets/images/property-01.jpg"
            type="Apparment"
            location="24 New Street Miami, OR 24560"
          />
          <p>
            Get <strong>the best villa agency</strong> HTML CSS Bootstrap
            Template for your company website. TemplateMo provides you the{" "}
            <a
              href="https://www.google.com/search?q=best+free+css+templates"
              target="_blank"
            >
              best free CSS templates
            </a>{" "}
            in the world. Please tell your friends about it. Thank you. Cloud
            bread kogi bitters pitchfork shoreditch tumblr yr succulents
            single-origin coffee schlitz enamel pin you probably haven't heard
            of them ugh hella.
            <br />
            <br />
            When you look for free CSS templates, you can simply type TemplateMo
            in any search engine website. In addition, you can type TemplateMo
            Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse
            +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard
            PBR&B DSA poutine neutra cardigan hoodie pop-up.
          </p>
          <Accordion questions={featuredQuestions} />
        </div>

      </div>

      <BestDeal />
    </div>
  );
};

export default PropertyDetails;
