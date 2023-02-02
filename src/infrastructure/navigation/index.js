import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AppNavigator } from "./app.navigator";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "../../services/authentication/account.navigator";
export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
