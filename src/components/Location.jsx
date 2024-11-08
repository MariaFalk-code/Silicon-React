import Map from "../assets/Pictures desktop/map.png";

const Location = () => {
  return (
    <>
      <div>
        <img src={Map} alt="Map showing the location of our medical centers" />
      </div>
      <div className="flex-column">
        <div>
          <h4>Medical Center 1</h4>
          <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          <p>(406) 555-0120</p>
          <p>Mon – Fri: 9:00 am – 22:00 am <br/>
          Sat – Sun: 9:00 am – 20:00 am</p>
        </div>
        <div className="mt-3">
          <h4>Medical Center 2</h4>
          <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
          <p>(406) 544-0123</p>
          <p>Mon – Fri: 9:00 am – 22:00 am <br/>
          Sat – Sun: 9:00 am – 20:00 am</p>
        </div>
      </div>
    </>
  );
};

export default Location;
