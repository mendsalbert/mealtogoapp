import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View, SafeAreaView, Pressable } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info-card.components";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../components/search.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeArea } from "../components/utility/safe-area.component";

const MainWrapper = styled.View`
  flex: 1;
  padding: 10px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
export const RestaurantScreen = ({ navigation }) => {
  const restaurantContext = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {restaurantContext.isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue800} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("RestaurantDetail")}
            >
              <RestaurantInfo restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => {
          item.name;
        }}
        contentContainerStyle={{ padding: 16, marginTop: 16 }}
      />
    </SafeArea>
  );
};
