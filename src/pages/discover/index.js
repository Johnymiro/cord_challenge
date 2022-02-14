import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";
import useMediaQuery from "../../hooks/useMediaQuery";
import { getDiscoverMovies } from "../../fetcher";
import { AppContext } from "../../context";

export default function Discover(props) {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const {
    genreOptions,
    languageOptions,
    ratingOptions,
    totalCount,
    results,
    initDiscoverList,
    imagesBaseUrl,
  } = useContext(AppContext);

  // Write a function to preload the popular movies when page loads & get the movie genres

  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
  useEffect(() => {
    initDiscoverList();
  }, []);

  return (
    <DiscoverWrapper>
      <MobilePageTitle className={!isDesktop ? "visible" : "hidden"}>
        Discover
      </MobilePageTitle>{" "}
      {/* MobilePageTitle should become visible on small screens & mobile devices*/}
      <MovieFilters>
        <SearchFilters
        /*           genres={genreOptions}
          ratings={ratingOptions}
          languages={languageOptions} */
        />
      </MovieFilters>
      <MovieResults>
        {totalCount > 0 && <TotalCounter>{totalCount} results</TotalCounter>}
        <MovieList />
      </MovieResults>
    </DiscoverWrapper>
  );
}

const DiscoverWrapper = styled.main`
  padding: 60px 45px;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 15px;

  @media (max-width: 960px) {
    flex-direction: column;
    margin-top: 0;
  padding: 60px 15px;
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

  @media (max-width: 960px) {
    margin-left: 0;
  }
`;

const MobilePageTitle = styled.header`
  margin-bottom: 20px;
  padding: 20px 0;
  font-size: 22pt;
`;
