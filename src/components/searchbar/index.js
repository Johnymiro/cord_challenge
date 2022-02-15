import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import FilterIcon from "../../images/filter-icon.png";

export default function SearchBar({ searchText, setSearchText }) {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <>
      <SearchContainer>
        <InputIcons>
          <Input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            type="text"
            placeholder="Search for movies"
          />
          <Icon src={SearchIcon} />
        </InputIcons>
        <FilterIconContainer>
          {!isDesktop && (
            <MobileFilterIcon src={FilterIcon} alt="filter icon" />
          )}
        </FilterIconContainer>
      </SearchContainer>

      {isDesktop && (
        <>
          &nbsp;
          <InputIcons>
            <Input
              onChange={(e) => {}}
              defaultValue={""}
              type="text"
              placeholder="Year of release"
            />
            <Icon src={CalendarIcon} />
          </InputIcons>
        </>
      )}
    </>
  );
}

const FilterIconContainer = styled.div`
  margin-left: auto;
  padding: 0 4px;
  border-bottom: 2px solid ${colors.primaryColor};
`;

const SearchContainer = styled.div`
  display: flex;
`;

const MobileFilterIcon = styled.img`
  width: 30px;
`;

const InputIcons = styled.div`
  position: relative;
  @media (max-width: 960px) {
    width: 90%;
  }
  @media (max-width: 610px) {
    width: 85%;
  }
`;

const Icon = styled.img`
  position: absolute;
  left: 0;
  padding: 3px 0px;
`;

const Input = styled.input`
  border-bottom: 2px solid ${colors.primaryColor};
  box-sizing: border-box;
  padding-left: 45px;
`;
//background-image: ${SearchIcon};
