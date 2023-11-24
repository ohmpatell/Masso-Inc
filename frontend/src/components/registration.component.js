import React, { Component } from "react";

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false,
      showRegisterForm: false,
    };
  }

  toggleLoginFormVisibility = () => {
    this.setState((prevState) => ({
      showLoginForm: !prevState.showLoginForm,
      showRegisterForm: false,
    }));
  };

  toggleRegisterFormVisibility = () => {
    this.setState((prevState) => ({
      showRegisterForm: !prevState.showRegisterForm,
      showLoginForm: false,
    }));
  };

  render() {
    return (
      <div className="col-md-2">
        <button
          type="button"
          class="btn btn-primary btn-block mb-4"
          onClick={this.toggleLoginFormVisibility}
        >
          Login
        </button>

        {this.state.showLoginForm && (
          <form>
            <div className="form-outline mb-4">
              <input type="email" id="form2Example1" class="form-control" />
              <label class="form-label" for="form2Example1">
                Email address
              </label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="form2Example2" class="form-control" />
              <label className="form-label" for="form2Example2">
                Password
              </label>
            </div>

            <button type="button" className="btn btn-primary btn-block mb-4">
              Sign in
            </button>

            <div className="text-center">
              <p>
                Not a member?{" "}
                <a href="#!" onClick={this.toggleRegisterFormVisibility}>
                  Register
                </a>
              </p>
            </div>
          </form>
        )}

        {this.state.showRegisterForm && (
          <form className="needs-validation" noValidate>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationTooltip01">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip01"
                  placeholder="First name"
                  value="Mark"
                  required
                />
                <div className="valid-tooltip">Looks good!</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationTooltip02">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip02"
                  placeholder="Last name"
                  value="Otto"
                  required
                />
                <div className="valid-tooltip">Looks good!</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationTooltipUsername">Username</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="validationTooltipUsernamePrepend"
                    >
                      @
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="validationTooltipUsername"
                    placeholder="Username"
                    aria-describedby="validationTooltipUsernamePrepend"
                    required
                  />
                  <div className="invalid-tooltip">
                    Please choose a unique and valid username.
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationTooltip03">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip03"
                  placeholder="City"
                  required
                />
                <div className="invalid-tooltip">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationTooltip04">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip04"
                  placeholder="State"
                  required
                />
                <div className="invalid-tooltip">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationTooltip05">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltip05"
                  placeholder="Zip"
                  required
                />
                <div className="invalid-tooltip">
                  Please provide a valid zip.
                </div>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </form>
        )}
      </div>
    );
  }
}
