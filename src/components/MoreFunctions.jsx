import Transfer1 from "../assets/Pictures desktop/Transfer 1.png";
import Transfer2 from "../assets/Pictures desktop/Transfer 2.png";
import CreditCard from "../assets/icons and logos/creditcard-payments.svg";
import Wallet from "../assets/icons and logos/wallet-regular.svg";

const MoreFunctions = () => {
  return (
    <div className="more-functions flex-left hidden-XS-S">
      <div className="grid-tl flex-column">
        <h3>Make your money transfer simple and clear</h3>

        <ul>
          <li>
            <span className="li-icon">
              <i className="fa-regular fa-circle-check"></i>
            </span>
            Banking transactions are free for you
          </li>
          <li>
            <span className="li-icon">
              <i className="fa-regular fa-circle-check"></i>
            </span>
            No monthly cash commission
          </li>
          <li>
            <span className="li-icon">
              <i className="fa-regular fa-circle-check"></i>
            </span>
            Manage payments and transactions online
          </li>
        </ul>
        <a href="#" tabIndex="-1">
          <button className="btn btn-m">
            Learn more &nbsp;&nbsp;<i className="fa-regular fa-arrow-right"></i>
          </button>
        </a>
      </div>
      <div className="grid-tr flex-column">
        <img
          src={Transfer1}
          alt="Graph over budget and spendings, overlay shoving icons of contacts for money transfer"
        />
      </div>
      <div className="grid-bl flex-column">
        <img src={Transfer2} alt="list of contacts, overlaying credit card" />
      </div>
      <div className="grid-br gap-1">
        <h3 className="header">Receive payment from international bank details</h3>
        <img
          className="icon-l icon-box"
          src={CreditCard}
          alt="creditcard icon"
        />
        <p className="p-l">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
        <img className="icon-r icon-box" src={Wallet} alt="wallet icon" />
        <p className="p-r">A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
        <a href="#" tabIndex="-1">
          <button className="btn btn-m learn-btn">
            Learn more &nbsp;&nbsp;<i className="fa-regular fa-arrow-right"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default MoreFunctions;
