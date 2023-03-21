import styled from "styled-components";
import * as theme from "./Theme.styled";

export const HeaderContainer = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  font-size: 14px;
  box-shadow: 0px 3px 3px ${({ theme }) => theme.colors.shadow};
  background: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};

  h1 {
    font-size: 1em;
  }

  @media only screen and (min-width: 1000px) {
    h1 {
      font-size: 30px;
    }
  }
`;

export const ModeSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  :hover {
    cursor: pointer;
  }
  svg {
    width: 1.1em;

    path {
      stroke: ${({ theme }) => theme.colors.text};
      fill: ${({ theme }) => theme.colors.fill};
    }
  }

  @media only screen and (min-width: 1000px) {
    font-size: 20px;
  }
`;
