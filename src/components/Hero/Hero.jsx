import { useState } from "react";
import { sliderData } from "../../constants";
import "./Hero.css";

const Hero = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="hero">
      <div className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {sliderData.map((slide, idx) => (
            <div key={idx} className={`carousel-item ${idx === index ? "active" : ""}`}>
              <img src={slide.image} className="d-block w-100" alt={slide.text} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={() => setIndex((index - 1 + sliderData.length) % sliderData.length)}
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={() => setIndex((index + 1) % sliderData.length)}
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
