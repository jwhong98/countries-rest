import React from "react";
import { HeaderContainer, ModeSelector } from "./styles/Header.styled";
import moon from "../assets/moon-outline.svg";
import filledMoon from "../assets/moon-sharp.svg";

const Header = (props) => {
  const onClickHandler = () => {
    props.onThemeSwitch();
  };
  return (
    <HeaderContainer>
      <h1>Where in the world?</h1>
      <ModeSelector>
        <img
          src={props.theme.name === "light-theme" ? moon : filledMoon}
          alt=""
        />
        <span onClick={onClickHandler}>Dark Mode</span>
      </ModeSelector>
    </HeaderContainer>
  );
};

export default Header;
