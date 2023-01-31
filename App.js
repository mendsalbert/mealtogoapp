import * as React from "react";
import { useContext } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
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
import { AppNavigation } from "./src/infrastructure/navigation/app.navigation";

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

  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <AppNavigation />
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}
