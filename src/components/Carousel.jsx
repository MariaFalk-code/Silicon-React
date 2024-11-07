import { useState } from "react";
import IphoneBaseCarousel from "../assets/Pictures desktop/iPhone base-carousel.png";
import IphoneOverlay1 from "../assets/Pictures desktop/iPhone overlay-1.png";
import IphoneOverlay2 from "../assets/Pictures desktop/iPhone overlay-2.png";
import IphoneOverlay3 from "../assets/Pictures desktop/iPhone overlay-3.png";

const Carousel = () => {
  const slides = [
    { imgSrc: IphoneOverlay1, title: 'Be in control of your budget', caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dignissimos ex placeat autem? Voluptatibus aut consequuntur laudantium enim.' },
    { imgSrc: IphoneOverlay2, title: 'Latest transaction history', caption: 'Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.' },  
    { imgSrc: IphoneOverlay3, title: 'Fast transfers to your contacts', caption: 'Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  
  return (
    <div className="main-functions">
      <h2>How Does It Work?</h2>
      <div className="carousel-wrapper flex-center gap-2">
        <button className="prev btn btn-chevron" onClick={prevSlide}>
          <i className="fa-regular fa-chevron-left"></i>
        </button>
        <div className="carousel-container">
          <img
            id="base-carousel"
            className="phone-img"
            src={IphoneBaseCarousel}
            alt="Phone Image"
          />
          <div id="overlay-container">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.imgSrc}
                alt={slide.title}

                className={`overlay-img ${slide.imgSrc === IphoneOverlay2 ? 'shrink' : ''} ${index === currentSlide ? 'active' : ''}`}
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
          <div key={index} className={`carousel-caption ${currentSlide === index ? 'active' : ''}`}>
            <h4>{slide.title}</h4>
            <p>{slide.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel