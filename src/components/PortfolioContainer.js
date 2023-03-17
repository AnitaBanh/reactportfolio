import React, { useState } from "react";
import PageNav from "./PageNav";
import Header from "./Header";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Footer from "./Footer";
import '../styles/index.css';



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <PageNav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
};
