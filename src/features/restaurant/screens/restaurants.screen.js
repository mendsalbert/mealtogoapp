import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info-card.components";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

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

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
export const RestaurantScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  return (
    <SafeAreaViewWrapper>
      {/* {true && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue800} />
        </LoadingContainer>
      )} */}
      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>
      <MainWrapper>
        <FlatList
          data={restaurantContext.restaurants}
          renderItem={({ item }) => {
            return <RestaurantInfo restaurant={item} />;
          }}
          keyExtractor={(item) => {
            item.name;
          }}
          contentContainerStyle={{ padding: 16, marginTop: 16 }}
        />
      </MainWrapper>
    </SafeAreaViewWrapper>
  );
};
