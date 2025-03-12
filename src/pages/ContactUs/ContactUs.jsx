import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactUsSeo from "../../seo/ContactUsSeo";
import Loading from "../../components/Loading";
import { Link, NavLink } from "react-router-dom";
function ContactUs() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 300); // Simulating a 1-second delay
  }, []);
  return (
    <>
      <ContactUsSeo />
      {isLoading ? (
        <Loading />
      ) : (
        // Your actual content when not loading
        <div>
          <Header />
          {/* Breadcumb Section   S T A R T */}
          <div className="breadcumb-section">
            <div className="breadcumb-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="breadcumb-content">
                      <h1 className="breadcumb-title">Contact Us</h1>
                      <ul className="breadcumb-menu">
                        <li>
                          <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="text-white">/</li>
                        <li className="active">Contact Us</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us Section    S T A R T */}
          <div className="contact-us-section section-padding fix">
            <div className="contact-box-wrapper style1">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-md-6 col-xl-4">
                    <div className="contact-box style1">
                      <div className="contact-icon">
                        <img src="assets/img/icon/location.png" alt="icon" />
                      </div>
                      <h3 className="title">Address</h3>
                      <p>7 Bellevue Road, London, SW17 7EG</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="contact-box style1">
                      <div className="contact-icon">
                        <img src="assets/img/icon/gmail.png" alt="icon" />
                      </div>
                      <h3 className="title">Email</h3>
                      <p>
                        <NavLink to="mailto:info@pizzadavalter.co.uk">
                          info@pizzadavalter.co.uk
                        </NavLink>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="contact-box style1">
                      <div className="contact-icon">
                        <img src="assets/img/icon/phone.png" alt="icon" />
                      </div>
                      <h3 className="title">Phone No.</h3>
                      <p>
                        {" "}
                        <NavLink to="tel:442083557032">
                          +44 20 8355 7032
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section    S T A R T */}
          <div className="contact-form-section section-padding pt-0 fix">
            <div className="contact-form-wrapper style2">
              <div className="container">
                <div className="row gx-60 gy-5">
                  <div className="col-xl-6">
                    <div className="contact-form-thumb">
                      <img
                        src="assets/img/contact/contactThumb2_1.png"
                        alt="thumb"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="contact-form style2">
                      <h2>Get in Touch</h2>
                      <form className="row" action="#">
                        <div className="col-md-12">
                          <input type="text" placeholder="Full Name" />
                        </div>
                        <div className="col-md-6">
                          <input type="email" placeholder="Email Address" />
                        </div>
                        <div className="col-md-6">
                          <input type="number" placeholder="Phone Number" />
                        </div>
                        <div className="col-12">
                          <textarea
                            id="message"
                            className="form-control"
                            placeholder="Write your message here..."
                            rows={5}
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12 form-group mb-0">
                          <button className="theme-btn w-100">
                            SUBMIT NOW
                            <i className="fa-sharp fa-regular fa-arrow-right-long bg-transparent text-white" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Map Section    S T A R T */}
          <div className="map-wrapper" style={{ lineHeight: 0 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2486.673128149811!2d-0.1684976!3d51.4457966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605e99236c46b%3A0x808830fc11ed1d7f!2sPizza%20Da%20Valter!5e0!3m2!1sen!2sin!4v1741780141539!5m2!1sen!2sin"
              height={550}
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}

export default ContactUs;
