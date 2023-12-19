import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResult();
  const [term, setTerm] = useState("");

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <ScrollView>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : (
        <>
          {results.length === 0 ? (
            <></>
          ) : (
            <>
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
            </>
          )}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
  },
});
