
import Brands from "../components/Brands";
import Features from "../components/Features";
import Footer from "../components/Footer";
import MainFunctions from "../components/MainFunctions";
import MoreFunctions from "../components/MoreFunctions";
import Header from "../components/Header";
import Reviews from "../components/Reviews";
import Faq from "../components/Faq";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <div className="full-width-hero-bg">
        <div className="wrapper flex-column">
          <Header />
        </div>
      </div>
      <div className="wrapper">
        <main className="main flex-column gap-5">
          <Brands />
          <Features />
          <MainFunctions />
          <MoreFunctions />
          <Reviews />
          <Faq />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home