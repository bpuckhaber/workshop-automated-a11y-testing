import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./styles/dropdown-list.scss";

const DropdownList = ({
  defaultItemText = "",
  items = [],
  initialActive = false,
}) => {
  const [active, setActive] = useState(initialActive);
  const dropdownRef = useRef();

  const clickOutside = (event) => {
    if (!dropdownRef.current.contains(event.target)) {
      setActive();
    }
  };
  useEffect(() => {
    if (active) {
      document.addEventListener("mouseup", clickOutside);
    } else {
      document.removeEventListener("mouseup", clickOutside);
    }
    return () => {
      document.removeEventListener("mouseup", clickOutside);
    };
  }, [active]);

  return (
    <div
      className={`${active === true ? "active" : ""} dropdown-list`}
      ref={dropdownRef}
      data-testid="dropdown-list"
    >
      <button
        className="dropdown-btn"
        onClick={() => {
          setActive(!active);
        }}
        data-testid="dropdown-btn"
      >
        {defaultItemText}
      </button>
      <ul role="menu">
        {items.map((item, index) => {
          const url = item.split(" ").join("-");
          return (
            <li key={index} role="menuitem">
              <a href={`#${url}`}>{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

DropdownList.propTypes = {
  defaultItemText: PropTypes.string,
  items: PropTypes.array,
};
export default DropdownList;
