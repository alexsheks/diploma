import React from "react";
import { SearchBar, SearchBarWrapper, Wrapper, Label } from "./SearchElements";
const Search = () => {
  return (
    <Wrapper>
      <SearchBarWrapper>
        <SearchBar placeholder="search" />
        <Label>Search</Label>
      </SearchBarWrapper>
    </Wrapper>
  );
};

export default Search;
