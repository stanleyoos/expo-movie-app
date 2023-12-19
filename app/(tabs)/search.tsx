import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    marginTop: 40,
    color: "#ffffff",
  },
});
