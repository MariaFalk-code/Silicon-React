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
          <a href="#">
            <img src={Phone} alt="phone icon" />
          </a>
          <em>Still have questions?</em>
          <a href="#" tabIndex="-1">
            <button className="btn btn-frameless btn-call">
              Contact us &nbsp; <i className="fa-regular fa-arrow-right"></i>
            </button>
          </a>
        </div>
        <div className="contact-box flex-column">
          <a href="#">
            <img src={TextBubble} alt="textbubble icon" />
          </a>
          <em>Don't like phone calls?</em>
          <a href="#" tabIndex="-1">
            <button className="btn btn-frameless btn-text">
              Contact us &nbsp; <i className="fa-regular fa-arrow-right"></i>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default FaqContact;
