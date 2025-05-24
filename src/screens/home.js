import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import fonts from "../utils/fonts";
import { useFonts } from "expo-font";

const key = "4b8d89fae3d64099a0384424251604";
const city = "Pokhara";
const API = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}`;

const Home = () => {
  const [fontsLoaded] = useFonts(fonts);
  const [data, setdata] = useState(null);

  const information = async () => {
    const response = await fetch(API);
    const json = await response.json();
    setdata(json);
  };

  useEffect(() => {
    information();
  }, []);

  return (
    <View>
      {data ? (
        <>
          <View>
            <View style={styles.info}>
              <Text style={styles.location}>
                {data.location.name}, {data.location.country} (
                {data.location.lat}° lat, {data.location.lon}° lon)
              </Text>
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.degree}>{data.current.temp_c}°C</Text>
                  <Text style={styles.inf}>{data.current.temp_f}°F</Text>
                </View>
                <View>
                  <Text
                    style={[
                      styles.location,
                      { fontFamily: "Tanker", fontSize: 25 },
                    ]}
                  >
                    Feels Like: {data.current.feelslike_c}°C (
                    {data.current.feelslike_f}°F)
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={[styles.location, { fontSize: 12, color: "#fff" }]}
                >
                  Last Updated: {data.current.last_updated}
                </Text>
              </View>
            </View>
            <View style={styles.upcoming}></View>
          </View>
        </>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{ color: "white", fontFamily: "Quicksand", fontSize: 30 }}
          >
            Loading...
          </Text>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  info: {
    margin: 20,
  },
  location: {
    fontFamily: "Tanker",
    fontSize: 20,
  },
  degree: {
    fontSize: 120,
    fontFamily: "Tanker",
  },
  inf: {
    fontSize: 30,
    paddingLeft: 20,
    paddingTop: 45,
    fontFamily: "Quicksand",
  },
  upcoming: {
    height: 100,
    width: 400,
  },
});
