import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import InfoBox from "../components/InfoBox/InfoBox";

const contactUs = () => {
  return (
    <div className="contactUs-page">
      <Header title="Contact Us" subTitle="Home / Contact Us" />
      <div className="container">
        <div className="form-container">
          <div className="contact-info-container">
            <div className="text-container">
              <span>Contact Us</span>
              <h3>Get In Touch with Our Agents</h3>
            </div>
            <p>
              When you really need to download free CSS templates, please
              remember our website TemplateMo. Also, tell your friends about our
              website. Thank you for visiting. There is a variety of Bootstrap
              HTML CSS templates on our website. If you need more information,
              please contact us.
            </p>

            <div className="info-boxes">
              <InfoBox
                img="/assets/images/phone-icon.png"
                title="010-020-0340"
                desc="Phone Number"
              />
              <InfoBox
                img="/assets/images/email-icon.png"
                title="info@villa.co"
                desc="Business Email"
              />
            </div>
          </div>
          <Form />
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11662.9823862156!2d-80.11417883366248!3d25.936737059558723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e1!3m2!1sar!2snl!4v1724217821361!5m2!1sar!2snl"></iframe>
      </div>
    </div>
  );
};

export default contactUs;
