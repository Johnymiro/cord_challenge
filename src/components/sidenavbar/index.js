import React, { useState } from "react";
import styled, { css, useTheme } from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function SideNavBar() {
  /* Write the necessary functions to show and hide the side bar on small devices */
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [selected, setSelected] = useState("");

  return (
    <SideNavBarCont className={isDesktop ? "visible" : "hidden"}>
      {/* Implement a hamburger icon slide in effect for small devices */}
      <SideNavMainLink
        onClick={() => setSelected("wesley")}
        selected={selected === "wesley"}
        className="menu_nav_link main_nav_link"
        to="/"
        exact
      >
        Wesley
        <NavIcon arrow src={Arrow}></NavIcon>
      </SideNavMainLink>
      <SideNavMainLink
        onClick={() => setSelected("discover")}
        selected={selected === "discover"}
        className="menu_nav_link"
        to="/discover"
      >
        Discover
        <NavIcon search src={SearchWhite}></NavIcon>
      </SideNavMainLink>
      <SideNavHeader>
        <HeaderText>Watched</HeaderText>
      </SideNavHeader>
      <NavLink
        onClick={() => setSelected("watched_movies")}
        selected={selected === "watched_movies"}
        className="menu_nav_link"
        to="/watched/movies"
      >
        Movies
      </NavLink>
      <NavLink
        onClick={() => setSelected("watched_tvShows")}
        selected={selected === "watched_tvShows"}
        className="menu_nav_link"
        to="/watched/tv-shows"
      >
        Tv Shows
      </NavLink>
      <SideNavHeader>
        <HeaderText>Saved</HeaderText>
      </SideNavHeader>
      <NavLink
        onClick={() => setSelected("saved_movies")}
        selected={selected === "saved_movies"}
        className="menu_nav_link"
        to="/saved/movies"
      >
        Movies
      </NavLink>
      <NavLink
        onClick={() => setSelected("saved_tvShows")}
        selected={selected === "saved_tvShows"}
        className="menu_nav_link"
        to="/saved/tv-shows"
      >
        Tv Shows
      </NavLink>
    </SideNavBarCont>
  );
}

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 260px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  transition: all 200ms ease;

  color: white;
  box-sizing: border-box;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;

const SideNavMainLink = styled(Link)`
  position: relative;
  display: block;
  font-size: 1.6em;
  color: white;
  padding: 15px;
  padding-left: 35px;
  transition: all 200ms ease;
  background-color: ${(props) => (props.selected ? colors.primaryColor : "")};
  &:hover {
    color: ${(props) => (!props.selected ? colors.primaryColor : "white")};
  }
`;

const NavIcon = styled.img`
  position: absolute;
  right: 35px;
  top: ${(props) => (props.search ? "30%" : "40%")};
`;

const SideNavHeader = styled.div`
  font-size: 1.6em;
  margin: 30px 0 15px 0;
  padding-bottom: 12px;
  border-bottom: 1px solid grey;
  padding-left: 35px;
`;

const HeaderText = styled.div``;

const NavLink = styled(Link)`
  display: block;
  color: ${(props) => (props.selected ? "white" : "lightgrey")};
  font-size: 1.4em;
  font-weight: 300;
  padding: 10px 0;
  padding-left: 35px;
  transition: all 200ms ease;
  background-color: ${(props) => (props.selected ? colors.primaryColor : "")};
  &:hover {
    color: ${(props) => (!props.selected ? colors.primaryColor : "white")};
  }
`;
