import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My name is Stanislaw</Text>
      <Text style={styles.subtitle}>Find me on:</Text>
      <View>
        <Link
          href="https://github.com/stanleyoos"
          hrefAttrs={{
            target: "_blank",
          }}
        >
          <FontAwesome
            name="github"
            size={28}
            style={{ marginBottom: -3 }}
            color="white"
          />
        </Link>
      </View>
      <View
        style={styles.separator}
        lightColor="rgba(255,255,255,0.1)"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
