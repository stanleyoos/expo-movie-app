import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { useFetch } from "../../hook/useFetch";

export default function TabOneScreen() {
  useFetch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie App</Text>
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
