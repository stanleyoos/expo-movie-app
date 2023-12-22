import { Text, View } from "react-native";
import styles from "./moviePoster.style";
import React from "react";

const MoviePoster = ({ movie }: { movie: any }) => {
  return (
    <View style={styles.moviePoster}>
      <Text style={styles.title}>{movie.id}</Text>
    </View>
  );
};

export default MoviePoster;
