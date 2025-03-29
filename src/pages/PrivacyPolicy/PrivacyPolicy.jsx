import React, {useEffect, useState} from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import {Link, NavLink} from "react-router-dom";
import PrivacyPolicySeo from "../../seo/PrivacyPolicySeo";

function PrivacyPolicy() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => { // Simulate an asynchronous operation (e.g., fetching data)
		setTimeout(() => {
			setIsLoading(false);
		}, 300); // Simulating a 1-second delay
	}, []);
	return (<>
		<PrivacyPolicySeo/> {isLoading ? (
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
												                          <h1 className="breadcumb-title">Privacy Policy</h1>
												                          <ul className="breadcumb-menu">
												                            <li>
												                              <NavLink to="/">Home</NavLink>
												                            </li>
												                            <li>Privacy Policy</li>
												                          </ul>
												                        </div>
												                      </div>
												                    </div>
												
												
												          {/* Blog Details Section    S T A R T */}
												          <div className="space">
												            <div className="container">
                                    <div className="row">
												                  <div className="col-12 col-lg-12">
												                    <div className="blog-post-details">
												                      <div className="single-blog-post">
												                        <div className="post-content">
												                          <p className="mb-3">
												                            <strong>
												                              <em>Last updated December 12, 2024</em>
												                            </strong>
												                          </p>
												                          <p className="mb-3">
												                            This Privacy Notice for Pizza Da Valter ('we', 'us',
												                            or 'our'), describes how and why we might access,
												                            collect, store, use, and/or share ('process') your
												                            personal information when you use our services
												                            ('Services'), including when you:
												                          </p>
												                          <ul className="mb-3 disc-list">
												                            <li>
												                              Download and use our mobile application (Pizza Da
												                              Valter), or any other application of ours that
												                              links to this Privacy Notice
												                            </li>
												                            <li>
												                              Use Pizza Da Valter. Pizza Da Valter brings the
												                              authentic flavors of Italy to your table, offering
												                              a delightful menu filled with traditional Italian
												                              dishes, from wood-fired pizzas and creamy pastas
												                              to fresh salads and decadent desserts. Whether
												                              you're looking to enjoy a cozy dine-in experience
												                              by booking a table or prefer the convenience of a
												                              quick pickup, Pizza Da Valter ensures top-quality
												                              food and exceptional service. Indulge in the rich
												                              taste of Italy, crafted with fresh ingredients and
												                              a passion for great cuisine.
												                            </li>
												                            <li>
												                              Engage with us in other related ways, including
												                              any sales, marketing, or events
												                            </li>
												                          </ul>
												                          <p className="mb-3">
												                            Questions or concerns? Reading this Privacy Notice
												                            will help you understand your privacy rights and
												                            choices. We are responsible for making decisions
												                            about how your personal information is processed. If
												                            you do not agree with our policies and practices,
												                            please do not use our Services. If you still have
												                            any questions or concerns, please contact us at{" "}
												                            <NavLink to="mailto:pizzadavalter.app@gmail.com">
												                              pizzadavalter.app@gmail.com
												                            </NavLink>.												                            
												                          </p>
												
												                          <h4>Summary Of Key Points</h4>
												                          <p className="mb-3">
												                            This summary provides key points from our Privacy
												                            Notice, but you can find out more details about any
												                            of these topics by clicking the link following each
												                            key point or by using our table of contents below to
												                            find the section you are looking for.
												                          </p>
												
												                          <h5 className="mb-3">1. What Information Do We Collect?</h5>
												                          <p className="mb-3">
												                            <strong>
												                              Personal information you disclose to us:
												                            </strong>
												                          </p>
												                          <p className="mb-3">
												                            We collect personal information that you voluntarily
												                            provide to us when you register on the Services,
												                            express an interest in obtaining information about
												                            us or our products and Services, when you
												                            participate in activities on the Services, or
												                            otherwise when you contact us. Personal Information
												                            Provided by You. The personal information that we
												                            collect depends on the context of your interactions
												                            with us and the Services, the choices you make, and
												                            the products and features you use.
												                          </p>
												                          <p className="mb-3">
												                            The personal information we collect may include the
												                            following:
												                          </p>
												                          <ul className="mb-3 disc-list">
												                            <li>Names</li>
												                            <li>Phone numbers</li>
												                            <li>Email addresses</li>
												                            <li>Passwords</li>
												                          </ul>
												                          <p className="mb-3">
												                            <strong>Application Data:</strong>
												                          </p>
												                          <p className="mb-3">
												                            If you use our application(s), we also may collect
												                            the following information if you choose to provide
												                            us with access or permission: Mobile Device Access.
												                            We may request access or permission to certain
												                            features from your mobile device, including your
												                            mobile device's contacts, and other features. If you
												                            wish to change our access or permissions, you may do
												                            so in your device's settings. This information is
												                            primarily needed to maintain the security and
												                            operation of our application(s), for
												                            troubleshooting, and for our internal analytics and
												                            reporting purposes. All personal information that
												                            you provide to us must be true, complete, and
												                            accurate, and you must notify us of any changes to
												                            such personal information. Information automatically
												                            collected In Short: Some information — such as your
												                            Internet Protocol (IP) address and/or browser and
												                            device characteristics — is collected automatically
												                            when you visit our Services. We automatically
												                            collect certain information when you visit, use, or
												                            navigate the Services. This information does not
												                            reveal your specific identity (like your name or
												                            contact information) but may include device and
												                            usage information, such as your IP address, browser
												                            and device characteristics, operating system,
												                            language preferences, referring URLs, device name,
												                            country, location, information about how and when
												                            you use our Services, and other technical
												                            information. This information is primarily needed to
												                            maintain the security and operation of our Services,
												                            and for our internal analytics and reporting
												                            purposes. The information we collect includes:
												                            Location Data. We collect location data such as
												                            information about your device's location, which can
												                            be either precise or imprecise. How much information
												                            we collect depends on the type and settings of the
												                            device you use to access the Services. For example,
												                            we may use GPS and other technologies to collect
												                            geolocation data that tells us your current location
												                            (based on your IP address). You can opt out of
												                            allowing us to collect this information either by
												                            refusing access to the information or by disabling
												                            your Location setting on your device. However, if
												                            you choose to opt out, you may not be able to use
												                            certain aspects of the Services.
												                          </p>
												
												                          <h5 className="mb-3">2. How Do We Process Your Information?</h5>
												                          <p className="mb-3">
												                          In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your personal information for a variety of reasons, depending on how you interact with our Services, including: To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order. To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.
												                          </p>
												
												                          <h5 className="mb-3">3. What Legal Bases Do We Rely On To Process Your Personal Information?</h5>
												                          <p className="mb-3">
												                          In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests. The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information: Consent. We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about withdrawing your consent. Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved. Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.
												                          </p>
												
												                          <h5 className="mb-3">4. When And With Whom Do We Share Your Personal Information?</h5>
												                          <p className="mb-3">
												                          In Short: We may share information in specific situations described in this section and/or with the following third parties. We may need to share your personal information in the following situations: Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
												                          </p>
												
												                          <h5 className="mb-3">5. How Long Do We Keep Your Information?</h5>
												                          <p className="mb-3">
												                          In Short: We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law. We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
												                          </p>
												
												                          <h5 className="mb-3">6. How Do We Keep Your Information Safe?</h5>
												                          <p className="mb-3">
												                          We adopt appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
												                          </p>
												
												                          <h5 className="mb-3">7. What Are Your Privacy Rights?</h5>
												                          <p className="mb-3">
												                          You have certain privacy rights under applicable laws, including the right to access, correct, delete, or limit how we process your personal information. You may also object to the processing of your information under certain conditions. To exercise these rights, contact us at <NavLink to="mailto:pizzadavalter.app@gmail.com">pizzadavalter.app@gmail.com</NavLink>.
												                          </p>
												
												                          <h5 className="mb-3">8. Controls For Do-Not-Track Features</h5>
												                          <p className="mb-3">
												                          Most web browsers and some mobile operating systems allow you to set a "Do Not Track" signal. This is a setting that allows you to express your privacy preference. We honor these settings, but understand that not all platforms support the feature uniformly.
												                          </p>
												
												                          <h5 className="mb-3">9. Do We Make Updates To This Notice?</h5>
												                          <p className="mb-3">
												                          We may update this Privacy Notice from time to time. The latest version will always be posted on this page with an updated "Last updated" date. We encourage you to periodically review this page for any changes.
												                          </p>
												
												                          <h5 className="mb-3">10. How Can You Contact Us About This Notice?</h5>
												                          <p className="mb-4">
												                          If you have questions or concerns about this Privacy Notice or our data practices, you can contact us at:<br/>
												                          Email: <NavLink to="mailto:pizzadavalter.app@gmail.com">pizzadavalter.app@gmail.com</NavLink>
												                          </p>
												
												                          <h5 className="mb-3">11. How Can You Review, Update, Or Delete The Data We Collect From You?</h5>
												                          <p className="mb-3">
												                          You can contact us to request access to the personal data we hold about you, to request corrections, updates, or deletions to this data. Please reach out to <NavLink to="mailto:pizzadavalter.app@gmail.com">pizzadavalter.app@gmail.com</NavLink>.
												                          </p>
												                        </div>
												                      </div>
												                    </div>
												                  </div>
												                </div>
												            </div>
												          </div>
												
												          <Footer />
												        </div>
												      )}
												    </>
	);
	}

	export default PrivacyPolicy;
