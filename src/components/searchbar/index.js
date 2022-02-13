import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";

export default function SearchBar({ searchText, setSearchText }) {
  return (
    <>
      <Input
        onChange={(e) => setSearchText(e.target.value)}
        defaultValue={searchText}
        type="text"
        placeholder="Search"
      />
      &nbsp;
      <Input
        onChange={(e) => {}}
        defaultValue={""}
        type="text"
        placeholder="Year of release"
      />
    </>
  );
}

const Input = styled.input`
  border-bottom: 2px solid ${colors.primaryColor};
`;
