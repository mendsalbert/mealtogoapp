import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantScreen } from "../../features/restaurant/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();
export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="Restaurants Details"
        component={() => {
          <Text>Restaurant Details</Text>;
        }}
      />
    </RestaurantStack.Navigator>
  );
};
