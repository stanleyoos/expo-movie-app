import { Text, View } from "react-native";
import { useFetch } from "../../../hook/useFetch";
import React from "react";
import styles from "./categories.style";

const Categories = () => {
  const { data, error, isLoading } = useFetch("/titles/utils/genres");
  console.log(data);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.categoriesContainer}>
        {data?.results?.map((cat: any) => {
          if (cat !== null) {
            return (
              <Text style={styles.categoryElement} key={cat}>
                {cat}
              </Text>
            );
          }
        })}
      </View>
    </View>
  );
};

export default Categories;
