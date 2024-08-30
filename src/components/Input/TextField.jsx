import "./Input.css";

const TextField = ({ id, name, type, placeholder }) => {
  return (
    <div className="input-box">
      <label htmlFor={id}>{name}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} />
    </div>
  );
};

export default TextField;
