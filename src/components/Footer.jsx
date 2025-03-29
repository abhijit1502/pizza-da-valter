import React from "react";
import {Link, NavLink} from "react-router-dom";
const Footer = () => {
	return (
		<> {/* Footer Section    S T A R T */}
			<footer className="footer-wrapper footer-layout5" data-bg-src="assets/img/update_2/bg/footer_bg_7.png">
				<div className="widget-area">
					<div className="container">
						<div className="row justify-content-between">
							<div className="col-md-6 col-xl-3">
								<div className="widget footer-widget">
									<h3 className="widget_title">About Restaurant</h3>
									<div className="th-widget-about">
										<p className="about-text">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											                      sed do eiusmod tempor incididunt ut labore et dolore magna
											                      aliqua.
										</p>
										<div className="th-social">
											{/* <NavLink to="https://www.facebook.com/">
                        <i className="fab fa-facebook-f" />
                      </NavLink>
                      <NavLink to="https://www.twitter.com/">
                        <i className="fab fa-twitter" />
                      </NavLink> */}
											<NavLink to="https://www.tiktok.com/@pizzadavalter?_t=8qYuz15cy3s&_r=1" target="_blank">
												<i class="fa-brands fa-tiktok"></i>
											</NavLink>
											<NavLink to="https://www.instagram.com/explore/locations/278152442663307/pizza-da-valter-london/" target="_blank">
												<i className="fab fa-instagram"/>
											</NavLink>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-auto">
								<div className="widget widget_nav_menu footer-widget">
									<h3 className="widget_title">Quick Links</h3>
									<div className="menu-all-pages-container">
										<ul className="menu">
											<li>
												<NavLink to="/aboutus">About Us</NavLink>
											</li>
											<li>
												<NavLink to="https://www.standard.co.uk/going-out/restaurants/best-pizza-london-top-restaurants-a2945776.html" target="_blank">Blogs</NavLink>
											</li>
											<li>
												<NavLink to="/contactus">Contact Us</NavLink>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-auto">
								<div className="widget widget_nav_menu footer-widget">
									<h3 className="widget_title">Legal Links</h3>
									<div className="menu-all-pages-container">
										<ul className="menu">
											<li>
												<NavLink to="privacypolicy">Privacy policy</NavLink>
											</li>
											<li>
												<NavLink to="https://ratings.food.gov.uk/business/1572108" target="_blank">Allergen information</NavLink>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-auto">
								<div className="widget footer-widget">
									<h3 className="widget_title">Contact Now</h3>
									<div className="th-widget-contact">
										<div className="info-box">
											<div className="info-box_icon">
												<i className="fal fa-location-dot"/>
											</div>
											<p className="info-box_text">
												7 Bellevue Road, London, SW17 7EG
											</p>
										</div>
										<div className="info-box">
											<div className="info-box_icon">
												<i className="fal fa-mobile-button"/>
											</div>
											<p className="info-box_text">
												<NavLink to="tel:442083557032" className="info-box_link">
													+44 20 8355 7032
												</NavLink>
											</p>
										</div>
										<div className="info-box">
											<div className="info-box_icon">
												<i className="fal fa-envelope"/>
											</div>
											<p className="info-box_text">
												<NavLink to="mailto:info@pizzadavalter.co.uk" className="info-box_link">
													info@pizzadavalter.co.uk
												</NavLink>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="copyright-wrap border-top">
						<div className="row justify-content-center align-items-center">
							<div className="col-lg-6">
								<p className="copyright-text">
									Copyright
									<i className="fal fa-copyright"/>{" "}
									{
									new Date().getFullYear()
								}
									{" "}
									<NavLink to="#">Pizz Da Valter</NavLink>. All Rights Reserved.
										                  | Powered By{" "}
									<NavLink to="https://www.calyx-solutions.com" target="_blank">
										Calyx Solutions
									</NavLink>
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div className="scroll-top">
				<svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
					<path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
						style={
							{
								transition: "stroke-dashoffset 10ms linear 0s",
								strokeDasharray: "307.919, 307.919",
								strokeDashoffset: "307.919"
							}
						}/>
				</svg>
			</div>
		</>
	);
};

export default Footer;
