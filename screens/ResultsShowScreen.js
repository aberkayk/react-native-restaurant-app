import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function ResultsShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      {result.is_closed ? (
        <View style={styles.icon}>
          <AntDesign name="closecircle" size={30} color="black" />
        </View>
      ) : (
        <View style={styles.icon}>
          <MaterialIcons name="delivery-dining" size={30} color="black" />
        </View>
      )}

      <FlatList
        data={result.photos}
        renderItem={(photo) => {
          return (
            <Image style={styles.image} source={{ uri: photo.item }} />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    margin: 10,
    borderRadius: 20,
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginVertical: 10,
    fontWeight: "bold",
  },
  phone: {
    alignSelf: "center",
    fontSize: 20,
    textDecorationLine: "underline",
  },
  icon: {
    alignSelf: "center",
  },
});
