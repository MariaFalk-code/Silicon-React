import { useState } from "react";
import DropDown from "./Dropdown";
import { useForm } from "react-hook-form";


  const onSubmit = (data) => {
    console.log(data);
  };

const ContactForm = () => {
  const [selectedSpecialist, setSelectedSpecialist] = useState("");

  const handleSelect = (option) => {
    setSelectedSpecialist(option);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("specialist", selectedSpecialist);
    const data = Object.fromEntries(formData);
  };

  return (
    <div className="form-box">
      <h2>Get Online Consultation</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <label htmlFor="name">Full name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
        <label>Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
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
