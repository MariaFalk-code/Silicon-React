import { useState } from "react";
import DropDown from "./Dropdown";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedSpecialist, setSelectedSpecialist] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSelect = (option) => {
    setSelectedSpecialist(option);
  };

  const onSubmit = async (data) => {
    if (!selectedSpecialist) {
      setError("specialist", { type: "manual", message: "Please select a specialist" });
      return;
    }

    const formData = {
    name: data.name,
    email: data.email,
    specialist: selectedSpecialist,
    };

    const response = await fetch("https://win24-assignment.azurewebsites.net/api/forms/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setSubmitted(true);
      reset();
      selectedSpecialist("");
      clearErrors("specialist");
    }
  };


  if (submitted) {
    return (
      <div className="form-box">
        <h2>Thank you for your enquiry! We will soon be in contact.</h2>
        <button className="btn btn-l" onClick={() => setSubmitted(false)}>
          Return
        </button>
      </div>
    );
  }

  return (
    <div className="form-box">
      <h2>Get Online Consultation</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <label htmlFor="name">Full name</label>
          <input type="text" {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^[A-Za-zÅÄÖåäö\s]{2,}$/,
              message: "Name must be at least 2 characters long and contain only letters",
            },
          })} />
          {errors.name && <p className="error-msg">{errors.name.message}</p>}
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
          {errors.email && <p className="error-msg">{errors.email.message}</p>}
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
          {errors.specialist && <p className="error-msg">{errors.specialist.message}</p>}
        </div>
        <button className="btn btn-l" type="submit">
          Make an appoinment
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
