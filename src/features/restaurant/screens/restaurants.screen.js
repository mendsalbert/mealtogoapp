import React from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View, SafeAreaView } from "react-native";
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
        <FlatList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
            { name: 9 },
            { name: 10 },
            { name: 11 },
            { name: 12 },
            { name: 13 },
            { name: 14 },
            { name: 15 },
          ]}
          renderItem={() => <RestaurantInfo />}
          keyExtractor={(item) => {
            item.name;
          }}
          contentContainerStyle={{ padding: 16, marginTop: 16 }}
        />
      </MainWrapper>
    </SafeAreaViewWrapper>
  );
};
