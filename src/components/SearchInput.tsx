import React, { useState } from "react";
import ActiveInput from "./ActiveInput";
import DefaultInput from "./DefaultInput";

const SearchInput: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleDefaultInputClick = () => {
    setIsActive(true);
  };


  const handbleActiveInputClick = () => {
    setIsActive(false);
  }


  return (
    <div >
      <DefaultInput onClick={handleDefaultInputClick} />
      {isActive && <ActiveInput onClick={handbleActiveInputClick} />}
    </div>
  );
};

export default SearchInput;
