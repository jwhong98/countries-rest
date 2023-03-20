import React from "react";
import {
  BackBtn,
  Badge,
  BadgeContainer,
  Borders,
  ContentContainer,
  CountryDetailContainer,
  DetailList,
  Details,
  DetailText,
  ImgContainer,
} from "./styles/CountryDetail.styled";

const CountryDetail = (props) => {
  const createBadge = (border) => {
    return <Badge />;
  };
  return (
    <CountryDetailContainer>
      <BackBtn>Back</BackBtn>
      <ContentContainer>
        <ImgContainer>
          <img src={props.flags.svg} alt="country flag" />
        </ImgContainer>
        <Details>
          <h2>{props.name}</h2>
          <DetailText>
            <DetailList>
              <li>
                <span>Native Name: </span>
                {props.nativeName}
              </li>
              <li>
                <span>Population: </span>
                {props.population}
              </li>
              <li>
                <span>Region: </span>
                {props.region}
              </li>
              <li>
                <span>Sub Region: </span>
                {props.subregion}
              </li>
              <li>
                <span>Capital: </span>
                {props.capital}
              </li>
            </DetailList>
            <DetailList>
              <li>
                <span>Top Level Domain: </span>
                {props.topLevelDomain}
              </li>
              <li>
                {/* array */}
                <span>Currencies: </span>
                {props.currencies}
              </li>
              <li>
                {/* array */}
                <span>Languages: </span>
                {props.languages}
              </li>
            </DetailList>
          </DetailText>
          <Borders>
            <span>Border Countries</span>
            <BadgeContainer>{props.borders.map(createBadge)}</BadgeContainer>
          </Borders>
        </Details>
      </ContentContainer>
    </CountryDetailContainer>
  );
};

export default CountryDetail;
