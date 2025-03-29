import React, {useEffect, useState} from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import {Link, NavLink} from "react-router-dom";
import FoodSeo from "../../seo/FoodSeo";

function Food() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => { // Simulate an asynchronous operation (e.g., fetching data)
		setTimeout(() => {
			setIsLoading(false);
		}, 300); // Simulating a 1-second delay
	}, []);
	return (
		<>
			<FoodSeo/> {
			isLoading ? (
				<Loading/>
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
                      <h1 className="breadcumb-title">Foods</h1>
                      <ul className="breadcumb-menu">
                        <li>
                          <NavLink to="/">Home</NavLink>
                        </li>
                        <li>Foods</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Food Section   S T A R T */}
                 <section className="space bg-smoke2" data-bg-src="assets/img/bg/product_bg_1.png">
                    <div className="container">
                        <div className="title-area text-center">
                          <span className="sub-title">Popular Menu</span>
                          <h2 className="sec-title">Our Popular Delicious <span className="font-style text-theme">Foods</span></h2>     
                        </div>
                        <div className="tab-menu2 filter-menu-active" role="tablist">
                          <button className="active" data-filter="*" type="button">All</button>
                          <button data-filter=".nav-appetizers-tab" type="button">Appetizers</button>
                          <button data-filter=".nav-cold-starters-tab" type="button">Cold Starters</button>
                          <button data-filter=".nav-hot-starters-tab" type="button">Hot Starters</button>
                          <button data-filter=".nav-pizza-tab" type="button">Pizza</button>
                          <button data-filter=".nav-pasta-tab" type="button">Pasta</button>
                          <button data-filter=".nav-risotto-tab" type="button">Risotto</button>
                          <button data-filter=".nav-main-courses-tab" type="button">Main Courses</button>
                          <button data-filter=".nav-main-salads-tab" type="button">Main Salads</button>
                          <button data-filter=".nav-sides-tab" type="button">Sides</button>
                        </div>

                          <div className="filter-active">
                           <div className="filter-item nav-appetizers-tab mb-3">
                             <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Sicilian Olives (Nocellara)" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Sicilian Olives (Nocellara)</NavLink>
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
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Bread Basket" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Bread Basket</NavLink>
                                      </h3>
                                      <p className="product-text">
                                        <br/>
                                      </p>
                                      <span className="price">
                                      £3.90
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Garlic Bread" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Garlic Bread</NavLink>
                                      </h3>
                                      <p className="product-text">
                                        <br/>
                                      </p>
                                      <span className="price">£5.90</span>       
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Melted Cheese Bread" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Melted Cheese Bread</NavLink>
                                      </h3>
                                      <p className="product-text">
                                        <br/>
                                      </p>
                                      <span className="price">£6.90</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Montanare" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Montanare</NavLink>
                                      </h3>
                                      <p className="product-text">Pizza dough, tomato, parmesan & basil</p>
                                      <span className="price">£5.90</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Croquettes Filled With Scamorza" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Croquettes Filled With Scamorza</NavLink>
                                      </h3>
                                      <p className="product-text">
                                        <br/>
                                      </p>
                                      <span className="price">
                                      £7.55
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Arancini" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Arancini</NavLink>
                                      </h3>
                                      <p className="product-text">Rice balls filled with meat</p>
                                      <span className="price">
                                      £7.50
                                      </span>
                                    </div>
                                  </div>
                                </div>
                             </div>  
                           </div>

                           <div className="filter-item nav-cold-starters-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Bruschetta Classica Al Pomodorini Di Pachino" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Bruschetta Classica Al Pomodorini Di Pachino</NavLink>
                                      </h3>
                                      <p className="product-text">Sourdough bread, cherry tomatoes</p>
                                      <span className="price">
                                      £8.55
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Bruschetta Con Nduja & Burrata" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Bruschetta Con Nduja & Burrata</NavLink>
                                      </h3>
                                      <p className="product-text">Sourdough bread, cherry tomatoes, spicy salami (Nduja) topped with a burrata</p>
                                      <span className="price">
                                      £13.90
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Antipasto Freddo" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Antipasto Freddo</NavLink>
                                      </h3>
                                      <p className="product-text">Your choice of a burrata or a buffalo mozzarella on a bed of parma ham</p>
                                      <span className="price">£13.90</span>       
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Selezione Di Salumi (2 People)" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Selezione Di Salumi (2 People)</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      A selection of top quality cured meats, cheeses, olives & your choice of burrata or buffalo mozzarella.
                                      </p>
                                      <span className="price">£19.90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>  
                          </div>

                          <div className="filter-item nav-hot-starters-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Parmigiana" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Parmigiana</NavLink>
                                      </h3>
                                      <p className="product-text">Layers of aubergine and tomato sauce, baked with parmesan & basil oil</p>
                                      <span className="price">
                                      £11.50
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Calamari & Zucchine" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Calamari & Zucchine</NavLink>
                                      </h3>
                                      <p className="product-text">Deep fried squid & courgettes served with homemade mayonnaise</p>
                                      <span className="price">
                                      £12.90
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Polpo Alla Griglia" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Polpo Alla Griglia</NavLink>
                                      </h3>
                                      <p className="product-text">Grilled octopus served on a bed of anchovies & garlic salad & homemade chilli sauce</p>
                                      <span className="price">£14.90</span>       
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Gamberoni Al Pepe" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Gamberoni Al Pepe</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Pan fried king prawns in a black pepper sauce served on a bed of sourdough bread
                                      </p>
                                      <span className="price">£14.90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>  
                          </div>                          
                          
                          <div className="filter-item nav-pizza-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Marinara" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Marinara</NavLink>
                                      </h3>
                                      <p className="product-text">Tomato, oregano, garlic, basil, BIO EVO olive oil</p>
                                      <span className="price">
                                      £7.50
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Margherita" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Margherita</NavLink>
                                      </h3>
                                      <p className="product-text">Tomato, mozzarella, basil, BIO EVO olive oil</p>
                                      <span className="price">
                                      £9.50
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Vegetariana" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Vegetariana</NavLink>
                                      </h3>
                                      <p className="product-text">Tomato, mozzarella, aubergines, peppers, courgettes, basil, BIO EVO olive oil</p>
                                      <span className="price">£13.90</span>       
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="4 Formaggi" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">4 Formaggi</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Mozzarella, dolcelatte, parmigiana, scamorza, basil, BIO EVO olive oil
                                      </p>
                                      <span className="price">£14.90</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Bufalina" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Bufalina</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Tomato, buffalo mozzarella, basil, BIO EVO olive oil
                                      </p>
                                      <span className="price">
                                      £14.90
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Calabrese" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Calabrese</NavLink>
                                      </h3>
                                      <p className="product-text">Tomato, mozzarella, aubergines, spicy salami, ricotta cheese, basil, BIO EVO olive oil</p>
                                      <span className="price">
                                      £15.90
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Calzone Napoli" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Calzone Napoli</NavLink>
                                      </h3>
                                      <p className="product-text">Tomato, mozzarella, ricotta cheese, salami, ham, basil, BIO EVO olive oil</p>
                                      <span className="price">£15.90</span>       
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Prosciutto E Funghi" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Prosciutto E Funghi</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Tomato, mozzarella, ham, mushrooms, basil, BIO EVO olive oil
                                      </p>
                                      <span className="price">£15.90</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Capricciosa" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Capricciosa</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Tomato, mozzarella, mushrooms, ham, artichoke, olives, basil, BIO EVO olive oil
                                      </p>
                                      <span className="price">
                                      £16.85
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="La Meta' E Meta'" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">La Meta' E Meta'</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Tomato, mozzarella, spicy salami, parma ham, ham, ricotta cheese, basil, BIO EVO olive oil
                                      </p>
                                      <span className="price">
                                      £16.85
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Napoletana" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Napoletana</NavLink>
                                      </h3>
                                      <p className="product-text">Tomato, mozzarella, anchovies, olives, capers, basil, BIO EVO olive oil</p>
                                      <span className="price">£15.90</span>       
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Diavola" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Diavola</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Tomato, mozzarella, spicy salami, basil, BIO EVO olive oil
                                      </p>
                                      <span className="price">£14.90</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Salsiccia E Friarielli" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Salsiccia E Friarielli</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Mozzarella, sausages, friarielli, smoked scamorza, BIO EVO olive oil
                                      </p>
                                      <span className="price">
                                      £16.90
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Pizza Da Valter" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Pizza Da Valter</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Mozzarella, cherry tomatoes, rocket, parma ham, burrata, shaved parmesan, basil oil
                                      </p>
                                      <span className="price">
                                      £20.90
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>  
                          </div>

                          <div className="filter-item nav-pasta-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Tagliatelle Con Ragu" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Tagliatelle Con Ragu</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Fresh tagliatelle with Bolognese sauc
                                      </p>
                                      <span className="price">
                                      £16.90
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Tagliatelle Pomodorini E Mozzarella" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Tagliatelle Pomodorini E Mozzarella</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Fresh tagliatelle with cherry tomatoes sauce & melted mozzarella topped with homemade basil oil
                                      </p>
                                      <span className="price">
                                      £14.90
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Gnocchi Alla Sorrentina" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Gnocchi Alla Sorrentina</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Homemade gnocchi cooked in tomato sauce & baked with mozzarella & basil oil
                                      </p>
                                      <span className="price">£14.90</span>       
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Scialatielli Alla Carbonara" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Scialatielli Alla Carbonara</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Fresh scialatielli, pancetta, egg yolk, parmesan, pecorino & black pepper
                                      </p>
                                      <span className="price">£16.90</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Lasagna Bolognese" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Lasagna Bolognese</NavLink>
                                      </h3>
                                      <p className="product-text">
                                        <br/>
                                      </p>
                                      <span className="price">£16.90</span>       
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Linguine Al Frutti Di Mare" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Linguine Al Frutti Di Mare</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Fresh linguine with fresh seafood, cherry tomatoes & white wine sauce
                                      </p>
                                      <span className="price">£20.90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>  
                          </div>     

                          <div className="filter-item nav-risotto-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Chargrilled Vegetables & Avocado" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Chargrilled Vegetables & Avocado</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Porcini mushrooms, artichokes & truffle oil risotto
                                      </p>
                                      <span className="price">
                                      £16.90
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Chicken Caesar" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Chicken Caesar <span style={{visibility:'hidden'}}>Chicken Caesar Cae</span> </NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Fresh seafood risotto <span style={{visibility:'hidden'}}>Lorem ipsum dolor sit amet, consectetur consectetur</span> 
                                      </p>
                                      <span className="price">
                                      £21.55
                                      </span>
                                    </div>
                                  </div>
                                </div>
                             </div>  
                          </div>                           

                          <div className="filter-item nav-main-courses-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Grilled Chicken Breast" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Grilled Chicken Breast</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Served with mashed potatoes & porcini sauce
                                      </p>
                                      <span className="price">
                                      £16.90
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Chilli Chicken" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Chilli Chicken</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Grilled chicken breast marinated in chilli sauce served with herb tapenade & fresh salad leaves
                                      </p>
                                      <span className="price">
                                      £16.90
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Salmone Alla Griglia" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Salmone Alla Griglia</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Grilled salmon served on a bed of smoked aubergine sauce & blanched cherry tomatoes & asparagus
                                      </p>
                                      <span className="price">£21.85</span>       
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Spigola Napolitana" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Spigola Napolitana</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Pan fried wild seabass fillets served on a bed of artichoke cream & Napolitana sauce (capers, black olives, cherry tomatoes)
                                      </p>
                                      <span className="price">£21.75</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Pepata Di Cozze" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Pepata Di Cozze</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Wild mussels cooked in a white wine sauce
                                      </p>
                                      <span className="price">£16.85</span>       
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Veal Milanese" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Veal Milanese</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Breaded veal served with chips & mix salad
                                      </p>
                                      <span className="price">£21.75</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Scottish Fillet Steak" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Scottish Fillet Steak</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Served with rosemary new potatoes & wilted baby spinach
                                      </p>
                                      <span className="price">£32.50</span>
                                    </div>
                                  </div>
                                </div>
                              </div>  
                          </div> 

                          <div className="filter-item nav-main-salads-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Chargrilled Vegetables & Avocado" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Chargrilled Vegetables & Avocado</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Asparagus, yellow & red peppers, aubergine, zucchini & avocado on a mix leaves salad, house dressing
                                      </p>
                                      <span className="price">
                                      £15.85
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Chicken Caesar" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Chicken Caesar</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Grilled chicken, croutons, pancetta, anchovies, capers & parmesan shavings on a romaine lettuce, salad & Caesar homemade dressing
                                      </p>
                                      <span className="price">
                                      £16.90
                                      </span>
                                    </div>
                                  </div>
                                </div>
                             </div>  
                          </div> 

                          <div className="filter-item nav-sides-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Tomato Mixed Salad" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Tomato Mixed Salad</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      <br/>
                                      </p>
                                      <span className="price">
                                      £5.90
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Caprese" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Caprese</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Buffalo mozzarella, plum tomatoes, basil, oregano, BlO EVO olive oil
                                      </p>
                                      <span className="price">
                                      £9.50
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Rocket & Parmesan" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Rocket & Parmesan</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      <br/>
                                      </p>
                                      <span className="price">£6.90</span>       
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Avocado Mixed Salad" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Avocado Mixed Salad</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      <br/>
                                      </p>
                                      <span className="price">£7.90</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Wilted Baby Spinach" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Wilted Baby Spinach</NavLink>
                                      </h3>
                                      <p className="product-text">
                                     <br/>
                                      </p>
                                      <span className="price">£6.90</span>       
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Chips" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Chips</NavLink>
                                      </h3>
                                      <p className="product-text">
                                     <br/>
                                      </p>
                                      <span className="price">£4.50</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Mashed Potatoes" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Mashed Potatoes</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      <br/>
                                      </p>
                                      <span className="price">£4.90</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Friarielli & Patate" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Friarielli & Patate</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Napolitan wild broccoli & roasted new potatoes
                                      </p>
                                      <span className="price">£5.90</span>
                                    </div>
                                  </div>
                                </div>
                              </div>  
                          </div> 
                                         
                          </div>                       
                     </div>
                </section>

       <Footer />
    </div>
			)} 
    </>
	);
}

export default Food;
