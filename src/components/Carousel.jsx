import { useState } from "react";
import carouselData from "./CarouselData";
import IphoneBaseCarousel from "../assets/Pictures desktop/iPhone base-carousel.png";

const Carousel = ({ slides = carouselData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="carousel-wrapper flex-center gap-2">
        <button className="prev btn btn-chevron" onClick={prevSlide}>
          <i className="fa-regular fa-chevron-left"></i>
        </button>
        <div className="carousel-container">
          <img id="base-carousel" className="phone-img" src={IphoneBaseCarousel} alt="Phone Image" />
          <div id="overlay-container">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.imgSrc}
                alt={slide.title}
                className={`${slide.className} ${currentSlide === index ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
        <button className="next btn btn-chevron" onClick={nextSlide}>
          <i className="fa-regular fa-chevron-right"></i>
        </button>
      </div>
      <div id="carousel-texts">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-caption ${currentSlide === index ? "active" : ""}`}>
            <h4>{slide.title}</h4>
            <p>{slide.caption}</p>
          </div>
        ))}
        </div>
    </>
  );
};

export default Carousel;
