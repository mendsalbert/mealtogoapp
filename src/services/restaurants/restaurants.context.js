import React, {
  useEffect,
  useState,
  useContext,
  useMemo,
  createContext,
} from "react";

import { restaurantRequest, restaurantsTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return <RestaurantsContext.Provider>{children}</RestaurantsContext.Provider>;
};
