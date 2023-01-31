import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info-card.components";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../components/search.component";

const SafeAreaViewWrapper = styled(SafeAreaView)`
  flex: 1;
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
      {restaurantContext.isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue800} />
        </LoadingContainer>
      )}
      <Search />
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
