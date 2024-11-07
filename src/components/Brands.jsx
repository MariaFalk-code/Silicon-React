import Logo1 from '../assets/icons and logos/logo1.svg'
import Logo2 from '../assets/icons and logos/logo2.svg'
import Logo3 from '../assets/icons and logos/logo3.svg'
import Logo4 from '../assets/icons and logos/logo4.svg'
import Logo5 from '../assets/icons and logos/logo5.svg'
import Logo6 from '../assets/icons and logos/logo6.svg'

const Brands = () => {
  return (
    <aside className="brands flex-center gap-1 mt-5 hidden-XS">
          <div className="brand-box flex-center">
            <img src={Logo1} alt="Brandlogo 1" />
          </div>
          <div className="brand-box flex-center">
            <img src={Logo2} alt="Brandlogo 2" />
          </div>
          <div className="brand-box flex-center">
            <img src={Logo3} alt="Brandlogo 3" />
          </div>
          <div className="brand-box flex-center">
            <img src={Logo4} alt="Brandlogo 4" />
          </div>
          <div className="brand-box flex-center hidden-XS-S">
            <img src={Logo5} alt="Brandlogo 5" />
          </div>
          <div className="brand-box flex-center hidden-XS-S">
            <img src={Logo6} alt="Brandlogo 6" />
          </div>
        </aside>
  )
}

export default Brands