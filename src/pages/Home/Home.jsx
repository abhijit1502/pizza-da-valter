import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeSeo from "../../seo/HomeSeo";
import Loading from "../../components/Loading";
import { Link, NavLink } from "react-router-dom";
import Testimonial from "./Testimonial";
import Banner from "./Banner";
function Home() {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        await loadScript("/assets/js/app.min.js");
        await loadScript("/assets/js/main.js");
      } catch (error) {
        console.error("Error loading external scripts:", error);
      }
    };

    loadScripts();

    // Cleanup on component unmount
    return () => {
      document.querySelectorAll('script[src="/assets/js/app.min.js"], script[src="/assets/js/main.js"]').forEach((script) => script.remove());
    };
  }, []);
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
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

          <section
            className="space-extra bg-auto-repeat bg-title"
            style={{
              backgroundImage: "url(assets/img/update_2/bg/feature_bg_5.png)",
            }}
            data-bg-src="assets/img/update_2/bg/feature_bg_5.png"
          >
            <div className="container">
              <div className="food-feature-wrap">
                <div className="food-feature">
                  <div className="food-feature_icon">
                    <img
                      src="assets/img/update_2/icon/delivery.svg"
                      alt="Food"
                    />
                  </div>
                  <h3 className="food-feature_title box-title">
                    Home Delivery
                  </h3>
                  <p className="food-feature_text">(Coming Soon)</p>
                </div>
                <div className="divider" />
                <div className="food-feature">
                  <div className="food-feature_icon">
                    <img src="assets/img/update_2/icon/pickup.svg" alt="Food" />
                  </div>
                  <h3 className="food-feature_title box-title">Pick-Up</h3>
                  <p className="food-feature_text">
                    {" "}
                    10% OFF on all Pick-Up orders
                  </p>
                </div>
                <div className="divider" />
                <div className="food-feature">
                  <div className="food-feature_icon">
                    <img
                      src="assets/img/update_2/icon/book-table.svg"
                      alt="Food"
                    />
                  </div>
                  <h3 className="food-feature_title box-title">Book a Table</h3>
                  <p className="food-feature_text">
                    Each booking slot lasts 75 minutes
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="space shape-mockup-wrap">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 mb-40 mb-xl-0">
                  <div className="img-box3">
                    <img src="assets/img/normal/about_3_1.png" alt="About" />
                    <div className="about-counter1">
                      <h3 className="counter-title">
                        <span className="counter-number">24</span>
                      </h3>
                      <div className="media-body">
                        <p className="counter-info">YEARS OF</p>
                        <h5 className="counter-text">Experience</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-md-10 ps-xxl-5">
                  <div className="ms-xl-4">
                    <div className="title-area mb-30">
                      <span className="sub-title">About Us</span>
                      <h2 className="sec-title">
                      Pizza Da Valter
                      </h2>
                    </div>
                    <p className="mt-n2 mb-4">
                      Pizza da Valter is a family-owned restaurant dedicated to
                      delivering authentic and delicious pizza in a warm,
                      welcoming atmosphere. Known for our handcrafted recipes
                      and fresh ingredients, we offer a variety of pizzas baked
                      to perfection, alongside a selection of traditional
                      Italian dishes and modern favorites.
                    </p>
                    <div className="about-feature-wrap">
                      <div className="about-feature">
                        <div className="about-feature_icon">
                          <img
                            src="assets/img/icon/a-feature_1_1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="about-feature_text">DELICIOUS</div>
                      </div>
                      <div className="about-feature">
                        <div className="about-feature_icon">
                          <img
                            src="assets/img/icon/a-feature_1_2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="about-feature_text">FRESH</div>
                      </div>
                      <div className="about-feature">
                        <div className="about-feature_icon">
                          <img src="assets/img/icon/dog-head.svg" alt="icon" />
                        </div>
                        <div className="about-feature_text">DOG FRIENDLY</div>
                      </div>
                    </div>
                    <NavLink to="/aboutus" className="th-btn">
                      ABOUT MORE
                      <i className="fa-solid fa-arrow-right ms-2" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="shape-mockup about-shape3"
              style={{bottom:"120px", left:"15%"}}
              data-bottom="120px"
              data-left="15%"
            >
              <img src="assets/img/shape/bg_shape_4.png" alt="shapes" />
            </div>
            <div
              className="shape-mockup leaf jump d-none d-xxl-block"
              style={{bottom:"0%", left:"0%"}}
              data-bottom="0%"
              data-left="0%"
            >
              <img src="assets/img/shape/leaf_3.png" alt="shape" />
            </div>
            <div
              className="shape-mockup leaf jump-reverse d-none d-xxl-block"
              style={{bottom:"120px", right:"0%"}}
              data-bottom="120px"
              data-right="0%"
            >
              <img src="assets/img/shape/plate_1.png" alt="shape" />
            </div>
          </div>

          <div className="space-bottom">
            <div className="container">
              <div className="row gy-4">
                <div className="col-xl-4 col-md-6">
                  <div
                    className="offer-card"
                    style={{
                      backgroundImage: "url(assets/img/bg/discount_bg_1.jpg)",
                    }}
                    data-bg-src="assets/img/bg/discount_bg_1.jpg"
                  >
                    <h3 className="offer-title box-title">BURGER</h3>
                    <p className="offer-text">
                      Get a 20% Discount on This Week
                    </p>
                    {/* <NavLink to="" className="line-btn">
                      BUY NOW
                    </NavLink> */}
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div
                    className="offer-card"
                    style={{
                      backgroundImage: "url(assets/img/bg/discount_bg_2.jpg)",
                    }}
                    data-bg-src="assets/img/bg/discount_bg_2.jpg"
                  >
                    <h3 className="offer-title box-title">FRENCH FRY</h3>
                    <p className="offer-text">
                      Get a 30% Discount on This Week
                    </p>
                    {/* <NavLink to="" className="line-btn">
                      BUY NOW
                    </NavLink> */}
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div
                    className="offer-card"
                    style={{
                      backgroundImage: "url(assets/img/bg/discount_bg_3.jpg)",
                    }}
                    data-bg-src="assets/img/bg/discount_bg_3.jpg"
                  >
                    <h3 className="offer-title box-title">ITALIAN PASTA</h3>
                    <p className="offer-text">
                      Get a 25% Discount on This Week
                    </p>
                    {/* <NavLink to="" className="line-btn">
                      BUY NOW
                    </NavLink> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section
            className="position-relative bg-smoke2 space"
            id="productMenu"
            style={{
              backgroundImage: "url(assets/img/update_2/bg/menu_bg_5.png)",
            }}
            data-bg-src="assets/img/update_2/bg/menu_bg_5.png"
          >
            <div className="container">
              <div className="title-area text-center">
                <span className="sub-title">Popular Food Menu</span>
                <h2 className="sec-title">Choose your best menu</h2>
              </div>
              <div className="feature-grid-wrap">
                <div className="feature-grid">
                  <div className="feature-grid_img">
                    <img src="assets/img/icon/drink.png" alt="Food" />
                  </div>
                  <div>
                    <h3 className="feature-grid_title box-title">Drinks</h3>
                    <p className="feature-grid_text mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <NavLink to="#" className="th-btn style7">
                      VIEW MORE
                      <i className="fa-solid fa-arrow-right ms-2" />
                    </NavLink>
                  </div>
                </div>
                <div className="feature-grid">
                  <div className="feature-grid_img">
                    <img src="assets/img/icon/foods.png" alt="Food" />
                  </div>
                  <div>
                    <h3 className="feature-grid_title box-title">Foods</h3>
                    <p className="feature-grid_text mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <NavLink to="#" className="th-btn style7">
                      VIEW MORE
                      <i className="fa-solid fa-arrow-right ms-2" />
                    </NavLink>
                  </div>
                </div>
                <div className="feature-grid">
                  <div className="feature-grid_img">
                    <img src="assets/img/icon/desserts.png" alt="Food" />
                  </div>
                  <div>
                    <h3 className="feature-grid_title box-title">Desserts</h3>
                    <p className="feature-grid_text mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <NavLink to="#" className="th-btn style7">
                      VIEW MORE
                      <i className="fa-solid fa-arrow-right ms-2" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space shape-mockup-wrap">
            <div
              className="shape-mockup moving d-none d-lg-block"
              style={{top:"10%", left:"3%"}}
              data-top="10%"
              data-left="3%"
            >
              <img src="assets/img/update_2/shape/tree_2.png" alt="shape" />
            </div>
            <div
              className="shape-mockup jump d-none d-lg-block"
              style={{bottom:"10px", right:"1%"}}
              data-bottom="10%"
              data-right="1%"
            >
              <img src="assets/img/update_2/shape/tomato_6.png" alt="shape" />
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-4 text-center text-xl-start">
                  <div className="title-area mb-25">
                    <span className="sub-title">Why Choose Us</span>
                    <h2 className="sec-title">Discover art of Food with us.</h2>
                  </div>
                  <p className="mt-n2 mb-30">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-xl-8 mt-40 mt-xl-0">
                  <div className="row gy-4 justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                      <div className="why-feature">
                        <div className="why-feature_icon">
                          <img
                            src="assets/img/update_2/icon/why_feature_1.svg"
                            alt="icon"
                          />
                        </div>
                        <h3 className="why-feature_title">Quality Foods</h3>
                        <p className="why-feature_text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="why-feature">
                        <div className="why-feature_icon">
                          <img
                            src="assets/img/update_2/icon/why_feature_2.svg"
                            alt="icon"
                          />
                        </div>
                        <h3 className="why-feature_title">Table reservation</h3>
                        <p className="why-feature_text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="why-feature">
                        <div className="why-feature_icon">
                          <img
                            src="assets/img/update_2/icon/why_feature_3.svg"
                            alt="icon"
                          />
                        </div>
                        <h3 className="why-feature_title">Online Order</h3>
                        <p className="why-feature_text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="space bg-title position-relative"
            style={{ backgroundImage: "url(assets/img/bg/booking_bg_2.png)" }}
            data-bg-src="assets/img/bg/booking_bg_2.png"
          >
            <div className="container th-container">
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-auto">
                  <div className="available-table">
                    <h3 className="available-table_title">Opening Time</h3>
                    <p className="available-table_info">
                      <span>Monday – Thursday</span>
                      <span>
                        12:00 – 15:00 <br />
                        17:00 to 23:00
                      </span>
                    </p>
                    <p className="available-table_info">
                      <span>Friday - Saturday</span>
                      <span>12:00 – 23:00</span>
                    </p>
                    <h3 className="available-table_title style2">Call Now</h3>
                    <NavLink to="tel:442083557032" className="available-table_call">
                      +44 20 8355 7032
                    </NavLink>
                  </div>
                </div>
                <div className="col-xl-auto">
                  <h2 className="sec-title text-center text-white">
                    Book A Table{" "}
                    <span className="font-style text-theme">Now!</span>
                  </h2>
                  <form
                    action="#"
                    method="POST"
                    className="booking-form style2"
                  >
                    <div className="row">
                      <div className="form-group col-lg-6 col-sm-6">
                        <input
                          type="text"
                          className="form-control rounded-2"
                          id="Name"
                          name="Name"
                          placeholder="Name"
                        />{" "}
                        <i className="far fa-user" />
                      </div>
                      <div className="form-group col-lg-6 col-sm-6">
                        <input
                          type="tel"
                          className="form-control rounded-2"
                          id="number"
                          name="number"
                          placeholder="Phone Number"
                        />{" "}
                        <i className="far fa-phone" />
                      </div>
                      <div className="form-group col-lg-4">
                        <input
                          type="text"
                          className="form-control date-pick"
                          id="date-pick"
                          name="date"
                          placeholder="Select Date"
                        />{" "}
                        <i className="fal fa-calendar-days" />
                      </div>
                      <div className="form-group col-lg-4">
                        <input
                          type="text"
                          className="form-control time-pick"
                          id="time-pick"
                          name="time"
                          placeholder="Select-time"
                        />{" "}
                        <i className="fal fa-clock" />
                      </div>
                      <div className="form-group col-lg-4">
                        <input
                          type="number"
                          className="form-control"
                          name="guest"
                          id="guest"
                          placeholder="Number of People"
                        />{" "}
                        <i className="fal fa-user-group" />
                      </div>
                      <div className="form-btn col-12 text-center">
                        <button className="th-btn style3">
                          SUBMIT REQUEST <i className="fa-solid fa-arrow-right ms-2" />
                        </button>
                      </div>
                    </div>
                    <p className="form-messages mb-0 mt-3" />
                  </form>
                </div>
              </div>
              <div
                className="available-table-bg"
                style={{ backgroundImage: "url(assets/img/bg/table_bg_1.jpg)" }}
                data-bg-src="assets/img/bg/table_bg_1.jpg"
              />
            </div>
          </section>

          <div className="space-top shape-mockup-wrap">
            <div className="container">
              <div
                className="download-area bg-smoke2"
                style={{
                  backgroundImage: "url(assets/img/bg/download_bg_1.png)",
                }}
                data-bg-src="assets/img/bg/download_bg_1.png"
              >
                <div className="row">
                  <div className="col-xl-6 col-xxl-5 col-lg-7 col-md-9">
                    <div className="title-area mb-30">
                      <span className="sub-title">Download App</span>
                      <h2 className="sec-title">
                        Best App For Foods Ordering{" "}
                        <span className="font-style text-theme">Now</span>
                      </h2>
                    </div>
                    <p className="mt-n2 mb-4">
                      Assertively underwhelm next-generation systems before
                      pandemic action items. Synergistically re-engineer client
                      based "outside.
                    </p>
                    <div className="download-btn-wrap">
                      <NavLink
                        target="_blank"
                        to="https://play.google.com/"
                        className="download-btn"
                      >
                        <i className="fa-brands fa-google-play" />
                        <div className="text-group">
                          <span className="small-text">Download From</span>
                          <h6 className="big-text">Google Play</h6>
                        </div>
                      </NavLink>
                      <NavLink
                        target="_blank"
                        to="https://www.apple.com/store"
                        className="download-btn bg-theme2"
                      >
                        <i className="fa-brands fa-apple" />
                        <div className="text-group">
                          <span className="small-text">Download From</span>
                          <h6 className="big-text">App Store</h6>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="shape-mockup leaf jump"
              style={{top:"10%", right:"0"}}
              data-top="10%"
              data-right={0}
            >
              <img src="assets/img/shape/leaf_1.png" alt="shape" />
            </div>
            <div
              className="shape-mockup leaf jump-reverse"
              style={{top:"30%", left:"2%"}}
              data-top="30%"
              data-left="2%"
            >
              <img src="assets/img/shape/chips_1.png" alt="shape" />
            </div>
          </div>
         
         <Testimonial/> 

          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
