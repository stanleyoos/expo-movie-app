import { Text, View } from "react-native";
import { useFetch } from "../../../hook/useFetch";
import React from "react";
import styles from "./categories.style";
import { FlatList, ScrollView } from "react-native";

const Categories = () => {
  const { data, error, isLoading } = useFetch("/titles/utils/genres");
  const categories = data?.results?.filter((cat: null) => cat !== null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>

      <View style={styles.categoriesContainer}>
        {categories?.map((categ: string, index: number) => (
          <Text key={index} style={styles.categoryElement}>
            {categ}
          </Text>
        ))}
      </View>

      {/* <ScrollView style={styles.categoriesContainer}>
        {categories?.map((categ: any) => (
          <Text key={categ} style={styles.categoryElement}>
            {categ}
          </Text>
        ))}
      </ScrollView> */}

      {/* <FlatList
        style={styles.categoriesContainer}
        data={categories}
        horizontal={false}
        numColumns={4}
        renderItem={({ item }) => (
          <Text key={item} style={styles.categoryElement}>
            {item}
          </Text>
        )}
      /> */}
    </View>
  );
};

export default Categories;
