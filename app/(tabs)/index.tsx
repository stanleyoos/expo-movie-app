import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

import Categories from "../../components/home/Categories/Categories";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie App</Text>
      <Categories />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
