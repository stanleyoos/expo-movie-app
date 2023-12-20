import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    maxWidth: 900,
    marginTop: 40,
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-start",
    border: "1px solid white",
    color: "#ffffff",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 40,
    color: "#ffffff",
  },
  categoryElement: {
    fontSize: 26,
    color: "#ffffff",
    padding: 20,
    border: "1px solid white",
    margin: 5,
    borderRadius: 10,
  },
  categoriesContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default styles;
