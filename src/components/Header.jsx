import React, { useEffect, useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isPortrait, setIsPortrait] = useState(
    window.matchMedia("(orientation: portrait)").matches
  );
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCloseButtonClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than 50 pixels
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  useEffect(() => {
    const handleOrientationChange = (event) => {
      setIsPortrait(event.matches);
    };

    const mediaQuery = window.matchMedia("(orientation: portrait)");

    // Initial setup
    setIsPortrait(mediaQuery.matches);

    // Add event listener for orientation change
    mediaQuery.addEventListener("change", handleOrientationChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  const navbarClasses = `header header-transparent dark ${
    isSticky ? "header-fixed" : ""
  }`;
  return (
    <>
      {/* Back To Top Start */}
      <button id="back-top" className="back-to-top">
        <i className="fa-regular fa-arrow-up" />
      </button>
      {/* Offcanvas Area Start */}
      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <NavLink to="/">
                    <img src="assets/img/logo/logo.png" alt="logo-img" />
                  </NavLink>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix mb-3" />
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <NavLink target="_blank" to="#">
                        Main Street, Melbourne, Australia
                      </NavLink>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <NavLink to="tel:+013-003-003-9993">
                        <span className="mailto:info@enofik.com">
                          info@fresheat.com
                        </span>
                      </NavLink>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <NavLink target="_blank" to="#">
                        Mod-friday, 09am -05pm
                      </NavLink>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <NavLink to="tel:+11002345909">+11002345909</NavLink>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <NavLink to="shop.html" className="theme-btn">
                    <span className="button-content-wrapper d-flex align-items-center justify-content-center">
                      <span className="button-icon">
                        <i className="fa-sharp fa-regular fa-cart-shopping bg-transparent text-white me-2" />
                      </span>
                      <span className="button-text">ORDER NOW</span>
                    </span>
                  </NavLink>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <NavLink to="#">
                    <i className="fab fa-facebook-f" />
                  </NavLink>
                  <NavLink to="#">
                    <i className="fab fa-twitter" />
                  </NavLink>
                  <NavLink to="#">
                    <i className="fab fa-youtube" />
                  </NavLink>
                  <NavLink to="#">
                    <i className="fab fa-linkedin-in" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay" />
      {/* Header Section Start */}
      <header className="header-section">
        <div className="black-bg" />
        <div className="red-bg" />
        <div className="container-fluid">
          <div className="main-header-wrapper">
            <div className="logo-image">
              <NavLink to="/">
                <img src="assets/img/logo/logo.png" alt="img" />
              </NavLink>
            </div>
            <div className="main-header-items">
              <div className="header-top-wrapper">
                <div className="social-icon d-flex align-items-center">
                  <span>Follow Us:</span>
                  <NavLink to="#">
                    <i className="fab fa-facebook-f" />
                  </NavLink>
                  <NavLink to="#">
                    <i className="fab fa-twitter" />
                  </NavLink>
                  <NavLink to="#">
                    <i className="fab fa-youtube" />
                  </NavLink>
                  <NavLink to="#">
                    <i className="fab fa-linkedin-in" />
                  </NavLink>
                </div>
              </div>
              <div id="header-sticky" className="header-1">
                <div className="mega-menu-wrapper">
                  <div className="header-main">
                    <div className="logo">
                      <NavLink to="/" className="header-logo">
                        <img src="assets/img/logo/logo.png" alt="logo-img" />
                      </NavLink>
                    </div>
                    <div className="header-left">
                      <div className="mean__menu-wrapper">
                        <div className="main-menu">
                          <nav id="mobile-menu" className="d-none d-sm-block">
                            <ul>
                              <li className="active menu-thumb">
                                <NavLink to="/">Home</NavLink>
                              </li>
                              <li className="active menu-thumb">
                                <NavLink to="/">About Us</NavLink>
                              </li>
                              <li className="has-dropdown">
                                <NavLink to="/">
                                  Menu
                                  <i className="fa-regular fa-plus" />
                                </NavLink>
                                <ul className="submenu">
                                  <li>
                                    <NavLink to="/">Drinks</NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/">Foods</NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/">Desserts</NavLink>
                                  </li>
                                </ul>
                              </li>
                              <li className="active menu-thumb">
                                <NavLink to="/">Blogs</NavLink>
                              </li>
                              <li className="active menu-thumb">
                                <NavLink to="/">Conatct Us</NavLink>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                    <div className="header-right d-flex justify-content-end align-items-center">
                      <NavLink className="theme-btn" to="/">
                        ORDER NOW
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </NavLink>
                      <div className="header__hamburger d-block d-sm-none my-auto">
                        <div className="sidebar__toggle">
                          <i className="fas fa-bars" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
