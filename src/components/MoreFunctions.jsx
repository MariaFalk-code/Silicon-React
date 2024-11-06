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
        <a href="#" tabindex="-1">
          <button className="btn btn-m">
            Learn more &nbsp;&nbsp;<i className="fa-regular fa-arrow-right"></i>
          </button>
        </a>
      </div>
      <div className="grid-tr flex-column">
        <img
          src="resources/Pictures desktop/Transfer 1.png"
          alt="Graph over budget and spendings, overlay shoving icons of contacts for money transfer"
        />
      </div>
      <div className="grid-bl flex-column">
        <img src="resources/Pictures desktop/transfer 2.png" alt="list of contacts, overlaying credit card" />
      </div>
      <div className="grid-br gap-1">
        <h3 className="header">Receive payment from international bank details</h3>
        <img
          className="icon-l icon-box"
          src="resources/icons and logos/creditcard-payments.svg"
          alt="creditcard icon"
        />
        <p className="p-l">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
        <img className="icon-r icon-box" src="resources/icons and logos/wallet-regular.svg" alt="wallet icon" />
        <p className="p-r">A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
        <a href="#" tabindex="-1">
          <button className="btn btn-m learn-btn">
            Learn more &nbsp;&nbsp;<i className="fa-regular fa-arrow-right"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default MoreFunctions;
