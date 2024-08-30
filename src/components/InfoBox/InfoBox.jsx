import "./InfoBox.css";

const InfoBox = ({ img, title, desc, noIcon }) => {
  return (
    <div className="info-box">
      <img src={img} alt="info-box-icon" className={noIcon ? "hidden" : ""} />
      <div className={`text ${noIcon ? "row" : "col"}`}>
        <h6>{title}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default InfoBox;
