import React from "react";
import { CardContainer, CardTextWrap } from "./styles/CountryCard.styled";
import { numWithCommas } from "../modules/Format";

const CountryCard = (props) => {
  const onClickHandler = () => {
    props.onSelection(props.country);
  };
  return (
    <CardContainer onClick={onClickHandler}>
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
