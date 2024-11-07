import Map from "../assets/Pictures desktop/map.png";

const Location = () => {
  return (
    <>
      <div>
        <img src={Map} alt="Map showing the location of our medical centers" />
      </div>
      <div>
        <h4>Medical Center 1</h4>
        <h4>Medical Center 2</h4>
      </div>
    </>
  );
};

export default Location;
