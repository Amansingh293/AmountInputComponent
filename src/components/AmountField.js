import React, { useState } from "react";

const AmountField = ({ onUpdate }) => {
  const [inputAmount, setInputAmount] = useState("₹ 0");

  const handleInputChange = (e) => {
    const currentValue = e.target.value;

    let currentInputStringArray = currentValue.split(" ");

    let numberPortion = currentInputStringArray[1];

    let numberCalibration = numberPortion.split(",").join("");

    let formattedValue = Number(numberCalibration).toLocaleString("en-IN");

    currentInputStringArray[1] = formattedValue;

    let finalString = currentInputStringArray.join(" ");

    setInputAmount(finalString);

    onUpdate(Number(numberCalibration));
  };

  return (
    <>
      <input
        type="text"
        value={inputAmount}
        onChange={handleInputChange}
      ></input>
    </>
  );
};

export default AmountField;
