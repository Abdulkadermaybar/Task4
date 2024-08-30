import { useState, useEffect, useRef } from "react";
import { sliderData } from "../../constants";
import Slide from "../Slide/Slide";
import "./Hero.css";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const slides = useRef(null);

  useEffect(() => {
    const dots = document.querySelectorAll(".dot");

    slides.current.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }, [index]);

  return (
    <div className="slider" id="Home">
      <div className="slides" ref={slides}>
        {sliderData.map((slide, index) => {
          return <Slide key={index} img={slide.image} text={slide.text} />;
        })}
      </div>

      <div className="controls">
        <button
          className="prev"
          onClick={() =>
            setIndex((index - 1 + sliderData.length) % sliderData.length)
          }
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <button
          className="next"
          onClick={() => setIndex((index + 1) % sliderData.length)}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div className="indicators">
        {[...Array(sliderData.length)].map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`dot ${dotIndex === index ? "active" : ""}`}
            data-slide={dotIndex}
            onClick={() => setIndex(dotIndex)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;