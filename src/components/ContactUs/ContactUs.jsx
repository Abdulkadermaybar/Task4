import Form from "../Form/Form";
import Header from "../Header/Header";
import InfoBox from "../InfoBox/InfoBox";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-us container">
      <Header title="اتصل بنا" subTitle="الرئيسية / اتصل بنا" />
      <div className="row">
        <div className="col-md-6">
          <InfoBox title="010-020-0340" desc="رقم الهاتف" />
          <InfoBox title="info@villa.co" desc="البريد الإلكتروني" />
        </div>
        <div className="col-md-6">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
