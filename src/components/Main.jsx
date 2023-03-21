import React, { useState } from "react";
import CountryDetail from "./CountryDetail";
import Home from "./Home";
import { StyledMain } from "./styles/Main.styled";

const Main = () => {
  const [selectedCountry, setSelectedCountry] = useState({});
  const [didSelect, setDidSelect] = useState(false);

  const onSelection = (country) => {
    setDidSelect(true);
    setSelectedCountry(country);
  };

  const onBack = () => {
    setDidSelect(false);
  };

  return (
    <StyledMain>
      {!didSelect ? (
        <Home onSelection={onSelection} />
      ) : (
        <CountryDetail onBack={onBack} country={selectedCountry} />
      )}
    </StyledMain>
  );
};

export default Main;
