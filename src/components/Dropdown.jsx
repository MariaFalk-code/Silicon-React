//Code generated by ChatGTP4o

import { useState } from 'react';

function Dropdown({ options, placeholder, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
 //Rendered by ChatGPT4o
  const [selectedOption, setSelectedOption] = useState(placeholder);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) onSelect(option); // Call the callback with the selected option
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" type="button" onClick={toggleDropdown}>
        {selectedOption}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;