import React, {
  useEffect,
  useState,
  useContext,
  useMemo,
  createContext,
} from "react";
import { LocationContext } from "../location/location.context";

import { restaurantRequest, restaurantsTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);
  const retrieveRestaurants = () => {
    setTimeout(() => {
      setIsLoading(true);
      restaurantRequest()
        .then(restaurantsTransform)
        .then((results) => {
          console.log("results", results);
          setRestaurants(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants(location);
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
