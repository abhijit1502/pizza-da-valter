import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { Link, NavLink } from "react-router-dom";
import DessertSeo from "../../seo/DessertSeo";

function Dessert() {
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
      <DessertSeo />
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
                <h1 className="breadcumb-title">Dessert</h1>
                <ul className="breadcumb-menu">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>Dessert</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dessert Section   S T A R T */}
         <section className="space bg-smoke2" data-bg-src="assets/img/bg/product_bg_1.png">
           <div className="container">
              <div className="title-area text-center">
                <span className="sub-title">Popular Menu</span>
                <h2 className="sec-title">Our Popular Delicious <span className="font-style text-theme">Dessert</span></h2>     
              </div>
              <div className="nav food-menu-tab" role="tablist" style={{display:'none'}}>
                <button className="tab-btn active" id="nav-one-tab" data-bs-toggle="tab" data-bs-target="#nav-one" type="button" role="tab" aria-controls="nav-one" aria-selected="true">FAST FOODS</button>
                <button className="tab-btn" id="nav-two-tab" data-bs-toggle="tab" data-bs-target="#nav-two" type="button" role="tab" aria-controls="nav-two" aria-selected="false">HEALTHY FOODS</button>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="nav-one" role="tabpanel" aria-labelledby="nav-one-tab">
                <div className="row gy-4">
            <div className="col-lg-6">
              <div className="th-product list-view align-items-center align-items-center">
                <div className="product-img">
                  <img src="assets/img/menu/desserts/home-made-tiramisu.png" alt="Homemade Tiramisu" />
                </div>
                <div className="product-content">
                  <h3 className="product-title">
                    <NavLink to="/">Homemade Tiramisu</NavLink>
                  </h3>
                  <p className="product-text">
                                        <br/>
                                      </p>
                  <span className="price">
                  £6.50
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="th-product list-view align-items-center">
                <div className="product-img">
                  <img src="assets/img/menu/desserts/chocolate-fondant.png" alt="Chocolate Fondant" />
                </div>
                <div className="product-content">
                  <h3 className="product-title">
                    <NavLink to="/">Chocolate Fondant</NavLink>
                  </h3>
                  <p className="product-text">
                                        <br/>
                                      </p>
                  <span className="price">
                  £6.50 <span>(with vanilla ice cream)</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="th-product list-view align-items-center">
                <div className="product-img">
                  <img src="assets/img/menu/desserts/panna-cotta.png" alt="Panna Cotta" />
                </div>
                <div className="product-content">
                  <h3 className="product-title">
                    <NavLink to="/">Panna Cotta</NavLink>
                  </h3>
                  <p className="product-text">
                                        <br/>
                                      </p>
                  <span className="price">£6.50</span>       
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="th-product list-view align-items-center">
                <div className="product-img">
                  <img src="assets/img/menu/desserts/pizza-nutella.png" alt="Pizza Nutella" />
                </div>
                <div className="product-content">
                  <h3 className="product-title">
                    <NavLink to="/">Pizza Nutella</NavLink>
                  </h3>
                  <p className="product-text">
                                        <br/>
                                      </p>
                  <span className="price">£7.95</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="th-product list-view align-items-center">
                <div className="product-img">
                  <img src="assets/img/menu/desserts/cannolo-siciliano.png" alt="Cannolo Siciliano" />
                </div>
                <div className="product-content">
                  <h3 className="product-title">
                    <NavLink to="/">Cannolo Siciliano</NavLink>
                  </h3>
                  <p className="product-text">
                                        <br/>
                                      </p>
                  <span className="price">£6.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="th-product list-view align-items-center">
                <div className="product-img">
                  <img src="assets/img/menu/desserts/blankdish.png" alt="Sorbet" />
                </div>
                <div className="product-content">
                  <h3 className="product-title">
                    <NavLink to="/">Sorbet</NavLink>
                  </h3>
                  <p className="product-text">
                                        <br/>
                                      </p>
                  <span className="price">
                  1* £3.00 | 2*£4.50 | 3*£6.50
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="th-product list-view align-items-center">
                <div className="product-img">
                  <img src="assets/img/menu/desserts/blankdish.png" alt="Affogato" />
                </div>
                <div className="product-content">
                  <h3 className="product-title">
                    <NavLink to="/">Affogato</NavLink>
                  </h3>
                  <p className="product-text">
                                        <br/>
                                      </p>
                  <span className="price">
                  £5.95
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="th-product list-view align-items-center">
                <div className="product-img">
                  <img src="assets/img/menu/desserts/mixed-ice-crem.png" alt="Mixed Ice Cream" />
                </div>
                <div className="product-content">
                  <h3 className="product-title">
                    <NavLink to="/">Mixed Ice Cream</NavLink>
                  </h3>
                  <p className="product-text">
                                        <br/>
                                      </p>
                  <span className="price">
                  1*£2.50 | 2*£4.50 | 3*£6.00
                  </span>
                </div>
              </div>
            </div>
          </div>

                </div>
                {/* <div className="tab-pane fade" id="nav-two" role="tabpanel" aria-labelledby="nav-two-tab">
            
                </div> */}
              </div>
           </div>
          </section>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Dessert;
