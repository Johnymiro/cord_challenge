import { useEffect, useState, createContext, useReducer } from "react";
import { getConfig, getDiscoverList, searchMovieByName } from "../fetcher";

const initState = {
  searchText: "",
  imagesBaseUrl: "",
  keyword: "",
  searchResults: null,
  genreOptions: [],
  totalCount: 0,
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

const actionTypes = {
  setImgBaseUrl: "SET_IMAGE_BASE_URL",
  setDiscoverList: "SET_DISCOVER_LIST",
  setState: "SET_STATE",
  setSearchText: "SET_SEARCH_TEXT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.setImgBaseUrl:
      return { ...state, imagesBaseUrl: action.payload };
    case actionTypes.setDiscoverList:
      return handleDiscoverListReducer(state, action.payload);
    case actionTypes.setSearchText:
      return { ...state, searchText: action.payload };
    case actionTypes.setState:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

function handleDiscoverListReducer(state, list) {
  console.log("fetching");
  return {
    ...state,
    page: list.page,
    results: list.results,
    totalCount: list.totalCount,
  };
}

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { imagesBaseUrl, searchText } = state;

  const handleImageBaseUrl = async () => {
    try {
      const url = await getConfig().then(
        (res) => res.data?.images?.secure_base_url
      );
      return dispatch({ type: actionTypes.setImgBaseUrl, payload: url });
    } catch (err) {
      console.error(err);
    }
  };

  const initDiscoverList = async () => {
    try {
      const list = await getDiscoverList().then((res) => res.data);
      dispatch({ type: actionTypes.setDiscoverList, payload: list });
    } catch (err) {
      console.error(err);
    }
  };

  const setSearchText = (text) =>
    dispatch({ type: actionTypes.setSearchText, payload: text });

  const handleSearchMovie = async () => {
    if (searchText.length === 0) {
      initDiscoverList();
      return;
    }
    const results = await searchMovieByName(searchText).then((res) => res.data);
    dispatch({ type: actionTypes.setDiscoverList, payload: results });
  };

  useEffect(() => {
    if (!imagesBaseUrl) {
      handleImageBaseUrl();
    }
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearchMovie();
      // Send Axios request here
    }, 1000);

    /*     if (!searchText && !state.results?.length) {
      initDiscoverList();
    } */

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

  return (
    <AppContext.Provider
      value={{
        setSearchText,
        initDiscoverList,
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
