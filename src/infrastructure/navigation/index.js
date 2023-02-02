import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AppNavigator } from "./app.navigator";
import 
export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return <AppNavigator />;
};
