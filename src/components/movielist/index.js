import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../../context";

import MovieItem from "../movieitem";

export default function MovieList() {
  const { results, imagesBaseUrl } = useContext(AppContext);

  return (
    <MoviesWrapper>
      {/* Finish the MovieItem component and use it here to display the movie results */}
      {imagesBaseUrl &&
        results?.map((movie) => {
          return (
            <MovieItem
              key={movie.original_title}
              imgBaseUrl={imagesBaseUrl}
              {...movie}
            />
          );
        })}
    </MoviesWrapper>
  );
}

const MoviesWrapper = styled.div`
  position: relative;
`;
