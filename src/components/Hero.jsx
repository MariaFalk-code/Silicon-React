import AppstoreLight from "../assets/icons and logos/appstore-light.svg";
import AppstoreDark from "../assets/icons and logos/appstore-dark.svg";
import GoogleplayLight from "../assets/icons and logos/googleplay-light.svg";
import GoogleplayDark from "../assets/icons and logos/googleplay-dark.svg";
import IphoneFront from "../assets/Pictures desktop/iPhone 12 Pro front-header.png";
import IphoneBottom from "../assets/Pictures desktop/Iphone 12 Pro bottom-header.png";

const Hero = () => {
  return (
    <>
      <div className="hero-header">
        <h1 className="display">Manage All Your Money in One App</h1>
      </div>
      <div className="hero-main flex-column">
        <p>
          We offer you a new generation of the mobile banking.
          <br />
          Save, spend & manage money in your pocket.
        </p>
        <div className="flex-left gap-1-5 btn-tablet">
          <a href="#" tabIndex="-1">
            <button className="btn btn-market flex-center">
              <img
                className="logo"
                src={AppstoreLight}
                data-light={AppstoreLight}
                data-dark={AppstoreDark}
                width="97%"
                alt="Appstore"
              />
            </button>
          </a>
          <a href="#" tabIndex="-1">
            <button className="btn btn-market flex-center">
              <img
                className="logo"
                src={GoogleplayLight}
                data-light={GoogleplayLight}
                data-dark={GoogleplayDark}
                width="97%"
                alt="Googleplay"
              />
            </button>
          </a>
        </div>
        <div className="discover flex-left gap-1">
          <a href="#features" tabIndex="-1">
            <button className="btn btn-chevron">
              <i className="fa-regular fa-chevron-down"></i>
            </button>
          </a>
          <small>Discover more</small>
        </div>
      </div>

      <div className="hero-pics hidden-XS">
        <div className="front-img">
          <img
            src={IphoneFront}
            alt="Iphone showing transactions in the Silicon money transfer banking app"
          />
        </div>
        <div className="back-img hidden-S">
          <img src={IphoneBottom} alt="Iphone showing budget" />
        </div>
      </div>
    </>
  );
};

export default Hero;
