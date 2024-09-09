import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import InfoBox from "../components/InfoBox/InfoBox";

const ContactUs = () => {
  return (
    <div className="contactUs-page">
      <Header title="اتصل بنا" subTitle="الرئيسية / اتصل بنا" />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <div className="text-container mb-4">
              <h3>تواصل مع وكلائنا</h3>
              <p>
                إذا كنت بحاجة إلى تنزيل قوالب CSS المجانية، يرجى تذكر موقعنا على
                الإنترنت TemplateMo. أخبر أصدقائك عن موقعنا. شكراً لك على
                زيارتك. هناك مجموعة متنوعة من قوالب HTML CSS المتاحة على موقعنا.
                إذا كنت بحاجة إلى مزيد من المعلومات، يرجى الاتصال بنا.
              </p>
            </div>
            <div className="info-boxes">
              <InfoBox img="/assets/images/phone-icon.png" title="010-020-0340" desc="رقم الهاتف" />
              <InfoBox img="/assets/images/email-icon.png" title="info@villa.co" desc="البريد الإلكتروني" />
            </div>
          </div>
          <div className="col-md-6">
            <Form />
          </div>
        </div>
        <div className="row mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11662.9823862156!2d-80.11417883366248!3d25.936737059558723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e1!3m2!1sar!2snl!4v1724217821361!5m2!1sar!2snl"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
