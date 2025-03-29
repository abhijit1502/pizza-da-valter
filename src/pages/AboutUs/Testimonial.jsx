import React, { useEffect, useState } from "react";

function Testimonial() {
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
    
  return (      
    <section className="overflow-hidden space">
  <div className="shape-mockup jump d-none d-xl-block" data-bottom={0} data-right="5%">
    <img src="assets/img/update_2/shape/french_fry.png" alt="shape" />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-xl-6">
        <div className="pe-xxl-5">
          <div className="title-area mb-40 text-center text-xl-start">
            <span className="sub-title">Testimonials</span>
            <h2 className="sec-title">What customer saying About Services</h2>
          </div>
        </div>
        <div className="testi-card-slide">
          <div className="row th-carousel number-dots" data-slide-show={1} data-lg-slide-show={2} data-md-slide-show={1} data-dots="true" data-xl-dots="true" data-ml-dots="true" data-lg-dots="true" data-md-dots="true">
            <div className="col-xl-4 col-lg-6">
              <div className="testi-card">
                <div className="testi-card_review">
                  <i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" />
                </div>
                <p className="testi-card_text">
                  <i className="fas fa-quote-left" />Pellentesque maximus velit ligula, amet efficitur neque condimentum eu. et odio elementum, sollicitudin Ipsum quis, rutrum sapien. Aenean in posuere elit, sed Dignissim justo. Nunc ut
                  aliquet turpis<i className="fas fa-quote-right" />
                </p>
                <div className="testi-card_profile">
                  <div className="testi-card_avater"><img src="assets/img/update_2/normal/testi_4_1.jpg" alt="Avater" /></div>
                  <div className="media-body">
                    <h3 className="testi-card_name">Rayan Kook</h3><span className="testi-card_desig">NYC, USA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="testi-card">
                <div className="testi-card_review"><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /></div>
                <p className="testi-card_text">
                  <i className="fas fa-quote-left" />Pellentesque maximus velit ligula, amet efficitur neque condimentum eu. et odio elementum, sollicitudin Ipsum quis, rutrum sapien. Aenean in posuere elit, sed Dignissim justo. Nunc ut
                  aliquet turpis<i className="fas fa-quote-right" />
                </p>
                <div className="testi-card_profile">
                  <div className="testi-card_avater"><img src="assets/img/update_2/normal/testi_4_2.jpg" alt="Avater" /></div>
                  <div className="media-body">
                    <h3 className="testi-card_name">Michel Clark</h3><span className="testi-card_desig">DYM, USA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="testi-card">
                <div className="testi-card_review"><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /></div>
                <p className="testi-card_text">
                  <i className="fas fa-quote-left" />Pellentesque maximus velit ligula, amet efficitur neque condimentum eu. et odio elementum, sollicitudin Ipsum quis, rutrum sapien. Aenean in posuere elit, sed Dignissim justo. Nunc ut
                  aliquet turpis<i className="fas fa-quote-right" />
                </p>
                <div className="testi-card_profile">
                  <div className="testi-card_avater"><img src="assets/img/update_2/normal/testi_4_3.jpg" alt="Avater" /></div>
                  <div className="media-body">
                    <h3 className="testi-card_name">Rosse Mons</h3><span className="testi-card_desig">DO, USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 mt-40 mt-xl-0">
        <div className="testi-card-img">
          <div className="img1"><img src="assets/img/update_2/normal/testi-card_img.png" alt="Image" /></div>
          <div className="shape1"><img src="assets/img/update_2/normal/testi-card_shape_1.png" alt="Image" /></div>
          <div className="shape2"><img src="assets/img/update_2/normal/testi-card_shape_2.png" alt="Image" /></div>
          <div className="shape3"><img src="assets/img/update_2/normal/testi-card_shape_3.png" alt="Image" /></div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default Testimonial;