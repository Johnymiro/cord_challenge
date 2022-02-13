import { useEffect, useState, createContext, useReducer } from "react";
import { getConfig, getDiscoverList } from "../fetcher";

const initState = {
  searchText: "",
  imagesBaseUrl: "",
  discoverList: null,
  keyword: "",
  searchResults: null,
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
      return { ...state, discoverList: action.payload };
    case actionTypes.setSearchText:
      return { ...state, searchText: action.payload };
    case actionTypes.setState:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { imagesBaseUrl, searchText, discoverList, searchResults } = state;

  useEffect(() => {
    console.log("search text", searchText);
  }, [searchText]);

  const handleImageBaseUrl = async () => {
    try {
      const url = await getConfig().then(
        (res) => res.data?.images?.secure_base_url
      );
      dispatch({ type: actionTypes.setImgBaseUrl, payload: url });
    } catch (err) {
      console.error(err);
    }
  };

  const setSearchText = (text) =>
    dispatch({ type: actionTypes.setSearchText, payload: text });

  const initDiscoverList = async () => {
    try {
      const list = await getDiscoverList().then((res) => res.data);
      dispatch({ type: actionTypes.setDiscoverList, payload: list });
      console.log("list", list);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!imagesBaseUrl) {
      handleImageBaseUrl();
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        setSearchText,
        searchText,
        initDiscoverList,
        discoverList,
        searchResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
