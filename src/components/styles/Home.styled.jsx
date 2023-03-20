import styled from "styled-components";
import * as theme from "./Theme.styled";
import search from "../../assets/search-sharp.svg";

export const HomeContainer = styled.section`
  font-size: 14px;
`;

export const SearchWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  input {
    width: 100%;
    padding: 15px 0px;
    padding-left: 70px;
    border: none;
    outline: none;
    border-radius: 5px;
    box-shadow: var(--boxShadow);
    background-color: ${({ theme }) => theme.colors.elements};
    background-image: url(${search}) no-repeat;
    background-size: 17px 17px;
    background-position: left 30px center;

    ::placeholder {
      color: ${({ theme }) => theme.colors.input};
    }
  }
`;

export const Filter = styled.div`
  padding: 15px 20px;
  width: 200px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.elements};
  border-radius: 5px;
  cursor: pointer;
  box-shadow: var(--boxShadow);
  position: relative;

  span {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 14px;
  }
`;

export const FilterList = styled.ul`
  position: absolute;
  list-style: none;
  background: ${({ theme }) => theme.colors.elements};
  left: 0;
  bottom: -160px;
  width: 100%;
  padding: inherit;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: inherit;
  box-shadow: inherit;
`;

export const HomeGrid = styled.section`
  display: grid;
  padding: 40px;
  grid-template-columns: 1fr;
  gap: 40px;
`;
