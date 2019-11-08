import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import blogContext from "../context/blog-context";

const IndexScreen = () => {
  const value = useContext(blogContext);
  return (
    <View>
      <Text>hola</Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
