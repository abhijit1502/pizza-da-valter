import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { Link, NavLink } from "react-router-dom";
import Testimonial from "./Testimonial";
import AboutUsSeo from "../../seo/AboutusSeo";
function AboutUs() {
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
    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 300); // Simulating a 1-second delay
  }, []);
  return (
    <>
      <AboutUsSeo />
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
                <h1 className="breadcumb-title">About Us</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>

          {/* About Us Section   S T A R T */}
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

          <section className="space shape-mockup-wrap bg-smoke2" style={{backgroundImage:'url("assets/img/update_2/bg/testi_bg_4.png")'}}>
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
                      <a
                        target="_blank"
                        href="https://play.google.com/"
                        className="download-btn"
                      >
                        <i className="fa-brands fa-google-play" />
                        <div className="text-group">
                          <span className="small-text">Download From</span>
                          <h6 className="big-text">Google Play</h6>
                        </div>
                      </a>
                      <a
                        target="_blank"
                        href="https://www.apple.com/store"
                        className="download-btn bg-theme2"
                      >
                        <i className="fa-brands fa-apple" />
                        <div className="text-group">
                          <span className="small-text">Download From</span>
                          <h6 className="big-text">App Store</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="shape-mockup leaf jump"
              style={{ top: "10%", right: "0" }}
              data-top="10%"
              data-right={0}
            >
              <img src="assets/img/shape/leaf_1.png" alt="shape" />
            </div>
            <div
              className="shape-mockup leaf jump-reverse"
              style={{ top: "30%", left: "2%" }}
              data-top="30%"
              data-left="2%"
            >
              <img src="assets/img/shape/chips_1.png" alt="shape" />
            </div>
          </div>
          {/* Testimonial section  S T A R T */}
          <Testimonial />

          <Footer />
        </div>
      )}
    </>
  );
}

export default AboutUs;
