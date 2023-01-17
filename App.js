import * as React from "react";
import { ThemeProvider } from "styled-components/native";
import { RestaurantScreen } from "./src/features/restaurant/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
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
  return (
    <ThemeProvider theme={theme}>
      <RestaurantScreen />
    </ThemeProvider>
  );
}
