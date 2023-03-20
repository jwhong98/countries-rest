import React, { useState } from "react";
import Home from "./Home";
import { StyledMain } from "./styles/Main.styled";

const Main = () => {
  const [selectedCountry, setSelectedCountry] = useState({});

  const onSelection = (country) => {
    console.log(country);
    setSelectedCountry(country);
  };
  return (
    <StyledMain>
      <Home onSelection={onSelection} />
    </StyledMain>
  );
};

export default Main;
