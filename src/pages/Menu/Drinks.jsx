import React, {useEffect, useState} from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import {Link, NavLink} from "react-router-dom";
import DrinksSeo from "../../seo/DrinksSeo";

function Drinks() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => { // Simulate an asynchronous operation (e.g., fetching data)
		setTimeout(() => {
			setIsLoading(false);
		}, 300); // Simulating a 1-second delay
	}, []);
	return (
		<>
			<DrinksSeo/> {
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
                      <h1 className="breadcumb-title">Drinks</h1>
                      <ul className="breadcumb-menu">
                        <li>
                          <NavLink to="/">Home</NavLink>
                        </li>
                        <li>Drinks</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Drinks Section   S T A R T */}
                 <section className="space bg-smoke2" data-bg-src="assets/img/bg/product_bg_1.png">
                    <div className="container">
                        <div className="title-area text-center">
                          <span className="sub-title">Popular Menu</span>
                          <h2 className="sec-title">Our Popular Delicious <span className="font-style text-theme">Drinks</span></h2>     
                        </div>
                        <div className="tab-menu2 filter-menu-active" role="tablist">
                          <button className="active" data-filter="*" type="button">All</button>
                          <button data-filter=".nav-spritz-tab" type="button">Spritz</button>
                          <button data-filter=".nav-White-Wine-tab" type="button">White Wine</button>
                          <button data-filter=".nav-Red-Wine-tab" type="button">Red Wine</button>
                          <button data-filter=".nav-Rose-tab" type="button">Rose</button>
                          <button data-filter=".nav-Sparkling-Wine-Champagne-tab" type="button">Sparkling Wine & Champagne</button>
                          <button data-filter=".nav-Beers-tab" type="button">Beers</button>
                          <button data-filter=".nav-Vodka-Classic-Cocktails-tab" type="button">Vodka Classic Cocktails</button>
                          <button data-filter=".nav-Whiskey-Cocktails-tab" type="button">Whiskey Cocktails</button>
                          <button data-filter=".nav-Tequila-Cocktails-tab" type="button">Tequila Cocktails</button>
                          
                          <button data-filter=".nav-Classic-Mocktails-tab" type="button">Classic Mocktails</button>
                          <button data-filter=".nav-Gin-Classic-Cocktails-tab" type="button">Gin Classic Cocktails</button>
                          <button data-filter=".nav-Rum-Classic-Cocktails-tab" type="button">Rum Classic Cocktails</button>
                          <button data-filter=".nav-Gin-Mixer-tab" type="button">Gin &  Mixer</button>
                          <button data-filter=".nav-Vodka-tab" type="button">Vodka</button>
                          <button data-filter=".nav-Fresh-Juices-tab" type="button">Fresh Juices</button>
                          <button data-filter=".nav-From-The-Fridge-tab" type="button">The Fridge</button>
                        </div>

                          <div className="filter-active">
                           <div className="filter-item nav-spritz-tab mb-3">
                             <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Aperol" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Aperol</NavLink>
                                      </h3>
                                      <p className="product-text">
                                        <br/>
                                      </p>
                                      <span className="price">
                                      £11.75
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Limoncello" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Limoncello</NavLink>
                                      </h3>
                                      <p className="product-text">
                                        <br/>
                                      </p>
                                      <span className="price">
                                      £11.75
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Campari" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Campari</NavLink>
                                      </h3>
                                      <p className="product-text">
                                        <br/>
                                      </p>
                                      <span className="price">
                                      £11.75
                                        </span>       
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Hugo" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Hugo</NavLink>
                                      </h3>
                                      <p className="product-text">
                                        <br/>
                                      </p>
                                      <span className="price">£11.75</span>
                                    </div>
                                  </div>
                                </div>
                             </div>  
                           </div>

                           <div className="filter-item nav-White-Wine-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Montalto Organic Catarratto" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Montalto Organic Catarratto</NavLink>
                                      </h3>
                                      <p className="product-text">Sicilia IGT, Italy - 100% Catarratto - Fruity and dry with fresh citrus notes and a crisp, fruity palate.</p>
                                      <span className="price">
                                      £26.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Verdicchio Dei Castelli Di Jesi Classico, Vignamato" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Verdicchio Dei Castelli Di Jesi Classico, Vignamato</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Marches, Italy - 100% Verdicchio - Intense fruit aromas with hints of wild flowers.
                                      </p>
                                      <span className="price">
                                      £28.50
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Chardonnay Tormaresca" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Chardonnay Tormaresca</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Puglia IGT, Italy - Bright, fruity, medium-bodied Chardonnay showing the purity and richness of Mediterranean fruit.
                                      </p>
                                      <span className="price">
                                      £31.00
                                        </span>       
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Castel Firmian Pinot Grigio" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Castel Firmian Pinot Grigio</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Trentino, Italy - 100% Pinot Grigio - Nicely balanced, with a gentle floral aroma, good medium weight, and a refreshing finish.
                                      </p>
                                      <span className="price">
                                      £34.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Gavi Di Gavi La Meirana" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Gavi Di Gavi La Meirana</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Piedmont, Italy - 100% Cortese - Great texture and precision, fresh and dry, this is particularly characterful Gavi.
                                      </p>
                                      <span className="price">
                                      £46.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Sauvignon Blanc Collio" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Sauvignon Blanc Collio</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Friuli, Italy - 100% Sauvignon Blanc - Intense and fine on the nose with hints of sage, pepper, and elderberry. Bright and fresh on the palate with a long, pleasant finish.
                                      </p>
                                      <span className="price">
                                      £49.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>  
                          </div>

                          <div className="filter-item nav-Red-Wine-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Montalto Organic Nero d'Avola" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Montalto Organic Nero d'Avola</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Sicilia IGT, Italy - 100% Nero d'Avola - Notes of ripe red fruits, sweet spices, and liquorice. The fruit flavors continue on the round, generous palate.
                                      </p>
                                      <span className="price">
                                      £26.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Feudo Arancio Syrah, Sicilia" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Feudo Arancio Syrah, Sicilia</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Sicily, Italy - Bright ruby red wine with a warm bouquet of black pepper, spicy notes, and wild fruit.
                                      </p>
                                      <span className="price">
                                      £30.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Santa Cristina Le Maestrelle" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Santa Cristina Le Maestrelle</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Tuscany, Italy - 60% Sangiovese, 20% Merlot, 20% Syrah - Full, intense aroma of red fruit and vanilla with hints of cocoa and a long elegant finish.
                                      </p>
                                      <span className="price">£35.00</span>       
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Bonacosta Valpolicella Classico" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Bonacosta Valpolicella Classico</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Veneto, Italy - 70% Corvina, 25% Rondinella, 5% Molinara - Aromas of fresh cherries and raspberries accompanied by hints of spices.
                                      </p>
                                      <span className="price">£41.00</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Montepulciano D'Abruzzo" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Montepulciano D'Abruzzo</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Abruzzi, Italy - Peppery Montepulciano with exuberant fruit and spicy character.
                                      </p>
                                      <span className="price">
                                      £46.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Peppoli Chianti Classico" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Peppoli Chianti Classico</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Tuscany, Italy - 90% Sangiovese, 10% Merlot & Syrah - Intense red fruit aromas with delicate notes of vanilla and chocolate.
                                      </p>
                                      <span className="price">
                                      £55.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Il Bruciato" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Il Bruciato</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Bolghieri DOC, Italy - 65% Cabernet Sauvignon, 20% Merlot, 15% Syrah - Fragrant fruity aromas, particularly plum, with a full-bodied and smooth finish.
                                      </p>
                                      <span className="price">£75.00</span>       
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Barolo 2014" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Barolo 2014</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Piedmont, Italy - 100% Nebbiolo - Complex nose with notes of rose, strawberry, and forest fruits. Delicately floral and perfumed.
                                      </p>
                                      <span className="price">£90.00</span>
                                    </div>
                                  </div>
                                </div>
                              </div>  
                          </div>                          
                          
                          <div className="filter-item nav-Rose-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Nina Pinot Grigio Rose" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Nina Pinot Grigio Rose</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Veneto, Italy - 100% Pinot Grigio - Light-bodied, pale pink, dry rosé that is delightfully refreshing.
                                      </p>
                                      <span className="price">
                                      £27.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Calafuria Negroamaro Rosato, Tormaresca" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Calafuria Negroamaro Rosato, Tormaresca</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Puglia, Italy - 100% Negroamaro - Peach petal pink with intense yet delicate fragrances.
                                      </p>
                                      <span className="price">
                                      £39.50
                                      </span>
                                    </div>
                                  </div>
                                </div>                                
                              </div>  
                          </div>

                          <div className="filter-item nav-Sparkling-Wine-Champagne-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Ca' del Console Prosecco Extra Dry" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Ca' del Console Prosecco Extra Dry</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Veneto, Italy - 100% Glera - Classic Prosecco with aromas of white peach, pear, and flowers.
                                      </p>
                                      <span className="price">
                                      £35.50
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Champagne Laurent-Perrier" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Champagne Laurent-Perrier</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      France - 50% Chardonnay, 35% Pinot Noir, 15% Pinot Meunier - Well defined, subtly rounded with expressive flavors.
                                      </p>
                                      <span className="price">
                                      £70.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>  
                          </div>     

                          <div className="filter-item nav-Beers-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Moretti (Draught)" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Moretti (Draught)</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      A crisp and refreshing lager
                                      </p>
                                      <span className="price">
                                      £6.70
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Kopparberg Strawberry & Lime" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Kopparberg Strawberry & Lime</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      A sweet and fruity cider
                                      </p>
                                      <span className="price">
                                      £6.70
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Guinness Bottle" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Guinness Bottle</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      A rich and creamy stout
                                      </p>
                                      <span className="price">
                                      £5.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Becks (Non-Alcoholic)" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Becks (Non-Alcoholic)</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      A smooth non-alcoholic lager
                                      </p>
                                      <span className="price">
                                      £4.50
                                      </span>
                                    </div>
                                  </div>
                                </div>
                             </div>  
                          </div>                           

                          <div className="filter-item nav-Vodka-Classic-Cocktails-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Pornstar Martini" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Pornstar Martini</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Vodka, passion fruit passoa, passion fruit juice, passion fruit pure, vanilla syrup, lime juice, Prosecco shot
                                      </p>
                                      <span className="price">
                                      £11.75
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Espresso Martini" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Espresso Martini</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Vodka, Kahlua, Espresso shot, Vanilla Syrup
                                      </p>
                                      <span className="price">
                                      £11.75
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Cosmopolitan" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Cosmopolitan</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Vodka, Triple Sec, Cranberry Juice, Sugar Syrup, lime juice
                                      </p>
                                      <span className="price">£11.75</span>       
                                    </div>
                                  </div>
                                </div>
                              </div>  
                          </div> 

                          <div className="filter-item nav-Whiskey-Cocktails-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Old-Fashioned" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Old-Fashioned</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Bourbon, Sugar, water, Angostura Bitter
                                      </p>
                                      <span className="price">
                                      £11.75
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Manhattan" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Manhattan</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Rye Whiskey, sweet vermouth, Angostura Bitter
                                      </p>
                                      <span className="price">
                                      £11.75
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Whiskey Sour" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Whiskey Sour</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Bourbon, Lemon Juice, Sugar Syrup, Egg white
                                      </p>
                                      <span className="price">
                                      £11.75
                                      </span>
                                    </div>
                                  </div>
                                </div>
                             </div>  
                          </div> 

                          <div className="filter-item nav-Tequila-Cocktails-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Margarita" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Margarita <span style={{visibility:'hidden'}}>Margarita Margarita Margarita Margarita</span></NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Tequila, Triple Sec, Lime Juice
                                      </p>
                                      <span className="price">
                                      £11.75
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Long Island Iced Tea" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Long Island Iced Tea</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Tequila, Rum, Vodka, Gin, Triple Sec, Lime Juice, Coke
                                      </p>
                                      <span className="price">
                                      £11.75
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>  
                          </div> 

                          <div className="filter-item nav-Classic-Mocktails-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Virgin Mojito" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Virgin Mojito</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Fresh Mint, Lime Slices, Sugar Syrup, Lemonade Choice of: Classic, Strawberry, Passion Fruit, Grenadine
                                      </p>
                                      <span className="price">
                                      £7.50
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Virgin Pornstar Martini" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Virgin Pornstar Martini</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Passion Fruit Juice, Passion Fruit pure, Vanilla Syrup, Lime Juice
                                      </p>
                                      <span className="price">
                                      £7.50
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>  
                          </div> 

                          <div className="filter-item nav-Gin-Classic-Cocktails-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Brumble" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Brumble</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Gin, Lemon Juice, Sugar Syrup, Grenadine
                                      </p>
                                      <span className="price">
                                      £11.75
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Negroni" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Negroni</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Gin, Campari, Sweet Vermothe
                                      </p>
                                      <span className="price">
                                      £11.75
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="French 75" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">French 75</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Gin, Champagne, Lemon Juice, Sugar Syrup
                                      </p>
                                      <span className="price">
                                      £11.75
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Clover Club" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Clover Club</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Gin, Lemon Juice, Sugar Syrup, Egg White
                                      </p>
                                      <span className="price">
                                      £11.75
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Secret Garden" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Secret Garden</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Gin, Apple Juice, Cucumber, Mint, Lime Juice, topped with Soda
                                      </p>
                                      <span className="price">
                                      £11.75
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>  
                          </div> 
                          
                          <div className="filter-item nav-Rum-Classic-Cocktails-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Mai Tai" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Mai Tai</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      White Rum, Triple Sec, Oregat Syrup, Dark rum, Pineapple Juice
                                      </p>
                                      <span className="price">
                                      £11.75
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Mojito" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Mojito</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Rum, Fresh Mint, lime slices, sugar syrup, lemonade/soda water (choice of classic, passion fruit, strawberry, grenadine)
                                      </p>
                                      <span className="price">
                                      £11.75
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Pina Colada" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Pina Colada</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      Rum, Coconut Cream, Pineapple juice
                                      </p>
                                      <span className="price">
                                      £11.75
                                      </span>
                                    </div>
                                  </div>
                                </div>                                
                              </div>  
                          </div> 

                          <div className="filter-item nav-Gin-Mixer-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Bombay Sapphire" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Bombay Sapphire</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      <br/>
                                      </p>
                                      <span className="price">
                                      £9.50 (50ml) / £7.50 (25ml)
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Gin Mare" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Gin Mare</NavLink>
                                      </h3>
                                      <p className="product-text">
                                     <br/>
                                      </p>
                                      <span className="price">
                                      £11.00 (50ml) / £8.50 (25ml)
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Hendrick's" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Hendrick's</NavLink>
                                      </h3>
                                      <p className="product-text">
                                     <br/>
                                      </p>
                                      <span className="price">
                                      £11.00 (50ml) / £8.50 (25ml)
                                      </span>
                                    </div>
                                  </div>
                                </div>                                
                              </div>  
                          </div> 

                          <div className="filter-item nav-Vodka-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Belvedere" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Belvedere <span style={{visibility:'hidden'}}>Belvedere Belvedere Belvedere Belvedere</span></NavLink>
                                      </h3>
                                      <p className="product-text">
                                      <br/>
                                      </p>
                                      <span className="price">
                                      £11.50 (50ml) / £9.00 (25ml)
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Grey Goose" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Grey Goose</NavLink>
                                      </h3>
                                      <p className="product-text">
                                     <br/>
                                      </p>
                                      <span className="price">
                                      £11.50 (50ml) / £9.00 (25ml)
                                      </span>
                                    </div>
                                  </div>
                                </div>                              
                              </div>  
                          </div> 

                          <div className="filter-item nav-Fresh-Juices-tab mb-3">
                              <div className="row gy-4">
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Carrot Juice" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Carrot Juice</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      <br/>
                                      </p>
                                      <span className="price">
                                      £6.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Apple Juice" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Apple Juice</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      <br/>
                                      </p>
                                      <span className="price">
                                      £6.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Orange Juice" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Orange Juice</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      <br/>
                                      </p>
                                      <span className="price">
                                      £5.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Pineapple Juice" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Pineapple Juice</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      <br/>
                                      </p>
                                      <span className="price">
                                      £5.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Cranberry" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Cranberry</NavLink>
                                      </h3>
                                      <p className="product-text">
                                      <br/>
                                      </p>
                                      <span className="price">
                                      £5.00
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="th-product list-view align-items-center">
                                    <div className="product-img">
                                      <img src="assets/img/menu/desserts/blankdish.png" alt="Passion Fruit" />
                                    </div>
                                    <div className="product-content">
                                      <h3 className="product-title">
                                        <NavLink to="/">Passion Fruit</NavLink>
                                      </h3>
                                      <p className="product-text">
                                     <br/>
                                      </p>
                                      <span className="price">
                                      £5.00
                                      </span>
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

export default Drinks;
