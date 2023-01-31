import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchBar = styled(Searchbar)`
  width: 100%;
  padding: 0;
  border-radius: 30px;
  background-color: white;
`;

const SearchWrapper = styled.View`
  background-color: white;
  padding: 10px;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setsearchKeyword] = useState(keyword);
  return (
    <SearchWrapper>
      <SearchBar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </SearchWrapper>
  );
};
