import React from "react";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      {/* Footer Section    S T A R T */}
      <footer className="footer-section bg-title fix">
        <div className="footer-widgets-wrapper">
          <div className="shape1 float-bob-y d-none d-xxl-block">
            <img src="assets/img/shape/footerShape1_1.png" alt="shape" />
          </div>
          <div className="shape2 d-none d-xxl-block">
            <img src="assets/img/shape/footerShape1_2.png" alt="shape" />
          </div>
          <div className="shape3 d-none d-xxl-block">
            <img src="assets/img/shape/footerShape1_3.png" alt="shape" />
          </div>
          <div className="shape4  d-none d-xxl-block">
            <img src="assets/img/shape/footerShape1_4.png" alt="shape" />
          </div>
          <div className="container">
            <div className="footer-top">
              <div className="row gy-4">
                <div className="col-lg-4">
                  <div className="fancy-box">
                    <div className="item1">
                      <i className="fa-solid fa-location-dot" />
                    </div>
                    <div className="item2">
                      <h6>Address</h6>
                      <p>
                        <NavLink
                          target="_blank"
                          to="https://maps.app.goo.gl/de6dVWNiz98cYef98"
                        >
                          7 Bellevue Road, London, SW17 7EG
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-start justify-content-lg-end">
                  <div className="fancy-box">
                    <div className="item1">
                      <i className="fa-solid fa-envelope" />
                    </div>
                    <div className="item2">
                      <h6>Email</h6>
                      <p>
                        <NavLink to="mailto:info@pizzadavalter.co.uk">
                          info@pizzadavalter.co.uk
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-start justify-content-lg-end">
                  <div className="fancy-box">
                    <div className="item1">
                      <i className="fa-regular fa-phone-volume" />
                    </div>
                    <div className="item2">
                      <h6>Phone No.</h6>
                      <p>
                        <NavLink to="tel:442083557032">
                          +44 20 8355 7032
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <NavLink to="/">
                      <img src="assets/img/logo/logowhite.png" alt="logo-img" />
                    </NavLink>
                  </div>
                  <div className="footer-content">
                    <p>
                      Phasellus ultricies aliquam volutpat ullamcorper laoreet
                      neque, a lacinia curabitur lacinia mollis
                    </p>
                    <div className="social-icon d-flex align-items-center">
                      <NavLink to="#">
                        <i className="fab fa-facebook-f" />
                      </NavLink>
                      <NavLink to="#">
                        <i className="fab fa-twitter" />
                      </NavLink>
                      <NavLink to="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </NavLink>
                      <NavLink to="#">
                        <i className="fa-brands fa-youtube" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Quick Links</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <NavLink to="/aboutus">
                        <i className="fa-solid fa-chevrons-right" />
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="https://www.standard.co.uk/going-out/restaurants/best-pizza-london-top-restaurants-a2945776.html"
                        target="_blank"
                      >
                        <i className="fa-solid fa-chevrons-right" />
                        Blogs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contactus">
                        <i className="fa-solid fa-chevrons-right" />
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Legal Links</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <NavLink to="/">
                        <i className="fa-solid fa-chevrons-right" />
                        Privacy policy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <i className="fa-solid fa-chevrons-right" />
                        Allergen information
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Opening Time</h3>
                  </div>
                  <ul className="list-area">
                    <li className="mb-2">
                      Monday – Thursday:
                      <span className="text-theme-color2">
                        <br />
                        12:00am – 15:00pm &<br/>17:00pm to 23:00am
                      </span>
                    </li>
                    <li>
                      Friday - Saturday:
                      <span className="text-theme-color2">
                        <br />
                        12:00am – 23:00pm
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper d-flex align-items-center justify-content-center">
              <p className="">
                Copyright © {new Date().getFullYear()}{" "}
                <NavLink to="/"> Pizz Da Valter </NavLink> All Rights Reserved.
                | Powered By{" "}
                <NavLink to="https://www.calyx-solutions.com/" target="_blank">
                  {" "}
                  Calyx Solutions{" "}
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
