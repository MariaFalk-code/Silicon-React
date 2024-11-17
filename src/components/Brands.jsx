import Logo1 from '../assets/icons and logos/logo1.svg';
import Logo2 from '../assets/icons and logos/logo2.svg';
import Logo3 from '../assets/icons and logos/logo3.svg';
import Logo4 from '../assets/icons and logos/logo4.svg';
import Logo5 from '../assets/icons and logos/logo5.svg';
import Logo6 from '../assets/icons and logos/logo6.svg';

const logos = [
  { src: Logo1, alt: 'Brandlogo 1' },
  { src: Logo2, alt: 'Brandlogo 2' },
  { src: Logo3, alt: 'Brandlogo 3' },
  { src: Logo4, alt: 'Brandlogo 4' },
  { src: Logo5, alt: 'Brandlogo 5' },
  { src: Logo6, alt: 'Brandlogo 6' },
];

const Brands = () => {
  return (
    <aside className="brands flex-center gap-1 mt-5 hidden-XS">
      {logos.map((logo, index) => (
        <div className="brand-box flex-center" key={index}>
          <img src={logo.src} alt={logo.alt} />
        </div>
      ))}
    </aside>
  );
};

export default Brands;
