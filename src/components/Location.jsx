import Map from "../assets/Pictures desktop/map.png";

const Location = () => {
  return (
    <>
      <div>
        <img src={Map} alt="Map showing the location of our medical centers" />
      </div>
      <div className="flex-column">
        <div className="med-center">
          <h4>Medical Center 1</h4>
          <div className="flex-left gap-1">
            <i className="fa-light fa-location-dot"></i>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          </div>
          <div className="flex-left gap-1">
            <i className="fa-light fa-phone"></i>
            <p>(406) 555-0120</p>
          </div>
          <div className="flex-lt gap-1">
            <i className="fa-light fa-clock move-icon"></i>
            <p><b>Mon – Fri:</b> 9:00 am – 22:00 am <br/>
            <b>Sat – Sun:</b> 9:00 am – 20:00 am</p>
          </div>
        </div>

        <div className="mt-3 med-center">
          <h4>Medical Center 2</h4>
          <div className="flex-left gap-1">
            <i className="fa-light fa-location-dot"></i>
            <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
          </div>
          <div className="flex-left gap-1">
            <i className="fa-light fa-phone"></i>
            <p>(406) 544-0123</p>
          </div>
          <div className= "flex-lt gap-1">
            <i className="fa-light fa-clock move-icon"></i>
            <p> <b>Mon – Fri:</b> 9:00 am – 22:00 am <br/>
            <b>Sat – Sun:</b> 9:00 am – 20:00 am</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
