import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Location from "../components/Location";
import { useEffect } from "react";

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  return (
    <>
      <div className="full-width-contact-bg">
        <div className="wrapper flex-column">
          <Nav />
          <ContactUs />
        </div>
      </div>
      <div className="wrapper">
        <main>
          <Location />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
