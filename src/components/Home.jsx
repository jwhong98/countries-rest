import React, { useEffect, useState } from "react";
import {
  Filter,
  FilterList,
  HomeContainer,
  HomeGrid,
  SearchWrap,
} from "./styles/Home.styled";
import data from "../data.json";
import CountryCard from "./CountryCard";

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState(data);

  useEffect(() => {
    setCountries(
      data.filter((country) => {
        if (filter) {
          return country.region === filter;
        } else {
          return country;
        }
      })
    );
  }, [filter, query]);

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

  const search = (countries) => {
    return countries.filter((country) => {
      if (country.region == filter) {
        return country;
      }
    });
  };

  const onFilter = (e) => {
    console.log(e.target.dataset.region);
    setFilter(e.target.dataset.region);
  };
  return (
    <HomeContainer>
      <SearchWrap>
        <input
          type="text"
          placeholder="Search for a country..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Filter>
          <span onClick={onClickHandler}>
            Filter by Region{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Chevron Down</title>
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth="48"
                d="M112 184l144 144 144-144"
              />
            </svg>
          </span>
          {isOpen && (
            <FilterList>
              <li onClick={onFilter} data-region="Africa">
                Africa
              </li>
              <li onClick={onFilter} data-region="Americas">
                Americas
              </li>
              <li onClick={onFilter} data-region="Asia">
                Asia
              </li>
              <li onClick={onFilter} data-region="Europe">
                Europe
              </li>
              <li onClick={onFilter} data-region="Oceania">
                Oceania
              </li>
            </FilterList>
          )}
        </Filter>
      </SearchWrap>
      <HomeGrid>{countries.map(createCountryCard)}</HomeGrid>
    </HomeContainer>
  );
};

export default Home;
