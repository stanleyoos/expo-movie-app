import { StyleSheet } from "react-native";
import { Text, View, ScrollView } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Categories from "../../components/home/Categories/Categories";
import UpcomingMovies from "../../components/home/UpcomingMovies/UpcomingMovies";

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        <FontAwesome name="film" size={40} style={{ marginRight: 20 }} />
        Movie App
      </Text>
      <Categories />
      <UpcomingMovies />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    marginTop: 40,
    color: "#ffffff",
    marginHorizontal: "auto",
  },
});
