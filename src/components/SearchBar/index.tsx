import React, { KeyboardEvent } from "react";
import "./styles.css";

interface ISearchBarProps {
  placeholder: string;
  title: string;
  onSearch: (event: KeyboardEvent<HTMLInputElement>) => void;
}

function SearchBar({ placeholder, title, onSearch }: ISearchBarProps) {
  return (
    <input
      type="text"
      id="searchbar"
      onKeyUp={onSearch}
      placeholder={placeholder}
      title={title}
      name="searchbar"
    ></input>
  );
}

export default SearchBar;
