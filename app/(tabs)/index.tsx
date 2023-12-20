import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import AnimatedStyleUpdateExample from "../../components/home/AnimatedComponent/AnimatedComponent";

import Categories from "../../components/home/Categories/Categories";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie App</Text>
      <Categories />
      {/* <AnimatedStyleUpdateExample /> */}
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
