import React from "react";
import { Text } from "react-native";
import { RestaurantInfo } from "../components/restaurant-info-card.components";
import { SafeArea } from "../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
    </SafeArea>
  );
};
