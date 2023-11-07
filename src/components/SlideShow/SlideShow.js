import { useState } from "react";
import "./_slide-show.scss";

export default function SlideShow(props) {
  let picturesArray = props.picturesArray;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (picturesArray.length < 2) {
    return (
      <div className="slide-show">
        <div
          className="slide"
          style={{ backgroundImage: `url(${picturesArray[currentIndex]})` }}
        ></div>
      </div>
    );
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? picturesArray.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === picturesArray.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slide-show">
      <div className="left-arrow" onClick={goToPrevious}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 25"
          fill="none"
        >
          <g clipPath="url(#clip0_216464_257)">
            <path
              d="M17.51 4.75064L15.74 2.98064L5.83995 12.8806L15.7399 22.7806L17.5099 21.0106L9.37995 12.8806L17.51 4.75064Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_216464_257">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(24 24.8806) rotate(-180)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="right-arrow" onClick={goToNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 25"
          fill="none"
        >
          <g clipPath="url(#clip0_216464_254)">
            <path
              d="M6.48999 21.0106L8.25999 22.7806L18.16 12.8806L8.25999 2.98059L6.48999 4.75059L14.62 12.8806L6.48999 21.0106Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_216464_254">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.880615)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        className="slide"
        style={{ backgroundImage: `url(${picturesArray[currentIndex]})` }}
      >
        <p className="slide-numbers">
          {currentIndex + 1}/{picturesArray.length}
        </p>
      </div>
    </div>
  );
}
