import "./App.css";
import Brands from "./components/Brands";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Functionality from "./components/Functionality";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import Newsletter from "./components/Newsletter";

function App() {
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
          <Functionality />
          <Reviews />
          <Faq />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
