import "./Button.css";

const Button = ({ text, icon, semicircular, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`primary-btn ${active ? "active" : ""}`}
    >
      <div
        className="contenaire"
        style={{ borderRadius: semicircular ? "200px" : "4px" }}
      >
        {icon ? <i className="fa-solid fa-calendar"></i> : ""}
        <span>{text}</span>
      </div>
    </button>
  );
};

export default Button;
