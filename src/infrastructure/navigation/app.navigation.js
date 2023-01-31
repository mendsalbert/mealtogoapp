import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantScreen } from "../../features/restaurant/screens/restaurants.screen";

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
        <Tab.Screen name="Restaurant" component={RestaurantScreen} />
        <Tab.Screen name="Maps" component={Maps} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
