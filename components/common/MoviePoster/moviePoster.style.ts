import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  moviePoster: {
    width: 300,
    position: "relative",
    height: 500,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 32,
    margin: 10,
    fontWeight: "bold",
    color: "#ffffff",
  },
  movieImage: {
    borderRadius: 10,
    width: "100%",
    height: 300,
  },
  year: {
    fontSize: 22,
    color: "#ffffff",
    position: "absolute",
    bottom: 10,
    left: 20,
  },
});

export default styles;
