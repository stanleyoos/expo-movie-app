import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const CategoryPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    border: "1px solid white",
    color: "#ffffff",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    color: "#ffffff",
  },
});

export default CategoryPage;
