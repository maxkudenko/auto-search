import React from "react";
import PropTypes from "prop-types";

const Option = ({ closeSearch, setSelectedItem, option }) => {
  const onOptionClick = (event) => {
    event.preventDefault();
    closeSearch();
    setSelectedItem(option);
  };

  return (
    <a href="#" className="option" onClick={(event) => onOptionClick(event)}>
      {option.name}
    </a>
  );
};

Option.propTypes = {
  option: PropTypes.object.isRequired,
  closeSearch: PropTypes.func.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default Option;
