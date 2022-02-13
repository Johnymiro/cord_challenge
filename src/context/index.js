import { useEffect, useState, createContext } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState({
    searchText: "",
    movieItems: [],
  });

  const [searchText, setSearchText] = useState("");

  const handleChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };


  useEffect(() => {
  }, []);

  return (
    <AppContext.Provider
      value={{
          handleChangeSearchText,
          searchText
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;