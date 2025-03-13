import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeSeo from "../../seo/HomeSeo";
import Loading from "../../components/Loading";
import { Link, NavLink } from "react-router-dom";
import Banner from "./Banner";
import Testimonial from "./Testimonial";
function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 300); // Simulating a 1-second delay
  }, []);
  return (
    <>
      <HomeSeo />
      {isLoading ? (
        <Loading />
      ) : (
        // Your actual content when not loading
        <div>
          <Header />
          {/* Banner Section   S T A R T */}
          <Banner />
          {/* About Us Section   S T A R T */}
          <section className="about-us-section fix section-padding pt-0 bg-color2">
            <div className="about-wrapper style2">
              <div className="shape1 d-none d-xxl-block">
                <img src="assets/img/shape/aboutShape2_1.png" alt="shape" />
              </div>
              <div className="container">
                <div className="about-us section-padding">
                  <div className="row d-flex align-items-center">
                    <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-xl-start">
                      <div className="about-thumb mb-5 mb-lg-0">
                        <img
                          src="assets/img/about/aboutThumb2_1.png"
                          alt="thumb"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="title-area">
                        <div className="sub-title text-start">
                          <img
                            className="me-1"
                            src="assets/img/icon/titleIcon.svg"
                            alt="icon"
                          />
                          About US
                          <img
                            className="ms-1"
                            src="assets/img/icon/titleIcon.svg"
                            alt="icon"
                          />
                        </div>
                        <h2 className="title text-start">Pizza Da Valter</h2>
                        <div className="text text-start">
                          Pizza da Valter is a family-owned restaurant dedicated
                          to delivering authentic and delicious pizza in a warm,
                          welcoming atmosphere. Known for our handcrafted
                          recipes and fresh ingredients, we offer a variety of
                          pizzas baked to perfection, alongside a selection of
                          traditional Italian dishes and modern favorites. Our
                          philosophy revolves around creating memorable dining
                          experiences, whether you’re joining us for a casual
                          meal or a special occasion. With attention to detail
                          in every slice and a commitment to excellent service,
                          Pizza da Valter is not just about food—it’s about
                          family, tradition, and sharing the love for good food
                          with our community.
                        </div>
                      </div>
                      <div className="fancy-box-wrapper">
                        <div className="fancy-box">
                          <div className="item">
                            <img
                              src="assets/img/icon/dog-head.svg"
                              alt="icon"
                            />
                          </div>
                          <div className="item">
                            <h6>Dog Friendly</h6>
                            <p>
                              Enjoy great food with your furry friend at our
                              dog-friendly restaurants!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="marquee-wrapper style-1 text-slider section-padding pt-0 bg-color2">
              <div className="marquee-inner to-left">
                <ul className="marqee-list d-flex">
                  <li className="marquee-item style1">
                    <span className="text-slider" />
                    <span className="text-slider text-style">
                      🍕 Freshly Baked Foods Just for You..! 🍕 Enjoy Pizzas,
                      Tasty Treats & More!
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* Our Menu Section   S T A R T */}
          <section className="popular-dishes-section fix section-padding pt-0 bg-color2">
            <div className="popular-dishes-wrapper-container">
              <div className="container">
                <div
                  className="popular-dishes-wrapper style2 section-padding bg-white"
                  style={{ borderRadius: "20px" }}
                >
                  <div className="shape1 float-bob-x d-none d-xxl-block">
                    <img
                      src="assets/img/shape/popularDishesShape1_1.png"
                      alt="shape"
                    />
                  </div>
                  <div className="shape2 float-bob-x d-none d-xxl-block">
                    <img
                      src="assets/img/shape/popularDishesShape1_2.png"
                      alt="shape"
                    />
                  </div>
                  <div className="container">
                    <div className="title-area">
                      <div className="sub-title text-center">
                        <img
                          className="me-1"
                          src="assets/img/icon/titleIcon.svg"
                          alt="icon"
                        />
                        Our Menu
                        <img
                          className="ms-1"
                          src="assets/img/icon/titleIcon.svg"
                          alt="icon"
                        />
                      </div>
                      <h2 className="title">Our Best Category</h2>
                    </div>
                    <div className="row style1 mb-60">
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="single-food-items">
                          <div className="item-thumb">
                            <img
                              src="assets/img/food-items/drinks.png"
                              alt="thumb"
                            />
                            <div className="circle-shape">
                              <img
                                className="cir36"
                                src="assets/img/food-items/circleShape.png"
                                alt="shape"
                              />
                            </div>
                          </div>
                          <div className="item-content">
                            <NavLink to="/">
                              <h3>Drinks</h3>
                            </NavLink>
                            <NavLink to="/" className="theme-btn style6 mt-3">
                              View More
                            </NavLink>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="single-food-items">
                          <div className="item-thumb">
                            <img
                              src="assets/img/food-items/foods.png"
                              alt="thumb"
                            />
                            <div className="circle-shape">
                              <img
                                className="cir36"
                                src="assets/img/food-items/circleShape.png"
                                alt="shape"
                              />
                            </div>
                          </div>
                          <div className="item-content">
                            <NavLink to="/">
                              <h3>Foods</h3>
                            </NavLink>
                            <NavLink to="/" className="theme-btn style6 mt-3">
                              View More
                            </NavLink>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="single-food-items">
                          <div className="item-thumb">
                            <img
                              src="assets/img/food-items/desserts.png"
                              alt="thumb"
                            />
                            <div className="circle-shape">
                              <img
                                className="cir36"
                                src="assets/img/food-items/circleShape.png"
                                alt="shape"
                              />
                            </div>
                          </div>
                          <div className="item-content">
                            <NavLink to="/">
                              <h3>Desserts</h3>
                            </NavLink>
                            <NavLink to="/" className="theme-btn style6 mt-3">
                              View More
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Services Section    S T A R T */}
          <section className="services-section style1 fix section-padding bg-color2 pt-0">
            <div className="">
              <div className="shape11 d-none d-xxl-block">
                <img
                  className="float-bob-y"
                  src="assets/img/shape/chefeShape2_1.png"
                  alt="shape"
                />
              </div>
              <div className="shape22 d-none d-xxl-block">
                <img
                  className="float-bob-x"
                  src="assets/img/shape/chefeShape2_2.png"
                  alt="shape"
                />
              </div>
              <div className="container">
                <div className="title-area">
                  <div className="sub-title text-center">
                    <img
                      className="me-1"
                      src="assets/img/icon/titleIcon.svg"
                      alt="icon"
                    />
                    OUR Services
                    <img
                      className="ms-1"
                      src="assets/img/icon/titleIcon.svg"
                      alt="icon"
                    />
                  </div>
                  <h2 className="title">Our Best Services</h2>
                </div>
                <div className="services-wrapper style2 pt-5">
                  <div className="row gy-5 gx-30">
                    <div className="col-lg-4">
                      <div className="services-card style2">
                        <div className="services-card_icon">
                          <img src="assets/img/icon/pick-up.svg" alt="icon" />
                        </div>
                        <h4 className="services-card_title">
                          <NavLink to="/">Pick-Up</NavLink>
                        </h4>
                        <p className="services-card_text mt-2">
                          <strong>Discount:</strong> 10% OFF on all Pick-Up
                          orders <br />
                          <strong>Pizza Size:</strong> 12-inch Pizzas (one size
                          only) <br />
                          <strong>Payment Option:</strong> Pay at the restaurant
                          when collecting your order <br />
                          <br />
                          <br />
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="services-card style2">
                        <div className="services-card_icon">
                          <img src="assets/img/icon/delivery.svg" alt="icon" />
                        </div>
                        <h4 className="services-card_title">
                          <NavLink to="/">Delivery</NavLink>
                        </h4>
                        <p className="services-card_text mt-2">
                          (Coming Soon)
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="services-card style2">
                        <div className="services-card_icon">
                          <img
                            src="assets/img/icon/table-book.svg"
                            alt="icon"
                          />
                        </div>
                        <h4 className="services-card_title">
                          <NavLink to="/">Book a Table</NavLink>
                        </h4>
                        <p className="services-card_text mt-2">
                          <strong>Slot Time:</strong> Each booking slot lasts 75
                          minutes
                          <br />
                          <strong>Required information:</strong> Date, Time,
                          Number of People, Name, Phone Number <br />
                          <strong>Start Time:</strong> Bookings begin at 12:15
                          p.m <br />
                          <strong>Restrictions:</strong> Select only from
                          available time slots (no custom times)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Cta section  S T A R T */}
          <section className="cta-section style-white fix bg-color2">
            <div className="cta-wrapper style3">
              <div className="container">
                <div className="cta-wrap  section-padding pt-xl-0 pb-xl-0 style3">
                  <div className="shape1 float-bob-x d-none d-xxl-block">
                    <img src="assets/img/shape/ctaShape3_1.png" alt="shape" />
                  </div>
                  <div className="shape2 float-bob-y d-none d-xxl-block">
                    <img src="assets/img/shape/ctaShape3_2.png" alt="shape" />
                  </div>
                  <div className="shape3 float-bob-y d-none d-xxl-block">
                    <img src="assets/img/shape/ctaShape3_3.png" alt="shape" />
                  </div>
                  <div className="shape4 d-none d-xxl-block">
                    <img src="assets/img/shape/ctaShape3_4.png" alt="shape" />
                  </div>
                  <div className="shape5 d-none d-xxl-block">
                    <img src="assets/img/shape/ctaShape3_5.png" alt="shape" />
                  </div>
                  <div className="shape7 d-none d-xxl-block">
                    <img src="assets/img/shape/ctaShape3_7.png" alt="shape" />
                  </div>
                  <div className="row g-5">
                    <div className="col-xl-6  d-flex align-items-center justify-content-center order-2 order-xl-1">
                      <div className="cta-content">
                        <h6 className="text-white">
                          <img
                            className="me-1"
                            src="assets/img/icon/titleIconWhite.svg"
                            alt="icon"
                          />
                          DOWNLOAD APP
                          <img
                            className="ms-1"
                            src="assets/img/icon/titleIconWhite.svg"
                            alt="icon"
                          />
                        </h6>
                        <h3 className="">Download Pizza Da Valter App</h3>
                        <div className="btn-wrapper d-md-flex align-items-center gap-2">
                          <div className="btns">
                            <a
                              className="apple-btn"
                              href="https://www.apple.com/store"
                            >
                              <div className="d-flex align-items-center   gap-2">
                                <img
                                  src="assets/img/icon/appleStore.svg"
                                  alt="icon"
                                />
                                <div>
                                  <span>Get it on</span>
                                  <h6>App store</h6>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="btns">
                            <a
                              className="google-btn"
                              href="https://play.google.com/store/"
                            >
                              <div className="d-flex align-items-center  gap-2">
                                <img
                                  src="assets/img/icon/playStore.svg"
                                  alt="icon"
                                />
                                <div>
                                  <span>Get it on</span>
                                  <h6>Google play</h6>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 d-flex align-items-center justify-content-center justify-content-xl-start order-1 order-xl-2">
                      <div className="cta-thumb">
                        <img
                          className="img-fluid float-bob-x"
                          src="assets/img/cta/ctaThumb3_1.png"
                          alt="thumb"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonial section  S T A R T */}
          <Testimonial />
          {/* Faq Section    S T A R T */}
          <div className="faq-section fix section-padding pt-0">
            <div className="container">
              <div className="title-area mb-45">
                <div className="sub-title text-center">
                  <img
                    className="me-1"
                    src="assets/img/icon/titleIcon.svg"
                    alt="icon"
                  />
                  Faq
                  <img
                    className="ms-1"
                    src="assets/img/icon/titleIcon.svg"
                    alt="icon"
                  />
                </div>
                <div className="title">frequently ask question</div>
              </div>
              <div className="row gx-60">
                <div className="col-xl-5">
                  <div className="faq-thumb w-100 h-100 fix rounded-3">
                    <img
                      className="w-100 h-100 rounded-3"
                      src="assets/img/dishes/burger.png"
                      alt="thumb"
                    />
                  </div>
                </div>
                <div className="col-xl-7">
                  <div className="faq-content style-1 mt-5">
                    <div className="faq-accordion">
                      <div className="accordion" id="accordion">
                        <div className="accordion-item mb-3">
                          <h5 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq1"
                              aria-expanded="true"
                              aria-controls="faq1"
                            >
                              How can I place an order online?
                            </button>
                          </h5>
                          <div
                            id="faq1"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Download our app from the Play Store or App Store
                              to place Pickup or Delivery orders. You can also
                              view our food menu on our website.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mb-3">
                          <h5 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq2"
                              aria-expanded="false"
                              aria-controls="faq2"
                            >
                              Do you offer vegan or gluten-free options?
                            </button>
                          </h5>
                          <div
                            id="faq2"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Yes, we offer a variety of Vegan and Gluten-Free
                              options. You can find these under the special
                              diets section of our menu.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mb-3">
                          <h5 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq3"
                              aria-expanded="false"
                              aria-controls="faq3"
                            >
                              What are your delivery hours?
                            </button>
                          </h5>
                          <div
                            id="faq3"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Our delivery hours are:
                              <ul>
                                <li>
                                  Monday - Thursday: 12 : 00 - 15 : 00 & 17 : 00
                                  - 23 : 00
                                </li>
                                <li>Friday - Sunday: 12 : 00 - 23 : 00</li>
                              </ul>
                              Please check the 'Opening Hours' section for more
                              details.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mb-3">
                          <h5 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq4"
                              aria-expanded="false"
                              aria-controls="faq4"
                            >
                              Is there a discount for pick-up orders?
                            </button>
                          </h5>
                          <div
                            id="faq4"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Yes, we offer a 10% discount for pick-up orders.
                              You can find this option in the 'Pick Up' section
                              of our menu.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mb-3">
                          <h5 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq5"
                              aria-expanded="false"
                              aria-controls="faq5"
                            >
                              Can I make a reservation online?
                            </button>
                          </h5>
                          <div
                            id="faq5"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Yes, you can book a table online through our
                              mobile app. Just click on 'Book A Table' from the
                              Booking screen and follow the instructions.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mb-3">
                          <h5 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq6"
                              aria-expanded="false"
                              aria-controls="faq6"
                            >
                              How do I know if my booking is confirmed?
                            </button>
                          </h5>
                          <div
                            id="faq6"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Once your booking is confirmed, you will receive a
                              notification in the app and can check the order
                              screen for confirmation details.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mb-3">
                          <h5 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq7"
                              aria-expanded="false"
                              aria-controls="faq7"
                            >
                              Do you have outdoor seating?
                            </button>
                          </h5>
                          <div
                            id="faq7"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Yes, Pizza Da Valter offers outdoor seating with a
                              view of Wandsworth Common. It provides a relaxing
                              atmosphere, especially during the evening as the
                              sun sets, giving you the feel of being on holiday.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
