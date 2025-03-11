import React from "react";
import { Helmet } from "react-helmet-async";

function HomeSeo() {
  return (
    <Helmet>
      <title>Pizza De Valter</title>
      <meta name="description" content="Enjoy the best pizza experience with Pizza De Valter. Fresh ingredients, delicious flavors, and great service!" />
      <meta property="og:title" content="Pizza De Valter" />
      <meta property="og:site_name" content="Pizza De Valter" />
      <meta property="og:url" content="https://www.pizzadevalter.com" />
      <meta property="og:description" content="Experience authentic Italian pizza with fresh ingredients and amazing flavors." />
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

export default HomeSeo;
