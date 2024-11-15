import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import ContactForm from "../components/ContactForm";
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
          <div className="gap-2 contact">
            <ContactUs />
            <ContactForm />
          </div>
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
