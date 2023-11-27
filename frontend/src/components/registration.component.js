import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!formData.firstName) {
      errors.firstName = "First name is required";
    }

    if (!formData.lastName) {
      errors.lastName = "Last name is required";
    }

    if (!formData.email || !validateEmail(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!formData.password || !validatePassword(formData.password)) {
      errors.password =
        "Password must be at least 8 characters long and include at least one number, one symbol, and one uppercase letter";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form data submitted:", formData);
      // Here handle the form submission - sending data to a server
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-outline mb-4">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className={`form-control ${formErrors.firstName ? "is-invalid" : ""}`}
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {formErrors.firstName && (
          <div className="invalid-feedback">{formErrors.firstName}</div>
        )}
      </div>
      <div className="form-outline mb-4">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className={`form-control ${formErrors.lastName ? "is-invalid" : ""}`}
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {formErrors.lastName && (
          <div className="invalid-feedback">{formErrors.lastName}</div>
        )}
      </div>
      <div className="form-outline mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && (
          <div className="invalid-feedback">{formErrors.email}</div>
        )}
      </div>
      <div className="form-outline mb-4">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className={`form-control ${formErrors.password ? "is-invalid" : ""}`}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {formErrors.password && (
          <div className="invalid-feedback">{formErrors.password}</div>
        )}
      </div>
      <div className="form-outline mb-4">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          className={`form-control ${
            formErrors.confirmPassword ? "is-invalid" : ""
          }`}
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {formErrors.confirmPassword && (
          <div className="invalid-feedback">{formErrors.confirmPassword}</div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
};

export default Registration;