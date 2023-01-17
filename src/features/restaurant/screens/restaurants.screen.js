import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info-card.components";
export const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Searchbar
          style={{
            width: "100%",
            padding: 0,
            borderRadius: "30px",
            backgroundColor: "white",
          }}
        />
      </View>
      <View style={styles.main}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  searchBar: { backgroundColor: "white", padding: 10 },
  main: { flex: 1, padding: 10 },
});
