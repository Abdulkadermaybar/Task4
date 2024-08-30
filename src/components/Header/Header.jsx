import "./Header.css";

const Header = ({ title, subTitle }) => {
  return (
    <div className="pages-header">
        <span>{subTitle}</span>
        <h2>{title}</h2>
    </div>
  );
};

export default Header;
