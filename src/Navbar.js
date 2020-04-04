import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Navbar = props => {
  return (
    <View style={[styles.navbar]}>
      <Text>To do App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 100,
    width: '100%',
    backgroundColor: "grey",
    justifyContent: 'flex-end',
  }
});
