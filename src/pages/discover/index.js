import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function Discover(props) {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  const state = {
    keyword: "",
    year: 0,
    results: [],
    totalCount: 0,
    genreOptions: [],
    ratingOptions: [
      { id: 7.5, name: 7.5 },
      { id: 8, name: 8 },
      { id: 8.5, name: 8.5 },
      { id: 9, name: 9 },
      { id: 9.5, name: 9.5 },
      { id: 10, name: 10 },
    ],
    languageOptions: [
      { id: "GR", name: "Greek" },
      { id: "EN", name: "English" },
      { id: "RU", name: "Russian" },
      { id: "PO", name: "Polish" },
    ],
  };

  const searchMovies = () => {};

  // Write a function to preload the popular movies when page loads & get the movie genres

  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters

  const { genreOptions, languageOptions, ratingOptions, totalCount, results } =
    state;

  return (
    <DiscoverWrapper>
      <MobilePageTitle className={!isDesktop ? "visible" : "hidden"}>Discover</MobilePageTitle>{" "}
      {/* MobilePageTitle should become visible on small screens & mobile devices*/}
      <MovieFilters >
        <SearchFilters
          genres={genreOptions}
          ratings={ratingOptions}
          languages={languageOptions}
          searchMovies={(keyword, year) => searchMovies(keyword, year)}
        />
      </MovieFilters>
      <MovieResults>
        {totalCount > 0 && <TotalCounter>{totalCount} results</TotalCounter>}
        <MovieList movies={results || []} genres={genreOptions || []} />
      </MovieResults>
    </DiscoverWrapper>
  );
}

const DiscoverWrapper = styled.main`
  padding: 60px 45px;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 15px;

  @media(max-width: 960px) {
    flex-direction: column;
    margin-top: 0;
    padding-top: 30px;
  }
`;

const TotalCounter = styled.div`
  font-weight: 900;
`;

const MovieResults = styled.div`
  flex-grow: 2;
`;

const MovieFilters = styled.div`
  margin-left: 15px;
  flex-grow: 1;
  min-width: 300px;

  @media(max-width: 960px) {
    margin-left: 0;
  }
`;

const MobilePageTitle = styled.header`
  margin-bottom: 20px;
  padding: 20px 0;
  font-size: 22pt;
`;
