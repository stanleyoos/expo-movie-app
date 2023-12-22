import { FlatList, Text, View } from "react-native";
import React from "react";
import styles from "./upcomingMovies.style";
import { useFetch } from "../../../hook/useFetch";
import MoviePoster from "../../common/MoviePoster/MoviePoster";

const UpcomingMoviesPage = () => {
  const { data } = useFetch("/titles/x/upcoming");
  console.log(data.results);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Movies</Text>
      <FlatList
        style={styles.upcomingMoviesContainer}
        data={data.results}
        horizontal={true}
        renderItem={({ item }) => <MoviePoster movie={item} />}
      />
    </View>
  );
};

export default UpcomingMoviesPage;
