import React from "react";
import { CardContainer, CardTextWrap } from "./styles/CountryCard.styled";

const CountryCard = (props) => {
  const numWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <CardContainer>
      <img src={props.flags.svg} alt="country flag" />
      <CardTextWrap>
        <h4>{props.name}</h4>
        <p>
          <span>Population: </span>
          {numWithCommas(props.population)}
        </p>
        <p>
          <span>Region: </span>
          {props.region}
        </p>
        <p>
          <span>Capital: </span>
          {props.capital}
        </p>
      </CardTextWrap>
    </CardContainer>
  );
};

export default CountryCard;
