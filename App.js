import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
// import { s } from "react-native-wind";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "green", padding: 10 }}>
        <Text>Search</Text>
      </View>
      <View style={{ backgroundColor: "red", flex: 1, padding: 10 }}>
        <Text>Main</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
