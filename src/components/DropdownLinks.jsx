// Rendered by ChatGPT4o

  import { useState } from "react";
  import { NavLink } from "react-router-dom";
  
  function DropdownLinks({ options, placeholder }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    return (
      <div className="dropdown">
        <button
          className="dropdown-button"
          type="button"
          onClick={toggleDropdown}
        >
          {placeholder}
        </button>
        {isOpen && (
          <ul className="dropdown-list">
            {options.map((option, index) => (
              <li key={index} className="dropdown-item">
                <NavLink
                  to={option.link}
                  className="dropdown-link"
                  activeClassName="active"
                  onClick={() => setIsOpen(false)} // Close dropdown on navigation
                >
                  {option.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

export default DropdownLinks;
