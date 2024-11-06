import IphoneBaseCarousel from "../assets/Pictures desktop/iPhone base-carousel.png";
import IphoneOverlay1 from "../assets/Pictures desktop/iPhone overlay-1.png";
import IphoneOverlay2 from "../assets/Pictures desktop/iPhone overlay-2.png";
import IphoneOverlay3 from "../assets/Pictures desktop/iPhone overlay-3.png";

const MainFunctions = () => {
  return (
    <div className="main-functions">
      <h2>How Does It Work?</h2>
      <div className="carousel-wrapper flex-center gap-2">
        <button className="prev btn btn-chevron" onclick="prevSlide()">
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
            <img src={IphoneOverlay1} alt="Budget graph" className="overlay-img" />
            <img
              src={IphoneOverlay2}
              alt="Recent transactions"
              className="overlay-img shrink active"
            />
            <img src={IphoneOverlay3} alt="Transfer" className="overlay-img" />
          </div>
        </div>
        <button className="next btn btn-chevron" onclick="nextSlide()">
          <i className="fa-regular fa-chevron-right"></i>
        </button>
      </div>
      <div id="carousel-texts">
        <div className="carousel-caption">
          <h4>Be in control of your budget</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dignissimos ex placeat autem? Voluptatibus
            aut consequuntur laudantium enim.
          </p>
        </div>
        <div className="carousel-caption active">
          <h4>Latest transaction history</h4>
          <p>
            Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in
            consectetur condimentum.
          </p>
        </div>
        <div className="carousel-caption">
          <h4>Fast transfers to your contacts</h4>
          <p>
            Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis
            fermentum, at nec lacus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainFunctions;
