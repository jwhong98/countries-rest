import styled from "styled-components";
import * as theme from "./Theme.styled";

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.elements};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: var(--boxShadow);
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

export const CardTextWrap = styled.div`
  padding: 30px 20px;

  h4 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  span {
    font-weight: 600;
  }
  p {
    margin-bottom: 10px;
  }
`;
