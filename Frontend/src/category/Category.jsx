import React from "react";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import Footer from "../components/Footer";
function CategoryPage() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Category />
      </div>
      <Footer />
    </>
  );
}

export default CategoryPage;