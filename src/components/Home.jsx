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

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const createCountryCard = (info) => {
    return (
      <CountryCard
        key={info.alpha2Code}
        {...info}
        country={info}
        onSelection={props.onSelection}
      />
    );
  };
  return (
    <HomeContainer>
      <SearchWrap>
        <input type="text" placeholder="Search for a country..." />
        <Filter>
          <span onClick={onClickHandler}>
            Filter by Region{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Chevron Down</title>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="square"
                stroke-miterlimit="10"
                stroke-width="48"
                d="M112 184l144 144 144-144"
              />
            </svg>
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
