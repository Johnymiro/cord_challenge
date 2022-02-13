import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import ExpandableFilter from "../../components/expandablefilter";
import SearchBar from "../../components/searchbar";

export default function SearchFilters(props) {
  const [searchText, setSearchText] = useState("");
  const { genres, ratings, languages, searchMovies } = props;

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        {/* Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </SearchFiltersCont>
      <SearchFiltersCont>
        <CategoryTitle>Movie</CategoryTitle>
        {/* Implement a component called "ExpandableFilter" and apply it to all filter categories */}
        Categories..
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}

const Input = styled.input``;

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.div``;
