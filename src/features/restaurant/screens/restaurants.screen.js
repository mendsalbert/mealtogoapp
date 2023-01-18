import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info-card.components";
import styled from "styled-components/native";

export const RestaurantScreen = () => {
  const SafeAreaViewWrapper = styled(SafeAreaView)`
    flex: 1;
  `;

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

  const MainWrapper = styled.View`
    flex: 1;
    padding: 10px;
  `;
  return (
    <SafeAreaViewWrapper>
      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>
      <MainWrapper>
        <RestaurantInfo />
      </MainWrapper>
    </SafeAreaViewWrapper>
  );
};
