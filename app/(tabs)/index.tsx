import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Categories from "../../components/home/Categories/Categories";
import UpcomingMovies from "../../components/home/UpcomingMovies/UpcomingMovies";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <FontAwesome name="film" size={40} style={{ marginRight: 20 }} />
        Movie App
      </Text>
      <Categories />
      <UpcomingMovies />
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
