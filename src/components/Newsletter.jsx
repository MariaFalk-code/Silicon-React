import Notification from "../assets/icons and logos/notification.png";

const Newsletter = () => {
  return (
    <section className="newsletter flex-center">
      <div className="subscribe gap-2">
        <img
          className="notification hidden-S"
          src={Notification}
          alt="notification icon"
        />
        <h3 className="text-sub">
          Subscribe to our newsletter <span className="hidden-XS-S">to stay informed about latest updates</span>
        </h3>
      </div>
      <form className="email-form" autocomplete="on">
        <i className="fa-thin fa-envelope icon"></i>
        <input className="form-input" type="email" id="email" placeholder="Your Email" autocomplete="email" />
        <a href="#">
          <button className="btn btn-l sub">Subscribe</button>
        </a>
      </form>
    </section>
  );
};

export default Newsletter;
