import * as React from "react";
import { ThemeProvider } from "styled-components/native";
import { RestaurantScreen } from "./src/features/restaurant/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  useFonts as oswaldloaded,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as latoloaded,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
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

  const Tab = createBottomTabNavigator();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Restaurant" component={RestaurantScreen} />
          {/* <RestaurantScreen /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
