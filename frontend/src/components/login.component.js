import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

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
    <div className="col-md-2">
      <form onSubmit={handleSubmit}>
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
        <button disabled={isLoading} type="submit" className="btn btn-primary">
          Login
        </button>
        {error && <div className="error">{error}</div>}

        <div className="text-center">
          <p>
            Not a member? <Link to="/signup">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

// import React, { Component } from "react";
// import Registration from "./registration.component";

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       showLoginForm: false,
//       showRegisterForm: false,
//     };
//   }

//   toggleLoginFormVisibility = () => {
//     const loginFormIsShown = !this.state.showLoginForm;
//     this.setState(
//       {
//         showLoginForm: loginFormIsShown,
//         showRegisterForm: false,
//       },
//       () => {
//         // Notify the parent component about the login form visibility change
//         this.props.onLoginToggle(loginFormIsShown);
//       }
//     );
//   };

//   toggleRegisterFormVisibility = () => {
//     const registerFormIsShown = !this.state.showRegisterForm;
//     this.setState(
//       {
//         showLoginForm: false,
//         showRegisterForm: registerFormIsShown,
//       },
//       () => {
//         // Notify the parent component about the register form visibility change
//         this.props.onLoginToggle(registerFormIsShown);
//       }
//     );
//   };

//   validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   // Function to handle form submission
//   handleLogin = (e) => {
//     e.preventDefault(); // Prevents the default form submission action
//     const email = this.state.email; // Assuming you have an email state
//     if (this.validateEmail(email)) {
//       // If the email is valid, proceed with the login process
//       console.log("Email is valid, proceed with login");
//       // Here you would typically handle the form submission, e.g., sending data to a server
//     } else {
//       // If the email is not valid, show an error or alert
//       alert("Please enter a valid email address.");
//     }
//   };

//   render() {
//     return (
//       <div className="col-md-2">
//         <button
//           type="button"
//           class="btn btn-primary btn-block mb-4"
//           onClick={this.toggleLoginFormVisibility}
//         >
//           Login
//         </button>

//         {this.state.showLoginForm && (
//           <form onSubmit={this.handleLogin}>
//             <div className="form-outline mb-4">
//               <input
//                 type="email"
//                 id="form2Example1"
//                 className="form-control"
//                 value={this.state.email}
//                 onChange={(e) => this.setState({ email: e.target.value })}
//               />
//               <label class="form-label" for="form2Example1">
//                 Email address
//               </label>
//             </div>

//             <div className="form-outline mb-4">
//               <input type="password" id="form2Example2" class="form-control" />
//               <label className="form-label" for="form2Example2">
//                 Password
//               </label>
//             </div>

//             <button type="button" className="btn btn-primary btn-block mb-4">
//               Sign in
//             </button>

//             <div className="text-center">
//               <p>
//                 Not a member?{" "}
//                 <a href="#!" onClick={this.toggleRegisterFormVisibility}>
//                   Register
//                 </a>
//               </p>
//             </div>
//           </form>
//         )}

//         {this.state.showRegisterForm && <Registration />}
//       </div>
//     );
//   }
// }
