import IphoneFeat from '../assets/Pictures desktop/iphone 12 Pro-features.png';
import CreditCard from '../assets/icons and logos/creditcard-payments.svg';
import BarsGraph from '../assets/icons and logos/bars-graphic-cost.svg';
import Wallet from '../assets/icons and logos/wallet-regular.svg';
import Shield from '../assets/icons and logos/shield-data.svg';
import Support from '../assets/icons and logos/question-support.svg';
import Happy from '../assets/icons and logos/happy.svg';

const features = [
  {
    icon: CreditCard,
    title: 'Easy Payments',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, impedit!',
  },
  {
    icon: BarsGraph,
    title: 'Cost Statistics',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, repellat.',
  },
  {
    icon: Wallet,
    title: 'Regular Cashback',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quo?',
  },
  {
    icon: Shield,
    title: 'Data Security',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quisquam.',
  },
  {
    icon: Support,
    title: 'Support 24/7',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, distinctio.',
  },
  {
    icon: Happy,
    title: 'Top Standards',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, optio?',
  },
];

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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quisquam assumenda nobis optio cupiditate
            quaerat, eos error officiis, aperiam sit molestias enim expedita dolore explicabo amet consectetur?
          </p>
        </div>
        {features.map((feature, index) => (
          <div className="feat flex-lt gap-1-5" key={index}>
            <img className="icon-box" src={feature.icon} aria-hidden="true"/>
            <div className="flex-column">
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
