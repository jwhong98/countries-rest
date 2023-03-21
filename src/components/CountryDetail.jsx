import React from "react";
import {
  BackBtn,
  Badge,
  BadgeContainer,
  Borders,
  ContentContainer,
  CountryDetailContainer,
  DetailList,
  Name,
  Details,
  DetailText,
  ImgContainer,
} from "./styles/CountryDetail.styled";
import backIcon from "../assets/arrow-back.svg";
import { numWithCommas, stringList } from "../modules/Format";

const CountryDetail = (props) => {
  console.log(props.country.currencies);
  const createBadge = (border) => {
    return <Badge>{border}</Badge>;
  };
  const createCurrencyItem = (info) => {
    return <span>{info.name}</span>;
  };
  return (
    <CountryDetailContainer>
      <BackBtn onClick={props.onBack}>
        <img src={backIcon} alt="" />
        Back
      </BackBtn>
      <ContentContainer>
        <ImgContainer>
          <img src={props.country.flags.svg} alt="country flag" />
        </ImgContainer>
        <Details>
          <h2>{props.country.name}</h2>
          <DetailText>
            <DetailList>
              <li>
                <Name>Native Name: </Name>
                {props.country.nativeName}
              </li>
              <li>
                <Name>Population: </Name>
                {numWithCommas(props.country.population)}
              </li>
              <li>
                <Name>Region: </Name>
                {props.country.region}
              </li>
              <li>
                <Name>Sub Region: </Name>
                {props.country.subregion}
              </li>
              <li>
                <Name>Capital: </Name>
                {props.country.capital}
              </li>
            </DetailList>
            <DetailList>
              <li>
                <Name>Top Level Domain: </Name>
                {props.country.topLevelDomain}
              </li>
              <li>
                {/* array */}
                <Name>Currencies: </Name>
                {props.country.currencies.map(createCurrencyItem)}
              </li>
              <li>
                {/* array */}
                <Name>Languages: </Name>
                {stringList(props.country.languages)}
              </li>
            </DetailList>
          </DetailText>
          {props.country.borders && (
            <Borders>
              <span>Border Countries:</span>
              <BadgeContainer>
                {props.country.borders.map(createBadge)}
              </BadgeContainer>
            </Borders>
          )}
        </Details>
      </ContentContainer>
    </CountryDetailContainer>
  );
};

export default CountryDetail;
