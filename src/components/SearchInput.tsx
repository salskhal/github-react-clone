import React, { useState } from "react";
import ActiveInput from "./ActiveInput";
import DefaultInput from "./DefaultInput";

const SearchInput: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleDefaultInputClick = () => {
    setIsActive(true);
  };

  const handleActiveInputClick = () => {
    // todo
    // 1. check if the click is outside the active input
    // 2. if it is, set isActive to false
  };

  return (
    <div onClick={handleActiveInputClick}>
      <DefaultInput onClick={handleDefaultInputClick} />
      {isActive && <ActiveInput />}
    </div>
  );
};

export default SearchInput;
