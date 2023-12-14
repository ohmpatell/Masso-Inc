import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="container">
        <div className="row">
          {/* Newsletter */}
          <div className="col-md-4 mb-4">
            <h5>Subscribe to Our Newsletter</h5>
            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-light"
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex">
              {/* Larger social media icons */}
              <a href="https://google.com" className="text-light me-3 fs-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://google.com" className="text-light me-3 fs-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://google.com" className="text-light me-3 fs-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://google.com" className="text-light me-3 fs-3">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/careers" className="text-light">
                  Careers
                </a>
              </li>
              <li>
                <a href="/help" className="text-light">
                  Help
                </a>
              </li>
              {/* Add more quick links as needed */}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>Email: info@masso.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            {/* Add the company address here */}
            <p>
<<<<<<< HEAD
              Masso Inc., 155 Wellington St W 37th Floor, Ste 3720<br />
=======
              155 Wellington St W 37th Floor, Ste 3720<br />
>>>>>>> fa73bab2f612988a5a55d7b34a63221c09522a97
              Toronto, Ontario M5V 3L3, Canada
            </p>
          </div>
        </div>

        {/* Privacy Policy */}
        <hr className="my-4 bg-dark" />

        <div className="text-center mt-3 text-light">
          <p>
            All Rights Reserved &copy; 2023 Masso Inc., Toronto, ON, Canada.{" "}
            <span>
              <a
                href="https://massoinc-policies.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy.
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
