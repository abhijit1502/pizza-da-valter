import React from "react";
import { Helmet } from "react-helmet-async";

function DrinksSeo() {
  return (
    <Helmet>
      <title>Drinks | Pizza De Valter</title>
      <meta name="description" content="Pizza Da alter - Authentic Italian-inspired pizzas, fresh ingredients, and delicious flavors crafted to perfection!" />
      <meta property="og:title" content="Drinks | Pizza De Valter" />
      <meta property="og:site_name" content="Pizza De Valter" />
      <meta property="og:url" content="https://www.pizzadevalter.com" />
      <meta property="og:description" content="Pizza Da alter - Authentic Italian-inspired pizzas, fresh ingredients, and delicious flavors crafted to perfection!" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://www.pizzadevalter.com" />
      <link
        rel="icon"
        type="image/x-icon"
        href="/assets/img/favicon.png"
      />
    </Helmet>
  );
}

export default DrinksSeo;
