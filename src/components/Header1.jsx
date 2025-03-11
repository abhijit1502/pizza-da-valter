import React, { useEffect, useState } from 'react';
import Logo from '../assets/img/logo.png'
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  const [isSticky, setSticky] = useState(false);
  const [isPortrait, setIsPortrait] = useState(window.matchMedia('(orientation: portrait)').matches);
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
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  useEffect(() => {
    const handleOrientationChange = (event) => {
      setIsPortrait(event.matches);
    };

    const mediaQuery = window.matchMedia('(orientation: portrait)');

    // Initial setup
    setIsPortrait(mediaQuery.matches);

    // Add event listener for orientation change
    mediaQuery.addEventListener('change', handleOrientationChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  const navbarClasses = `header header-light ${isSticky ? 'header-fixed' : ''}`;  
  return (
    <>
  <div>
  {/* Top header  */}
  {/* ============================================================== */}
  {/* Start Navigation */}
  <div className={navbarClasses}>
    <div className="container">
      <nav id="navigation" className={`navigation ${isPortrait ? 'navigation-portrait' : 'navigation-landscape'}`}>
        <div className="nav-header">
          <Link className="nav-brand" to="/"><img src={Logo} className="logo" alt /></Link>
          <div className="nav-toggle" onClick={handleButtonClick}/>
          <div className="mobile_nav">
            <ul>
              <li>
                <Link to="JavaScript:Void(0);" className="btn btn-success"><i className="fas fa-sign-in-alt me-2" />Log In</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`nav-menus-wrapper ${isMenuOpen ? 'nav-menus-wrapper-open' : ''}`} style={{ transitionProperty: isMenuOpen ? 'left' : 'none' }}>
      <span class="nav-menus-wrapper-close-button" onClick={handleCloseButtonClick}>✕</span>
          <ul className="nav-menu">
            <li>
              <Link to="/money-transfer-to-afghanistan">Remit To Afghanistan</Link>
            </li>
            <li><Link to="/help">Help</Link></li>
            <li className="d-block d-sm-none"><Link to="#" target="_blank">Sign up</Link></li>
          </ul>
          <ul className="nav-menu nav-menu-social align-to-right">
            <li>
              <Link to="JavaScript:Void(0);" className="signin"><i className="fa-regular fa-circle-right me-2" />Sign up</Link>
            </li>
            <li className="list-buttons ms-2 light">
              <Link to="JavaScript:Void(0);">Sign in<i className="fas fa-sign-in-alt ms-2" /></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  {/* End Navigation */}
  <div className="clearfix" />
  {/* ============================================================== */}
  {/* Top header  */}
</div>


    <Outlet />
    </>
  )
}

export default Layout