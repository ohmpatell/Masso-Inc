import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const { signup, error, isLoading } = useSignup();
  const [accountType, setAccountType] = useState({});

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

  const registerAsCustomer = () => {
    setAccountType("Customer");
    alert("SubmitCustomer");
  };

  const registerAsHotelOwner = () => {
    setAccountType("HotelOwner");
    alert("SubmitHotelOwner");
  };

  const handleSubmit = async (e) => {
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
      await signup(
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.password,
        accountType
      );
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              {/* Registration Form */}
              <form id="myForm" onSubmit={handleSubmit}>
                {/* Title */}
                <h2 className="text-center mb-4">Register</h2>

                {/* First Name Input */}
                <div className="form-outline mb-4">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className={`form-control ${
                      formErrors.firstName ? "is-invalid" : ""
                    }`}
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {formErrors.firstName && (
                    <div className="invalid-feedback">
                      {formErrors.firstName}
                    </div>
                  )}
                </div>

                {/* Last Name Input */}
                <div className="form-outline mb-4">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className={`form-control ${
                      formErrors.lastName ? "is-invalid" : ""
                    }`}
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {formErrors.lastName && (
                    <div className="invalid-feedback">
                      {formErrors.lastName}
                    </div>
                  )}
                </div>

                {/* Email Input */}
                <div className="form-outline mb-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className={`form-control ${
                      formErrors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <div className="invalid-feedback">{formErrors.email}</div>
                  )}
                </div>

                {/* Password Input */}
                <div className="form-outline mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className={`form-control ${
                      formErrors.password ? "is-invalid" : ""
                    }`}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {formErrors.password && (
                    <div className="invalid-feedback">
                      {formErrors.password}
                    </div>
                  )}
                </div>

                {/* Confirm Password Input */}
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
                    <div className="invalid-feedback">
                      {formErrors.confirmPassword}
                    </div>
                  )}
                </div>

                {/* Register Buttons */}
                <button
                  disabled={isLoading}
                  className="btn btn-primary me-2"
                  onClick={registerAsCustomer}
                >
                  Register As Customer
                </button>
                <button
                  disabled={isLoading}
                  className="btn btn-primary"
                  onClick={registerAsHotelOwner}
                >
                  Register As Hotel Owner
                </button>

                {/* Error Message */}
                {error && <div className="error">{error}</div>}

                {/* Login Link */}
                <p className="mt-3 text-center">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
