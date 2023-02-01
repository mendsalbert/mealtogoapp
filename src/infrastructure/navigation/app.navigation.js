import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantScreen } from "../../features/restaurant/screens/restaurants.screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantNavigator } from "./restaurant.navigator";
import { MapScreen } from "../../features/map/screen/map.screen";

export const AppNavigation = () => {
  //fake screens
  const Maps = () => {
    return <Text>Maps</Text>;
  };

  const Settings = () => {
    return <Text>Setting</Text>;
  };

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Restaurant") {
              iconName = focused
                ? "ios-restaurant-sharp"
                : "ios-restaurant-outline";
            } else if (route.name === "Maps") {
              iconName = focused ? "map" : "map";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Restaurant" component={RestaurantNavigator} />
        <Tab.Screen name="Maps" component={MapScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
