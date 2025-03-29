import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactUsSeo from "../../seo/ContactUsSeo";
import Loading from "../../components/Loading";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    msg: "",
  });

  const [errors, setErrors] = useState({});
  const [reCaptcha, setCaptchaToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      formErrors.name = "Name can only contain letters and spaces";
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }

    if (!formData.phoneno) {
      formErrors.phoneno = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phoneno)) {
      formErrors.phoneno = "Phone number is invalid";
    }

    if (!formData.msg) {
      formErrors.msg = "Message is required";
    }

    if (!reCaptcha) {
      formErrors.captcha = "Captcha is required";
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (window.grecaptcha) {
      window.grecaptcha.reset();
    }

    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://riyoremit.com/prod/api/contactus/savecontactdetails",
          { ...formData, reCaptcha }
        );
        const { responseCode, data } = response.data;

        if (responseCode === "00") {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Form submitted successfully!",
            confirmButtonText: "OK",
          });

          setFormData({ name: "", email: "", phoneno: "", msg: "" });
          setCaptchaToken("");
          setErrors({});
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text:
              data ||
              "There was an issue submitting the form. Please try again later.",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "There was an issue submitting the form. Please try again later.",
          confirmButtonText: "OK",
        });
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

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
          <div
            className="breadcumb-wrapper"
            style={{
              backgroundImage: "url(assets/img/update_2/bg/breadcumb_bg_2.jpg)",
            }}
            data-bg-src="assets/img/update_2/bg/breadcumb_bg_2.jpg"
          >
            <div className="container z-index-common">
              <div className="breadcumb-content">
                <h1 className="breadcumb-title">Contact Us</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>

            <div className="space">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-xl-4 col-sm-6">
                    <div className="contact-feature">
                      <div className="contact-feature_icon">
                        <img
                          src="assets/img/update_2/icon/contact_feature_1.svg"
                          alt="Icon"
                        />
                      </div>
                      <h4 className="box-title">Address</h4>
                      <span className="contact-feature_text">
                        7 Bellevue Road, London, SW17 7EG
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6">
                    <div className="contact-feature">
                      <div className="contact-feature_icon">
                        <img
                          src="assets/img/update_2/icon/contact_feature_2.svg"
                          alt="Icon"
                        />
                      </div>
                      <h4 className="box-title">Email</h4>
                      <span className="contact-feature_text">
                        <NavLink to="mailto:info@pizzadavalter.co.uk">
                          info@pizzadavalter.co.uk
                        </NavLink>
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6">
                    <div className="contact-feature">
                      <div className="contact-feature_icon">
                        <img
                          src="assets/img/update_2/icon/contact_feature_3.svg"
                          alt="Icon"
                        />
                      </div>
                      <h4 className="box-title">Phone Number</h4>
                      <span className="contact-feature_text">
                        <NavLink to="tel:442083557032">
                          +44 20 8355 7032
                        </NavLink>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className id="mapSec">
              <div className="contact-map2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2486.673128149811!2d-0.1684976!3d51.4457966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605e99236c46b%3A0x808830fc11ed1d7f!2sPizza%20Da%20Valter!5e0!3m2!1sen!2sin!4v1741780141539!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            <section className="space-bottom contact-form-sec">
              <div className="container">
                <div className="reservation-area">
                  <h4 className="sec-title text-center mb-30">
                    Send Us Message
                  </h4>
                  <form
                    className="booking-form3 ajax-contact"
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      <div className="form-group col-lg-4 col-md-6">
                        <input
                          className="form-control rounded-2"
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter Full Name*"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                        <i className="far fa-user" />
                        {errors.name && (
                          <span className="error">{errors.name}</span>
                        )}
                      </div>
                      <div className="form-group col-lg-4 col-md-6">
                        <input
                          className="form-control rounded-2"
                          type="text"
                          name="phoneno"
                          id="phoneno"
                          placeholder="Enter Phone Number*"
                          value={formData.phoneno}
                          onChange={handleInputChange}
                          required
                        />
                        <i className="far fa-phone" />
                        {errors.phoneno && (
                          <span className="error">{errors.phoneno}</span>
                        )}
                      </div>
                      <div className="form-group col-lg-4">
                        <input
                          className="form-control rounded-2"
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Enter Email ID*"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <i className="far fa-tag" />
                        {errors.email && (
                          <span className="error">{errors.email}</span>
                        )}
                      </div>
                      <div className="form-group col-12">
                        <textarea
                          className="form-control rounded-2"
                          placeholder="Your Message"
                          cols={30}
                          rows={3}
                          name="msg"
                          id="msg"
                          value={formData.msg}
                          onChange={handleInputChange}
                          required
                          defaultValue={""}
                        />
                        <i className="far fa-comment" />
                        {errors.msg && (
                            <span className="error">{errors.msg}</span>
                          )}
                      </div>
                      <div className="form-group col-12">
                      <div className="mb-3">
                            <ReCAPTCHA
                              sitekey="6Le893QqAAAAADDTV8SZu7oQKjdhfwlxshy2oNkV"
                              onChange={handleCaptchaChange}
                            />
                            {errors.captcha && (
                              <span className="error">{errors.captcha}</span>
                            )}
                          </div>
                      </div>
                    </div>
                    <div className="form-btn text-center">
                      <button className="th-btn
                      disabled={Object.keys(errors).length > 0}">
                        Send Message
                        <i className="fa-solid fa-arrow-right ms-2" />
                      </button>
                    </div>
                    <p className="form-messages mb-0 mt-3" />
                  </form>
                </div>
              </div>
            </section>

          <Footer />
        </div>
      )}
    </>
  );
}

export default ContactUs;
