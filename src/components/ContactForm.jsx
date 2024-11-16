import { useState } from "react";
import DropDown from "./Dropdown";

const ContactForm = () => {
  const [selectedSpecialist, setSelectedSpecialist] = useState("");

  const handleSelect = (option) => {
    setSelectedSpecialist(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("specialist", selectedSpecialist);
    const data = Object.fromEntries(formData);
  };

  return (
    <div className="form-box">
      <h2>Get Online Consultation</h2>
      <form noValidate>
        <div className="form-group">
          <label htmlFor="name">Full name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email adress</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="specialist">Specialist</label>
          <DropDown
            options={["Nurse", "Doctor", "Physiotherapist", "Psychiatrist"]}
            placeholder={
              <span className="arrow-gap">
                Select a specialist <i className="fa-solid fa-caret-down"></i>
              </span>
            }
            onSelect={handleSelect}
          />
        </div>
        <button className="btn btn-l" type="submit">
          Make an appoinment
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
