import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../src/screens/home";
import { BlurView } from "expo-blur";

const App = () => {
  return (
    <>
      <ImageBackground
        style={style.image}
        source={require("../src/assets/images/aesthetic.jpg")}
      >
        <BlurView intensity={0} style={style.container}>
          <Home />
        </BlurView>
      </ImageBackground>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

export default App;
