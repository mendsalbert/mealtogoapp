import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

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
  <SearchWrapper>
    <SearchBar />
  </SearchWrapper>;
};
