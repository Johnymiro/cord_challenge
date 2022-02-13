import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function SearchBar({ searchText, setSearchText }) {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <>
      <InputIcons>
        <Input
          onChange={(e) => setSearchText(e.target.value)}
          defaultValue={searchText}
          type="text"
          placeholder="Search for movies"
        />
        <Icon src={SearchIcon} />
      </InputIcons>
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

const InputIcons = styled.div`
  position: relative;
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
