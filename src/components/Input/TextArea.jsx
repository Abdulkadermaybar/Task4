import "./Input.css";

const TextArea = ({ name, rows, placeholder }) => {
  return (
    <div className="input-box">
      <label htmlFor={name}>{name}</label>
      <textarea name={name} rows={rows} id={name} placeholder={placeholder} />
    </div>
  );
};

export default TextArea;
