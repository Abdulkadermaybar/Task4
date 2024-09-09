import { useState } from "react";
import PropTypes from "prop-types";
import "./Accordion.css";

const Accordion = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion container">
      {questions.map((question, index) => (
        <div
          key={index}
          className={`accordion-item ${activeIndex === index ? "active" : ""}`}
        >
          <div
            className="accordion-title btn btn-outline-primary w-100 mb-2"
            onClick={() => handleToggle(index)}
          >
            {question.title}
          </div>
          <div
            className={`accordion-content ${activeIndex === index ? "show" : ""}`}
            dangerouslySetInnerHTML={{ __html: question.content }}
          />
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Accordion;
