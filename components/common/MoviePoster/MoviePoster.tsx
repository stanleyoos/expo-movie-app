import { Image, Text, View } from "react-native";
import styles from "./moviePoster.style";
import React from "react";

const MoviePoster = ({ movie }: { movie: any }) => {
  console.log(movie);
  return (
    <View style={styles.moviePoster}>
      <Image
        source={{ uri: movie?.primaryImage?.url }}
        style={styles.movieImage}
      />
      <Text style={styles.title}>{movie.originalTitleText.text}</Text>
      <Text style={styles.year}>{movie.releaseDate.year}</Text>
    </View>
  );
};

export default MoviePoster;
