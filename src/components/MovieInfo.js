import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  padding: 3vw;
  background-color: black;
  color: #fafafa;
  font-family: "Roboto";
  background-color: #1d1d1d;
  box-shadow: inset 0px 30px 100px -30px #000;
  @media (max-width: 850px) {
    /* margin-bottom: 15vw; */
    padding: 3vw 3vw 15vw 3vw;
  }
`;

const StyledImg = styled.img`
  height: 25vw;
  width: 17vw;
  @media (max-width: 850px) {
    height: 46vw;
    width: 30vw;
  }
  @media (max-width: 650px) {
    height: 59vw;
    width: 40vw;
  }
`;

const StyledContainer = styled.div`
  padding-left: 3vw;
`;

const StyledOverview = styled.div`
  @media (min-width: 850px) {
    width: 90%;
    margin-bottom: 2vw;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  display: flex;
  margin: 1vw 0;
`;

const StyledCategory = styled.div`
  width: 150px;
  font-size: 1vw;
  @media (max-width: 850px) {
    font-size: 1.5vw;
  }
  @media (max-width: 650px) {
    font-size: 2.3vw;
    width: 20vw;
  }
`;

const StyledTitle = styled.h2`
  font-size: 1.5vw;
  @media (max-width: 850px) {
    font-size: 2.5vw;
    margin-top: 0;
  }
  @media (max-width: 650px) {
    font-size: 4vw;
    /* margin-top: 0; */
  }
`;

const StyledText = styled.div`
  font-size: 1vw;
  @media (max-width: 850px) {
    font-size: 1.5vw;
    max-width: 84%;
  }
  @media (max-width: 650px) {
    font-size: 2.3vw;
    width: -webkit-fill-available;
  }
`;

const MovieInfo = ({ data }) => {
  const {
    overview,
    poster_path,
    genres,
    runtime,
    release_date,
    budget,
    original_language,
    original_title,
  } = data;
  const movieHours = Math.floor(runtime / 60);
  const movieMinutes = runtime - movieHours * 60;

  //   Función para determinar la fecha como string
  const getReleaseDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const movieDate = new Date(release_date);
    return `${movieDate.getDate() + 1} ${
      months[movieDate.getMonth()]
    }, ${movieDate.getFullYear()}`;
  };

  return (
    <StyledSection>
      <StyledImg src={`https://image.tmdb.org/t/p/original${poster_path}`} />
      <StyledContainer>
        <StyledOverview>
          <StyledTitle>Storyline</StyledTitle>
          <StyledText>{overview}</StyledText>
        </StyledOverview>
        <div>
          <StyledList>
            {original_language !== "en" && (
              <StyledListItem>
                <StyledCategory>Original Title</StyledCategory>
                <StyledText>{original_title}</StyledText>
              </StyledListItem>
            )}
            <StyledListItem>
              <StyledCategory>Runtime</StyledCategory>
              <StyledText>
                {movieHours}h {movieMinutes}min
              </StyledText>
            </StyledListItem>
            <StyledListItem>
              <StyledCategory>Genre</StyledCategory>
              <StyledText>
                {genres.map((genre, i) => (
                  <span>
                    {/* si el género es el último, no lleva coma; si no, sí */}
                    {i === genres.length - 1 ? genre.name : genre.name + ", "}
                  </span>
                ))}
              </StyledText>
            </StyledListItem>
            <StyledListItem>
              <StyledCategory>Released</StyledCategory>
              <StyledText>{getReleaseDate()}</StyledText>
            </StyledListItem>
            <StyledListItem>
              <StyledCategory>Budget</StyledCategory>
              <StyledText>
                {/* Algunas pelis no traen presupuesto, por eso agrego este ternario */}
                {budget === 0 ? "Not reported" : `$${budget.toLocaleString()}`}
              </StyledText>
            </StyledListItem>
          </StyledList>
        </div>
      </StyledContainer>
    </StyledSection>
  );
};

export default MovieInfo;
