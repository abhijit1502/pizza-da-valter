import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Banner() {
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  useEffect(() => {
    const tiltScript = document.createElement("script");
    tiltScript.src = "assets/js/tilt.min.js";
    tiltScript.async = true;
    tiltScript.onload = () => {
      if (window.VanillaTilt) {
        window.VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
          max: 15,
          speed: 300,
          glare: true,
          "max-glare": 0.5,
        });
      }
    };
    document.body.appendChild(tiltScript);

    const wowScript = document.createElement("script");
    wowScript.src = "assets/js/wow.min.js";
    wowScript.async = true;
    wowScript.onload = () => {
      if (window.WOW) {
        new window.WOW().init();
      }
    };
    document.body.appendChild(wowScript);
  }, []);

  return (
    <section className="banner-section fix">
      <div className="slider-area banner-slider-area">
      <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{ nextEl: ".arrow-next", prevEl: ".arrow-prev" }}
          pagination={{
            el: ".swiper-pagination .pagination-class",
            clickable: true,
          }}
          className="swiper banner-slider"
          onSlideChange={(swiper) => {
            if (swiper.realIndex === 0) {
              setIsFirstSlide(true);
              new window.WOW().init(); // Re-initialize WOW.js when first slide appears
            } else {
              setIsFirstSlide(false);
            }
          }}
        >
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="banner-wrapper style1 bg-img">
                  <div
                    className="shape1_1 d-none d-xxl-block wow fadeIn"
                    data-wow-duration="2s"
                    data-wow-delay=".3s"
                  >
                    <img
                      src="assets/img/shape/bannerShape1_1.svg"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="shape1_2 d-none d-xxl-block wow fadeIn"
                    data-wow-duration="2s"
                    data-wow-delay=".3s"
                  >
                    <img
                      src="assets/img/shape/bannerShape1_2.svg"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="shape1_3 d-none d-xxl-block wow fadeIn"
                    data-wow-duration="3s"
                    data-wow-delay=".3s"
                  >
                    <img
                      src="assets/img/shape/bannerShape1_3.svg"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="shape1_4 d-none d-xxl-block wow fadeIn"
                    data-wow-duration="2s"
                    data-wow-delay=".3s"
                  >
                    <img
                      src="assets/img/shape/bannerShape1_4.svg"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="shape1_5 d-none d-xxl-block wow fadeIn"
                    data-wow-duration="2s"
                    data-wow-delay=".3s"
                  >
                    <img
                      src="assets/img/shape/bannerShape1_5.svg"
                      alt="shape"
                    />
                  </div>
                  <div className="shape1_6 d-none d-xxl-block cir36">
                    <img
                      src="assets/img/shape/bannerShape1_6.svg"
                      alt="shape"
                    />
                  </div>
                  <div className="overlay" />
                  <div className="banner-container">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 col-xxl-6">
                          <div className="banner-title-area">
                            <div className="banner-style1">
                              <div className="section-title wow fadeInDown"  data-wow-duration="2s" data-wow-delay=".6s">
                                <h6 className="sub-title">WELCOME PIZZA DA VALTER</h6>
                                <h1 className="title">SPICY FRIED CHICKEN</h1>
                                <a className="theme-btn" href="contact.html">
                                  ORDER NOW{" "}
                                  <i className="fa-sharp fa-regular fa-arrow-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6 d-none d-xxl-block">
                          <div className="banner-thumb-area wow fadeInDown"  data-wow-duration="2s" data-wow-delay=".6s" data-tilt>
                            <img
                              src="assets/img/banner/bannerThumb1_1.png"
                              alt="shape"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="banner-wrapper style1 bg-img">
                  <div
                    className="shape1_1 d-none d-xxl-block wow fadeIn"
                    data-wow-duration="3s"
                    data-wow-delay=".3s"
                  >
                    <img
                      src="assets/img/shape/bannerShape1_1.svg"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="shape1_2 d-none d-xxl-block wow fadeIn"
                    data-wow-duration="3s"
                    data-wow-delay=".3s"
                  >
                    <img
                      src="assets/img/shape/bannerShape1_2.svg"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="shape1_3 d-none d-xxl-block wow fadeIn"
                    data-wow-duration="3s"
                    data-wow-delay=".3s"
                  >
                    <img
                      src="assets/img/shape/bannerShape1_3.svg"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="shape1_4 d-none d-xxl-block float-bob-x wow fadeIn"
                    data-wow-duration="3s"
                    data-wow-delay=".3s"
                  >
                    <img
                      src="assets/img/shape/bannerShape1_4.svg"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="shape1_5 d-none d-xxl-block wow fadeIn"
                    data-wow-duration="3s"
                    data-wow-delay=".3s"
                  >
                    <img
                      src="assets/img/shape/bannerShape1_5.svg"
                      alt="shape"
                    />
                  </div>
                  <div className="shape1_6 d-none d-xxl-block cir36">
                    <img
                      src="assets/img/shape/bannerShape1_6.svg"
                      alt="shape"
                    />
                  </div>
                  <div className="overlay" />
                  <div className="banner-container">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 col-xxl-6">
                          <div className="banner-title-area">
                            <div className="banner-style1">
                              <div className="section-title wow fadeInDown"  data-wow-duration="2s" data-wow-delay=".7s">
                                <h6 className="sub-title">WELCOME PIZZA DA VALTER</h6>
                                <h1 className="title">
                                  Chicago Deep Pizza King
                                </h1>
                                <a className="theme-btn" href="menu.html">
                                  ORDER NOW{" "}
                                  <i className="fa-sharp fa-regular fa-arrow-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6 d-none d-xxl-block">
                          <div className="banner-thumb-area wow fadeInDown"  data-wow-duration="2s" data-wow-delay=".7s" data-tilt>
                            <img
                              src="assets/img/banner/bannerThumb1_2.png"
                              alt="shape"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="banner-wrapper style1 bg-img">
                  <div
                    className="shape1_1 d-none d-xxl-block wow fadeIn"
                    data-wow-duration="3s"
                    data-wow-delay=".3s"
                  >
                    <img
                      src="assets/img/shape/bannerShape1_1.svg"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="shape1_2 d-none d-xxl-block"
                    data-animation="slideInLeft"
                    data-wow-duration="2s"
                    data-wow-delay=".3s"
                  >
                    <img
                      src="assets/img/shape/bannerShape1_2.svg"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="shape1_3 d-none d-xxl-block wow fadeIn"
                    data-wow-duration="3s"
                    data-wow-delay=".3s"
                  >
                    <img
                      src="assets/img/shape/bannerShape1_3.svg"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="shape1_4 d-none d-xxl-block wow fadeIn"
                    data-wow-duration="3s"
                    data-wow-delay=".3s"
                  >
                    <img
                      src="assets/img/shape/bannerShape1_4.svg"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="shape1_5 d-none d-xxl-block wow fadeIn"
                    data-wow-duration="3s"
                    data-wow-delay=".3s"
                  >
                    <img
                      src="assets/img/shape/bannerShape1_5.svg"
                      alt="shape"
                    />
                  </div>
                  <div className="shape1_6 d-none d-xxl-block cir36">
                    <img
                      src="assets/img/shape/bannerShape1_6.svg"
                      alt="shape"
                    />
                  </div>
                  <div className="overlay" />
                  <div className="banner-container">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 col-xxl-6">
                          <div className="banner-title-area">
                            <div className="banner-style1">
                              <div className="section-title wow fadeInDown"  data-wow-duration="2s" data-wow-delay=".8s">
                                <h6 className="sub-title">WELCOME PIZZA DA VALTER</h6>
                                <h1 className="title">
                                  Chicago Deep Burger King
                                </h1>
                                <a className="theme-btn" href="menu.html">
                                  ORDER NOW{" "}
                                  <i className="fa-sharp fa-regular fa-arrow-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6 d-none d-xxl-block">
                          <div className="banner-thumb-area wow fadeInDown"  data-wow-duration="2s" data-wow-delay=".8s" data-tilt>
                            <img
                              src="assets/img/banner/bannerThumb1_3.png"
                              alt="shape"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="arrow-prev">
          <img src="assets/img/icon/arrowPrev.svg" alt="Prev" />
        </div>
        <div className="arrow-next">
          <img src="assets/img/icon/arrowNext.svg" alt="Next" />
        </div>
        <div className="pagination-class swiper-pagination" />
      </div>
    </section>
  );
}

export default Banner;
