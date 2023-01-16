import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Text>Open up App.js to start working on your!</Text> */}
      {/* <StatusBar style="auto" /> */}
      <View style={{ backgroundColor: "green", padding: 16 }}>
        <Text>Search</Text>
      </View>
      <View style={{ backgroundColor: "blue", flex: 1, padding: 16 }}>
        <Text>Main</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
