import { NavLink } from "react-router-dom";
import Phone from "../assets/icons and logos/phone.svg";
import TextBubble from "../assets/icons and logos/textmsg.svg";

const FaqContact = () => {
  return (
    <>
      <div className="faq-header flex-column">
        <h2>
          Any questions? <br />
          Check out the FAQs
        </h2>
        <p>Still have unanswered questions and need to get in touch?</p>
      </div>
      <div className="faq-contact gap-1-5">
        <div className="contact-box flex-column"> 
          <NavLink to="/Contact">
            <img src={Phone} alt="phone icon" />
          </NavLink>
          <em>Still have questions?</em>
          <NavLink to="/Contact" tabIndex="-1">
            <button className="btn btn-frameless btn-call">
              Contact us &nbsp; <i className="fa-regular fa-arrow-right"></i>
            </button>
          </NavLink>
        </div>
        <div className="contact-box flex-column">
          <NavLink to="/Contact">
            <img src={TextBubble} alt="textbubble icon" />
          </NavLink>
          <em>Don't like phone calls?</em>
          <NavLink to="/Contact" tabIndex="-1">
            <button className="btn btn-frameless btn-text">
              Contact us &nbsp; <i className="fa-regular fa-arrow-right"></i>
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default FaqContact;
