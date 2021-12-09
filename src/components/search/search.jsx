import React from "react";
import "./search.css";
import SearchIcon from "../../images/icon-search.svg";

const Search = ({ sendDataToParent }) => {
  const [searchValue, setSearchValue] = React.useState("");

  const getUser = async () => {
    if (searchValue !== "") {
      const response = await fetch(
          `https://api.github.com/users/${searchValue}`
        ),
        data = await response.json();
      sendDataToParent(data);
    }
  };

  return (
    <div className="search-bar">
      <img src={SearchIcon} alt="search icon" />
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="search-button" onClick={() => getUser()}>
        Search
      </button>
    </div>
  );
};

export default Search;
