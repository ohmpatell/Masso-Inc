import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import ParticleBackground from "../assets/ParticlesBackground";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const { login, error, isLoading } = useLogin();

  const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};

    if (!formData.email || !validateEmail(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      await login(formData.email, formData.password);
      console.log("Form data submitted:", formData);
      // Here handle the form submission - sending data to a server
    }
  };



  return (
<>
    <ParticleBackground />

    <div className="container mt-5 vh-100">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              {/* Login Form */}
              <form onSubmit={handleSubmit}>
                {/* Title */}
                <h2 className="text-center mb-4">Login</h2>

                {/* Email Input */}
                <div className="form-group mb-4">
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

                {/* Password Input */}
                <div className="form-group mb-4">
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
                    <div className="invalid-feedback">{formErrors.password}</div>
                  )}
                </div>

                {/* Login Button */}
                <button
                  disabled={isLoading}
                  type="submit"
                  className="btn btn-primary"
                >
                  Login
                </button>

                {/* Register Link */}
                <p className="mt-3 text-center">
                  Not a user? <Link to="/signup">Register</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
            
            

            