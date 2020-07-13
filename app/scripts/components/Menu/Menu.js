import React, { useState } from "react";
import PropTypes from "prop-types";
import { SearchService } from "../../services/searchService";

import Option from "../Option";

const Menu = ({ setSelectedItem }) => {
  const [inputValue, setInputValue] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchOptions, setSearchOptions] = useState([]);

  const showSearchContainer = () => {
    setInputValue("");
    setShowSearch(!showSearch);
    setSearchOptions([]);
  };

  const onSearchClick = (event) => {
    event.preventDefault();
    showSearchContainer();
  };

  const onSearch = async (event) => {
    event.preventDefault();
    const { value } = event.target;
    setInputValue(value);
    const { data } = await SearchService.getSeacrhResults(value);
    setSearchOptions(data);
  };

  return (
    <header className="menu">
      <div className="menu-container">
        <div className="menu-holder">
          <h1>ELC</h1>
          <nav>
            <a href="#" className="nav-item">
              HOLIDAY
            </a>
            <a href="#" className="nav-item">
              WHAT'S NEW
            </a>
            <a href="#" className="nav-item">
              PRODUCTS
            </a>
            <a href="#" className="nav-item">
              BESTSELLERS
            </a>
            <a href="#" className="nav-item">
              GOODBYES
            </a>
            <a href="#" className="nav-item">
              STORES
            </a>
            <a href="#" className="nav-item">
              INSPIRATION
            </a>

            <a href="#" onClick={(event) => onSearchClick(event)}>
              <i className="material-icons search">search</i>
            </a>
          </nav>
        </div>
      </div>
      <div className={(showSearch ? "showing " : "") + "search-container"}>
        <input
          value={inputValue}
          type="text"
          onChange={(event) => onSearch(event)}
        />
        <a href="#" onClick={(event) => onSearchClick(event)}>
          <i className="material-icons close">close</i>
        </a>
        {Boolean(searchOptions.length) && (
          <div>
            {searchOptions.map((option) => (
              <Option
                key={option._id}
                option={option}
                closeSearch={showSearchContainer}
                setSelectedItem={setSelectedItem}
              >
                {option.name}
              </Option>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

Menu.propTypes = {
  setSelectedItem: PropTypes.func.isRequired,
};

export default Menu;
