import React from "react";
import PropTypes from "prop-types";

import Product from "../Product";

const Home = ({ selectedItem }) => (
  <section id="home">
    <div className="content">
      {selectedItem ? (
        <Product product={selectedItem} />
      ) : (
        <p>ELC Coding Test...</p>
      )}
    </div>
  </section>
);

Home.propTypes = {
  selectedItem: PropTypes.object,
};

export default Home;
