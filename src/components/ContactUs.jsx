import AddGroup from "../assets/icons and logos/add-group.svg";
import Envelope from "../assets/icons and logos/envelope.svg";

const ContactUs = () => {
  
  return (
    <div className="flex-column gap-1">
      <h1>Contact Us</h1>
      <div className="flex-lt gap-1">
        <img src={Envelope} aria-hidden="true"/>
        <div className="contact-us">
          <h4>Email us</h4>
          <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
          <a href="#" tabIndex="-1">
            <button className="btn btn-frameless btn-call">
              Leave a message &nbsp; <i className="fa-regular fa-arrow-right"></i>
            </button>
          </a>
        </div>
      </div>
      <div className="mb-5 flex-lt gap-1">
        <img src={AddGroup} aria-hidden="true"/>
        <div className="contact-us">
          <h4>Careers</h4>
          <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
          <a href="#" tabIndex="-1">
            <button className="btn btn-frameless btn-call">
              Send an application &nbsp; <i className="fa-regular fa-arrow-right"></i>
            </button>
          </a>
        </div>
      </div>
    </div >
  );
};

export default ContactUs;
