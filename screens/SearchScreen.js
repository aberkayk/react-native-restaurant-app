import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [searchApi, results] = useResult();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar />
      <ResultsList
        title="Cheap Restaurants"
        results={filterResultsByPrice("₺")}
      />
      <ResultsList
        title="Mid-Range Restaurants"
        results={filterResultsByPrice("₺₺")}
      />
      <ResultsList
        title="Expensive Restaurants"
        results={filterResultsByPrice("₺₺₺")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
