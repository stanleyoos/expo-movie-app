import { Text, View } from "react-native";
import { useFetch } from "../../../hook/useFetch";
import React from "react";
import styles from "./categories.style";
import { FlatList, ScrollView } from "react-native";
import { Link } from "expo-router";

const Categories = () => {
  const { data, error, isLoading } = useFetch("/titles/utils/genres");
  const categories = data?.results?.filter((cat: null) => cat !== null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>

      {/* <View style={styles.categoriesContainer}>
        {categories?.map((categ: string, index: number) => (
          <Text key={index} style={styles.categoryElement}>
            {categ}
          </Text>
        ))}
      </View> */}

      {/* <ScrollView style={styles.categoriesContainer}>
        {categories?.map((categ: any) => (
          <Text key={categ} style={styles.categoryElement}>
            {categ}
          </Text>
        ))}
      </ScrollView> */}

      <FlatList
        style={styles.categoriesContainer}
        data={categories}
        horizontal={true}
        renderItem={({ item }) => (
          <Link href={`/category/${item}`} style={styles.categoryElement}>
            <Text key={item}>{item}</Text>
          </Link>
        )}
      />
    </View>
  );
};

export default Categories;
