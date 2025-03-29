import { useState, useEffect } from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Dessert from "./pages/Menu/Dessert";
import Food from "./pages/Menu/Food";
import Drinks from "./pages/Menu/Drinks";

function App() {
  return (
    <>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/foods" element={<Food />} />
        <Route path="/dirnks" element={<Drinks />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        
      </RouterRoutes>
    </>
  );
}

export default App;
