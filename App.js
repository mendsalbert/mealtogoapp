import * as React from "react";
import { useContext } from "react";
import { ThemeProvider } from "styled-components/native";
import { RestaurantScreen } from "./src/features/restaurant/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import {
  useFonts as oswaldloaded,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as latoloaded,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

export default function App() {
  const [oswaldLoaded] = oswaldloaded({
    Oswald_400Regular,
  });
  const [latoLoaded] = latoloaded({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  //fake screens
  const Maps = () => {
    return <Text>Maps</Text>;
  };

  const Settings = () => {
    return <Text>Setting</Text>;
  };

  const Tab = createBottomTabNavigator();

  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantsContextProvider>
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
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}
