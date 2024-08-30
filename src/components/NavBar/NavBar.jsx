import { useEffect, useRef, useState } from "react";
import { menuLinks } from "../../constants";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./NavBar.css";


const NavBar = () => {

  const [toggle, settoggle] = useState(false);
  const [navActiveLink, setnavActiveLink] = useState("Home");
  const navHeader = useRef(null);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        navHeader.current.style.display = "none";
      } else {
        navHeader.current.style.display = "flex";
      }
    };
  }, []);

  return (
    <nav>
      
      <div className="desktop-nav">
        <div ref={navHeader} className="header">
          <div className="company-info">
            <div className="items">
              <div className="email">
                <i className="fa-solid fa-envelope"></i>
                <span>info@company.com</span>
              </div>
              <div className="map">
                <i className="fa-solid fa-map"></i>
                <span>Sunny Isles Beach, FL 33160</span>
              </div>
            </div>
          </div>
          <div className="social-media">
            <ul>
              <li>
                <i className="fa-brands fa-facebook"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-nav">
          <div className="logo">
            <h2>VILLA</h2>
          </div>
          <div className="nav-menu">
            <ul>
              {menuLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className={`${
                        link.content === navActiveLink ? "active" : ""
                      }`}
                      onClick={() => setnavActiveLink(link.content)}
                    >
                      {link.content}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Button
                  text="Schedule a visit"
                  icon={true}
                  semicircular={true}
                />
              </li>
            </ul>
            <button
              className="menu-btn"
              onClick={() => {
                settoggle((prev) => !prev);
              }}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      <div className={`nav-mobile ${toggle ? "show" : "hidden"}`}>
        <div className="nav-menu">
          <ul>
            {menuLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    to={link.to}
                    className={`${
                      link.content === navActiveLink ? "active" : ""
                    }`}
                    onClick={() => setnavActiveLink(link.content)}
                  >
                    {link.content}
                  </Link>
                </li>
              );
            })}
            <li>
              <Button text="Schedule a visit" icon={true} semicircular={true} />
            </li>
          </ul>
        </div>
        <div className="company-info">
          <div className="items">
            <div className="email">
              <i className="fa-solid fa-envelope"></i>
              <span>info@company.com</span>
            </div>
            <div className="map">
              <i className="fa-solid fa-map"></i>
              <span>Sunny Isles Beach, FL 33160</span>
            </div>
          </div>
        </div>
        <div className="social-media">
          <ul>
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i className="fa-brands fa-linkedin"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default NavBar;