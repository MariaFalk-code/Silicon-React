import IphoneFeat from '../assets/Pictures desktop/iphone 12 Pro-features.png'
import CreditCard from '../assets/icons and logos/creditcard-payments.svg'
import BarsGraph from '../assets/icons and logos/bars-graphic-cost.svg'
import Wallet from '../assets/icons and logos/wallet-regular.svg'
import Shield from '../assets/icons and logos/shield-data.svg'
import Support from '../assets/icons and logos/question-support.svg'
import Happy from '../assets/icons and logos/happy.svg'


const Features = () => {
  return (
    <section className="features flex-ct" id="features">
          <div className="feat-img flex-center hidden-XS-S">
            <img src={IphoneFeat} alt="Iphone and creditcard" />
          </div>
          <div className="feat-text flex-center">
            <div className="feat-header">
              <h2>App Features</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quisquam assumenda nobis optio
                cupiditate quaerat, eos error officiis, aperiam sit molestias enim expedita dolore explicabo amet
                consectetur?
              </p>
            </div>
            <div className="feat flex-lt gap-1-5">
              <img className="icon-box" src={CreditCard} alt="creditcard icon" />
              <div className="flex-column">
                <h4>Easy Payments</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, impedit!</p>
              </div>
            </div>
            <div className="feat flex-lt gap-1-5">
              <img className="icon-box" src={BarsGraph} alt="bars-graphic icon" />
              <div className="flex-column">
                <h4>Cost Statistics</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, repellat.</p>
              </div>
            </div>
            <div className="feat flex-lt gap-1-5">
              <img className="icon-box" src={Wallet} alt="wallet icon" />
              <div className="flex-column">
                <h4>Regular Cashback</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quo?</p>
              </div>
            </div>
            <div className="feat flex-lt gap-1-5">
              <img className="icon-box" src={Shield} alt="shield icon" />
              <div className="flex-column">
                <h4>Data Security</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quisquam.</p>
              </div>
            </div>
            <div className="feat flex-lt gap-1-5">
              <img className="icon-box" src={Support} alt="support icon" />
              <div className="flex-column">
                <h4>Support 24/7</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, distinctio.</p>
              </div>
            </div>
            <div className="feat flex-lt gap-1-5">
              <img className="icon-box" src={Happy} alt="happy face icon" />
              <div className="flex-column">
                <h4>Top Standards</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, optio?</p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Features