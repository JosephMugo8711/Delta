import React from "react";
import GlobalStyle from "./globalStyles";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import SignupPage from "./pages/SignupPage";
import PricingPage from "./pages/PricingPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </>
  );
}

export default App;

