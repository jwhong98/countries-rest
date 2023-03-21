import styled from "styled-components";
import * as theme from "./Theme.styled";

export const CountryDetailContainer = styled.section`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  padding: 10px;
`;

export const BackBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 20px;
  background: ${({ theme }) => theme.colors.elements};
  outline: none;
  border: none;
  box-shadow: var(--boxShadow);
  border-radius: 5px;
  margin-bottom: 60px;
  color: inherit;
  cursor: pointer;

  svg {
    width: 20px;

    path {
      stroke: ${({ theme }) => theme.colors.text};
    }
  }
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
`;

export const ImgContainer = styled.div`
  max-height: 90%;
  img {
    width: 100%;
    height: auto;
    max-height: 100%;
  }
`;

export const Details = styled.div`
  h2 {
    margin-bottom: 20px;
  }
`;
export const DetailText = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-bottom: 30px;
`;

export const DetailList = styled.ul`
  list-style: none;
  li {
    margin-bottom: 10px;
    span {
    }
  }
`;

export const Name = styled.span`
  font-weight: 600;
`;

export const Borders = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  span {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const Badge = styled.p`
  padding: 5px 15px;
  box-shadow: var(--boxShadow);
  background: ${({ theme }) => theme.colors.elements};
  border-radius: 5px;
`;
