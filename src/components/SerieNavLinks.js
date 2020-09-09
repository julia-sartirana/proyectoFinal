import React from "react";
import { useRouteMatch, NavLink } from "react-router-dom";
import styled from "styled-components";

import useSeriesContext from "../contexts/SeriesContext";
import useLanguageContext from "../contexts/LanguageContext";

const StyledNav = styled.nav`
  width: 100%;
  background-color: black;
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  width: 50%;
  margin: auto;
  padding: 1.5vw 0;
  @media (max-width: 850px) {
    background-color: #1d1c1c;
    width: 100%;
  }
  @media (max-width: 650px) {
    padding: 3vw 0;
  }
`;

const StyledListItem = styled.li`
  font-size: 1.3vw;
  font-family: "Roboto";
  @media (max-width: 850px) {
    font-size: 2vw;
  }
  @media (max-width: 650px) {
    font-size: 3vw;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #fafafa;
  text-decoration: none;
  &:hover {
    color: #2196f3;
    font-weight: 700;
  }
  &.selected {
    font-weight: 700;
    padding-bottom: 5px;
    border-bottom: 2px solid;
    letter-spacing: 1px;
    @media (max-width: 850px) {
      border-bottom: none;
      color: #0d8cd6;
      font-weight: normal;
    }
  }
`;

const TITLES = {
  eng: ["INFO", "SEASONS", "SIMILAR SERIES"],
  spa: ["INFORMACIÓN", "TEMPORADAS", "SERIES SIMILARES"],
};

const SerieNavLinks = () => {
  const { seasonNumber } = useSeriesContext();
  const { language } = useLanguageContext();
  const { url } = useRouteMatch();

  return (
    <StyledNav>
      <StyledList>
        <StyledListItem>
          <StyledNavLink to={`${url}/info`} activeClassName="selected">
            {TITLES[language][0]}
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink
            // exact
            to={`${url}/season/${seasonNumber}`}
            activeClassName="selected"
          >
            {TITLES[language][1]}
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink to={`${url}/similar`} activeClassName="selected">
            {TITLES[language][2]}
          </StyledNavLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
};

export default SerieNavLinks;
