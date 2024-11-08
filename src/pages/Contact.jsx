import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Location from "../components/Location";

const Contact = () => {
  return (
    <>
      <div className="full-width-contact-bg">
        <div className="wrapper flex-column">
          <Nav />
          <ContactUs />
        </div>
      </div>
      <div className="wrapper">
        <main className="main flex-lt gap-5 mt-10">
          <Location />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
