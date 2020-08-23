import React from "react";
import { useParams, useRouteMatch, Link } from "react-router-dom";
import styled from "styled-components";

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
`;

const StyledListItem = styled.li`
  font-size: 1.3vw;
  font-family: "Roboto";
`;

const StyledNavLink = styled(Link)`
  color: #fafafa;
  text-decoration: none;
  &:hover {
    color: lightblue;
  }
  &.selected {
    color: grey;
  }
`;

const SerieNavLinks = () => {
  const { tvId } = useParams();
  const { url } = useRouteMatch();

  return (
    <StyledNav>
      <StyledList>
        <StyledListItem>
          <StyledNavLink to={`${url}/info`} activeClassName="selected">
            INFO
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink exact to={`${url}/season`} activeClassName="selected">
            SEASONS
          </StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink to={`${url}/similar`} activeClassName="selected">
            SIMILAR SERIES
          </StyledNavLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
};

export default SerieNavLinks;
