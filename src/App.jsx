import "./App.css";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="full-width-hero-bg">
        <div className="wrapper flex-column">
          <Header />
        </div>
      </div>
      <div className="wrapper">
        <main class="main flex-column gap-5">
          <Brands />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
