import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import ContactForm from "../components/ContactForm";
import Location from "../components/Location";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  return (
    <>
      <div className="full-width-contact-bg">
        <div className="wrapper flex-column">
          <Nav />
          <nav className="breadcrumb">
              <Link to="/"><i class="fa-light fa-house"></i> Home</Link> &gt; <span>Contact</span>
            </nav>
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
