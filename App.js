import "react-native-gesture-handler";
import * as React from "react";
import { useContext } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBpYzTk-OOLwkzLpO4BIdGpMCRH88zfItQ",
  authDomain: "mealtogo-776a4.firebaseapp.com",
  projectId: "mealtogo-776a4",
  storageBucket: "mealtogo-776a4.appspot.com",
  messagingSenderId: "1079595158914",
  appId: "1:1079595158914:web:96f6b19612046d63d6d39b",
  measurementId: "G-LJYFZ4E9CT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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
import { Navigation } from "./src/infrastructure/navigation";
import {
  AuthenticationContext,
  AuthenticationContextProvider,
} from "./src/services/authentication/authentication.context";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  // React.useEffect(() => {
  //   signInWithEmailAndPassword(auth, "mendsalbert@gmail.com", "1234567")
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       setIsAuthenticated(true);
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorMessage);
  //     });
  // }, []);

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
      <AuthenticationContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
}
