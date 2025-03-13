import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [dropdownState, setDropdownState] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleDropdown = (index) => {
    setDropdownState((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {/* Back To Top Button */}
      <button
        id="back-top"
        className={`back-to-top ${showBackToTop ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <i className="fa-regular fa-arrow-up" />
      </button>

      {/* Offcanvas Area */}
      <div className="fix-area">
        <div className={`offcanvas__info ${isSidebarOpen ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <NavLink to="/">
                    <img src="assets/img/logo/logo.png" alt="logo-img" />
                  </NavLink>
                </div>
                <div className="offcanvas__close" onClick={closeSidebar}>
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>

              <div className="mobile-menu fix mb-3 mean-container">
                <div className="mean-bar">
                  <NavLink
                    to="#nav"
                    className="meanmenu-reveal"
                    style={{ right: 0, left: "auto", display: "inline" }}
                  >
                    <span>
                      <span>
                        <span />
                      </span>
                    </span>
                  </NavLink>
                  <nav className="mean-nav">
                    <ul style={{ display: "none" }}>
                      <li>
                        <NavLink to="/" className="border-none">
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/aboutus" className="border-none">
                          About Us
                        </NavLink>
                      </li>
                      <li
                        className={`has-dropdown ${
                          dropdownState[0] ? "dropdown-opened" : ""
                        }`}
                      >
                        <NavLink to="/" className="border-none">
                          Menu <i className="fa-regular fa-plus" />
                        </NavLink>
                        <ul
                          className="submenu"
                          style={{
                            display: dropdownState[0] ? "block" : "none",
                          }}
                        >
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
                        <NavLink
                          className={`mean-expand ${
                            dropdownState[0] ? "mean-clicked" : ""
                          }`}
                          to="/"
                          style={{ fontSize: 18 }}
                          onClick={(e) => {
                            e.preventDefault();
                            toggleDropdown(0); // Unique index for first dropdown
                          }}
                        >
                          <i className="far fa-plus" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="https://www.standard.co.uk/going-out/restaurants/best-pizza-london-top-restaurants-a2945776.html" target="_blank" className="border-none">
                          Blogs
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/contactus" className="border-none">
                          Contact Us
                        </NavLink>
                      </li>
                      {/* <li
                        className={`has-dropdown ${
                          dropdownState[1] ? "dropdown-opened" : ""
                        }`}
                      >
                        <NavLink to="/" className="border-none">
                          Home <i className="fa-regular fa-plus" />
                        </NavLink>
                        <ul
                          className="submenu"
                          style={{
                            display: dropdownState[1] ? "block" : "none",
                          }}
                        >
                          <li>
                            <NavLink to="/">Home 01</NavLink>
                          </li>
                          <li>
                            <NavLink to="index-3.html">Home 02</NavLink>
                          </li>
                          <li>
                            <NavLink to="index-4.html">Home 03</NavLink>
                          </li>
                        </ul>
                        <NavLink
                          className={`mean-expand ${
                            dropdownState[1] ? "mean-clicked" : ""
                          }`}
                          to="/"
                          style={{ fontSize: 18 }}
                          onClick={(e) => {
                            e.preventDefault();
                            toggleDropdown(1); // Unique index for second dropdown
                          }}
                        >
                          <i className="far fa-plus" />
                        </NavLink>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-baseline">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <NavLink target="_blank" to="https://maps.app.goo.gl/de6dVWNiz98cYef98">
                      7 Bellevue Road, London, SW17 7EG
                      </NavLink>
                    </div>
                  </li>
                  <li className="d-flex align-items-baseline">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <NavLink to="mailto:info@pizzadavalter.co.uk">
                        <span className="mailto:info@pizzadavalter.co.uk">
                        info@pizzadavalter.co.uk
                        </span>
                      </NavLink>
                    </div>
                  </li>
                  <li className="d-flex align-items-baseline">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <NavLink to="/">
                      Monday – Thursday: 12:00am – 15:00pm & 17:00pm to 23:00am<br/>
                      Friday - Saturday: 12:00am – 23:00pm
                      </NavLink>
                    </div>
                  </li>
                  <li className="d-flex align-items-baseline">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <NavLink to="tel:442083557032">+44 20 8355 7032</NavLink>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <NavLink to="/" className="theme-btn">
                    <span className="button-content-wrapper d-flex align-items-center justify-content-center">
                      <span className="button-icon">
                        <i className="fa-sharp fa-regular fa-cart-shopping bg-transparent text-white me-2" />
                      </span>
                      <span className="button-text">BOOK NOW</span>
                    </span>
                  </NavLink>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <NavLink to="/">
                    <i className="fab fa-facebook-f" />
                  </NavLink>
                  <NavLink to="/">
                    <i className="fab fa-twitter" />
                  </NavLink>
                  <NavLink to="/">
                    <i className="fab fa-youtube" />
                  </NavLink>
                  <NavLink to="/">
                    <i className="fab fa-linkedin-in" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`offcanvas__overlay ${isSidebarOpen ? "overlay-open" : ""}`}
        onClick={closeSidebar}
      />

      {/* Header Section */}
      <header className={`header-section ${isSticky ? "header-fixed" : ""}`}>
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
              <marquee>
                <h4 className="text-white">
                Open Every Day! 🍕 Savor the Authentic Flavors of Italy, One Perfect Slice at a Time! 🍕
                </h4>               
              </marquee>

                {/* <div className="social-icon d-flex align-items-center">
                  <span>Follow Us:</span>
                  <NavLink to="/">
                    <i className="fab fa-facebook-f" />
                  </NavLink>
                  <NavLink to="/">
                    <i className="fab fa-twitter" />
                  </NavLink>
                  <NavLink to="/">
                    <i className="fab fa-youtube" />
                  </NavLink>
                  <NavLink to="/">
                    <i className="fab fa-linkedin-in" />
                  </NavLink>
                </div> */}
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
                                <NavLink to="/aboutus">About Us</NavLink>
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
                                <NavLink to="https://www.standard.co.uk/going-out/restaurants/best-pizza-london-top-restaurants-a2945776.html" target="_blank">Blogs</NavLink>
                              </li>
                              <li className="active menu-thumb">
                                <NavLink to="/contactus">Contact Us</NavLink>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                    <div className="header-right d-flex justify-content-end align-items-center">
                      <NavLink className="theme-btn" to="/">
                        BOOK NOW
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </NavLink>
                      {/* Sidebar Toggle Button */}
                      <div className="header__hamburger d-block d-sm-none my-auto">
                        <div
                          className="sidebar__toggle"
                          onClick={toggleSidebar}
                        >
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
