import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import TipCard from "../Components/TipCard";

// style
import "../assets/scss/main.scss";

function Layout() {
  return (
    <>
      <Header />
      <TipCard />
      <Footer />
    </>
  );
}

export default Layout;
