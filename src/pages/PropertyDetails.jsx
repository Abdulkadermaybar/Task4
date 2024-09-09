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
      <Header title="تفاصيل العقار" subTitle="الرئيسية / تفاصيل العقار" />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <div className="box-container">
              {propertyDetailsInfo.map((box, index) => (
                <InfoBox key={index} img={box.img} title={box.title} desc={box.desc} />
              ))}
            </div>
          </div>
          <div className="col-md-8">
            <Card
              img="/public/assets/images/property-01.jpg"
              type="شقة"
              location="24 شارع نيو، ميامي، OR 24560"
            />
            <p>
              احصل على <strong>أفضل وكالة عقارات</strong> عبر قوالب HTML CSS
              Bootstrap لموقع شركتك. يمكنك البحث في الإنترنت عن المزيد من القوالب المجانية.
              <br />
              <br />
              إذا كنت تبحث عن قوالب CSS مجانية، يمكنك ببساطة كتابة TemplateMo
              في محرك البحث. هناك أيضًا العديد من القوالب المتاحة مثل TemplateMo Digital Marketing، TemplateMo Corporate Layouts، وغيرها.
            </p>
            <Accordion questions={featuredQuestions} />
          </div>
        </div>
        <BestDeal />
      </div>
    </div>
  );
};

export default PropertyDetails;
