import React, { useRef, useState } from "react";

const PresetsCustomAmounts = ({ amounts }) => {
  const [selectedOption, setSelectedOption] = useState(false);
  const customAmtRadio = useRef(null);

  const handleChange = (event) => {
    if (event.target.checked) {
      setSelectedOption(event.target.value);
    }
  };
  return (
    <>
      {amounts.map((amount, index) => {
        return (
          <label key={index}>
            <input
              checked={selectedOption == amount}
              id={`amt_${amount}`}
              name="amounts"
              onChange={handleChange}
              type="radio"
              value={amount}
            />
            ${amount}
          </label>
        );
      })}
      <label className="custom-radio-group">
        <input
          checked={selectedOption === "Custom"}
          id="amt_custom"
          name="amounts"
          onChange={handleChange}
          ref={customAmtRadio}
          type="radio"
          value="Custom"
        />
        <input
          id="amt_custom_text"
          placeholder="$ Other amount"
          tabIndex={
            customAmtRadio.current && customAmtRadio.current.checked
              ? "0"
              : "-1"
          }
          type="text"
        />
      </label>
    </>
  );
};

export default PresetsCustomAmounts;
