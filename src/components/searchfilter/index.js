import React, { useContext } from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import ExpandableFilter from "../../components/expandablefilter";
import SearchBar from "../../components/searchbar";
import useMediaQuery from "../../hooks/useMediaQuery";
import { AppContext } from "../../context";

export default function SearchFilters(props) {
  const { genres, ratings, languages, searchMovies } = props;
  const { searchText, setSearchText } = useContext(AppContext);
  const isDesktop = useMediaQuery("max-width: 960px");

  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        {/* Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </SearchFiltersCont>
      {isDesktop && (
        <SearchFiltersCont>
          <CategoryTitle>Movie</CategoryTitle>
          {/* Implement a component called "ExpandableFilter" and apply it to all filter categories */}
          Categories..
        </SearchFiltersCont>
      )}
    </FiltersWrapper>
  );
}

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

  @media(max-width: 960px) {
    background-color: #f6f7f9;
    padding: 0;
  }
`;

const CategoryTitle = styled.div``;
