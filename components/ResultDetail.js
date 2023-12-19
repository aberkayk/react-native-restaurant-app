import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import StarRating from "react-native-star-rating";

export default function ResultDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={
          result.item.image_url ? { uri: result.item.image_url } : null
        }
      />
      <Text style={styles.name}>{result.item.name}</Text>
      <Text>
        {result.item.rating}
        <StarRating
          rating={result.item.rating}
          starSize={15}
          fullStarColor="gold"
        />
        , {result.item.review_count} Rating
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 125,
    borderRadius: 10,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});
