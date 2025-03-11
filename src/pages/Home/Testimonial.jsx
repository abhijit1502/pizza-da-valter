import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonial() {
  return (
    <section className="testimonial-section fix section-padding bg-white">
      <div className="vagetable-shape">
        <img src="assets/img/testimonial/vagetable-shape.png" alt="img" />
      </div>
      <div className="chili-shape">
        <img src="assets/img/testimonial/chili-shape.png" alt="img" />
      </div>
      <div className="testimonial-wrapper style2">
        <div className="container">
          <div className="testimonial-wrap style2">
            <div className="row gx-80 gy-5">
              <div className="col-xl-7 order-2 order-xl-1">
                <div className="title-area">
                  <div className="sub-title text-start">
                    <img className="me-1" src="assets/img/icon/titleIcon.svg" alt="icon" />
                    TESTIMONIALS
                    <img className="ms-1" src="assets/img/icon/titleIcon.svg" alt="icon" />
                  </div>
                  <h2 className="title text-start">what have lots of happy customer feedback</h2>
                </div>
                <div className="slider-area slider-btn-area">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    navigation={{ nextEl: ".arrow-next", prevEl: ".arrow-prev" }}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Navigation, Pagination]}
                    className="testimonialSliderTwo"
                  >
                    <SwiperSlide>
                      <div className="testimonial-card style2">
                        <div className="quote">
                          <img src="assets/img/icon/quote.svg" alt="icon" />
                        </div>
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                          classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock !
                        </p>
                        <div className="profile-box"></div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial-card style2">
                        <div className="quote">
                          <img src="assets/img/icon/quote.svg" alt="icon" />
                        </div>
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                          classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock !
                        </p>
                        <div className="profile-box"></div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="btn-wrap">
                    <div className="arrow-prev">
                      <i className="fa-regular fa-arrow-left" />
                    </div>
                    <div className="arrow-next">
                      <i className="fa-regular fa-arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 order-1 order-xl-2">
                <div className="testimonial-thumb">
                  <img src="assets/img/testimonial/testimonialThumb2_1.png" alt="thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;