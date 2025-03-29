import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuWrapperRef = React.useRef(null);

  // Script loading with cleanup
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

    const scriptUrls = ["/assets/js/app.min.js", "/assets/js/main.js"];

    const loadScripts = async () => {
      try {
        await Promise.all(scriptUrls.map((url) => loadScript(url)));
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    loadScripts();

    return () => {
      scriptUrls.forEach((url) => {
        const scripts = document.querySelectorAll(`script[src="${url}"]`);
        scripts.forEach((script) => script.remove());
      });
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuWrapperRef.current &&
        !menuWrapperRef.current.contains(e.target) &&
        menuVisible
      ) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuVisible]);

  const toggleMenu = (e) => {
    e?.stopPropagation();
    setMenuVisible((prev) => !prev);

    const menuWrapper = document.querySelector(".th-menu-wrapper");
    if (menuWrapper && menuWrapper.classList.contains("th-body-visible")) {
      menuWrapper.classList.remove("th-body-visible");
    }
  };

  return (
    <>
     <div
        ref={menuWrapperRef}
        className={`th-menu-wrapper ${menuVisible ? "th-body-visible" : ""}`}
      >
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle" onClick={toggleMenu}>
            <i className="fal fa-times" />
          </button>
          <div className="mobile-logo">
            <NavLink to="/">
              <img src="assets/img/logo.png" alt="Pizza De Valter" />
            </NavLink>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li>
                <NavLink to="#">Home</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">About Us</NavLink>
              </li>
              <li className="menu-item-has-children">
                <NavLink to="#">Menu</NavLink>
                <ul className="sub-menu">
                  <li>
                    <NavLink to="/foods">Foods</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dirnks">Drinks</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dessert">Desserts</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  to="https://www.standard.co.uk/going-out/restaurants/best-pizza-london-top-restaurants-a2945776.html"
                  target="_blank"
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/contactus">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="th-header header-layout6">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="far fa-envelope" />
                      <NavLink to="mailto:info@pizzadavalter.co.uk">
                        info@pizzadavalter.co.uk
                      </NavLink>
                    </li>
                    <li>
                      <i className="far fa-location-dot" />7 Bellevue Road,
                      London, SW17 7EG
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-links">
                  <ul>
                    <li>
                      <div className="header-social">
                        {/* <NavLink to="https://www.facebook.com/" target="_blank">
                          <i className="fab fa-facebook-f" />
                        </NavLink>
                        <NavLink to="https://www.twitter.com/" target="_blank">
                          <i className="fab fa-twitter" />
                        </NavLink> */}
                        <NavLink to="https://www.tiktok.com/@pizzadavalter?_t=8qYuz15cy3s&_r=1" target="_blank">
                        <i class="fa-brands fa-tiktok"></i>
                        </NavLink>
                        <NavLink to="https://www.instagram.com/explore/locations/278152442663307/pizza-da-valter-london/" target="_blank">
                          <i className="fab fa-instagram" />
                        </NavLink>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="container">
            <div className="menu-area">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <NavLink to="/">
                      <img src="assets/img/logo.png" alt="Pizza De Valter" />
                    </NavLink>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/aboutus">About Us</NavLink>
                      </li>
                      <li className="menu-item-has-children">
                        <NavLink to="#">Menu</NavLink>
                        <ul className="sub-menu">
                          <li>
                            <NavLink to="/foods">Foods</NavLink>
                          </li>
                          <li>
                            <NavLink to="/dirnks">Drinks</NavLink>
                          </li>
                          <li>
                            <NavLink to="/dessert">Desserts</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink
                          to="https://www.standard.co.uk/going-out/restaurants/best-pizza-london-top-restaurants-a2945776.html"
                          target="_blank"
                        >
                          Blogs
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/contactus">Contact Us</NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-auto">
                  <div className="header-button">
                    <NavLink
                      to="#"
                      className="th-btn style7"
                      onClick={(e) => {
                        e.preventDefault();
                        setMenuVisible(true);
                      }}
                    >
                      Book a Table
                      <i className="fa-solid fa-arrow-right ms-2" />
                    </NavLink>
                    <button
                      type="button"
                      className="th-menu-toggle d-inline-block d-lg-none"
                      onClick={toggleMenu}
                    >
                      <i className="far fa-bars" />
                    </button>
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
