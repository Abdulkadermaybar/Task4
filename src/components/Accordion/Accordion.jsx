import { useState } from "react";
import "./Accordion.css";

const Accordion = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="accordion">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`accordion-item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div
              className="accordion-title"
              onClick={() => handleToggle(index)}
            >
              {question.title}
            </div>
            <div className={`accordion-content`} dangerouslySetInnerHTML={{ __html: question.content }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
