import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    maxWidth: 900,
    marginTop: 40,
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-start",
    color: "#ffffff",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
    color: "#ffffff",
  },

  upcomingMoviesElement: {
    fontSize: 26,
    color: "#ffffff",
    padding: 20,
    border: "1px solid white",
    margin: 20,
    borderRadius: 10,
    //width: 200,
  },

  upcomingMoviesContainer: {
    width: "100%",
  },
});

export default styles;
