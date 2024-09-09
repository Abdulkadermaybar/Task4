import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ title, subTitle }) => {
  return (
    <header className="header text-center py-5">
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Header;
