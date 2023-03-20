import React, { useState } from "react";
import {
  Filter,
  FilterList,
  HomeContainer,
  HomeGrid,
  SearchWrap,
} from "./styles/Home.styled";
import downArrow from "../assets/chevron-down-sharp.svg";
import data from "../data.json";
import CountryCard from "./CountryCard";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const createCountryCard = (info) => {
    return <CountryCard key={info.alpha2Code} {...info} />;
  };
  return (
    <HomeContainer>
      <SearchWrap>
        <input type="text" placeholder="Search for a country..." />
        <Filter>
          <span onClick={onClickHandler}>
            Filter by Region <img src={downArrow} alt="" />
          </span>
          {isOpen && (
            <FilterList>
              <li>Africa</li>
              <li>America</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Oceania</li>
            </FilterList>
          )}
        </Filter>
      </SearchWrap>
      <HomeGrid>{data.map(createCountryCard)}</HomeGrid>
    </HomeContainer>
  );
};

export default Home;
