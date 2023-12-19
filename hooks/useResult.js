import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/searchh", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "istanbul",
        },
      });
      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Connection failed");
    }
  };
  useEffect(() => {
    searchApi("Toast");
  }, []);

  return [searchApi, results, errorMessage];
};
