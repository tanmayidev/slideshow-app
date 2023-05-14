import React, { useState } from "react";

function Slides({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const handleRestart = () => {
    setCurrentIndex(0);
    setPrevDisabled(true);
    setNextDisabled(false);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 1);
    setNextDisabled(false);
    if (currentIndex - 1 === 0) {
      setPrevDisabled(true);
    }
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    setPrevDisabled(false);
    if (currentIndex + 1 === slides.length - 1) {
      setNextDisabled(true);
    }
  };

  const slide = slides[currentIndex];

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={handleRestart}
          disabled={currentIndex === 0}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={handlePrev}
          disabled={prevDisabled}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={handleNext}
          disabled={nextDisabled}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slide && slide.title}</h1>
        <p data-testid="text">{slide && slide.text}</p>
      </div>
    </div>
  );
}
export default Slides;
