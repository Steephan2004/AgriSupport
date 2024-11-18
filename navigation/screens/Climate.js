import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";

const API_KEY = "c4c9142d1f6644e3a0b32245241003";

const Climate = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);

  const fetchWeather = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}&aqi=no`
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setError("Unable to fetch weather data.");
    }
  };

  const getLocation = async () => {
    try {
      // Request location permission
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      // Get the current location
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      setLocation(location.coords);
      fetchWeather(location.coords.latitude, location.coords.longitude);
    } catch (error) {
      console.error(error);
      setError("Error getting location.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  if (error) {
    return <Text>{error}</Text>;
  }

  if (!weatherData) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  const { location: loc, current } = weatherData;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `https:${current.condition.icon}` }} // Image URL
        style={styles.image}
      />
      <View style={styles.container1}>
        <Text style={styles.title}>Weather in {loc.name}</Text>
        <Text style={styles.text}>Time: {loc.localtime}</Text>
        <Text style={styles.text}>
          Temperature: {current.temp_c}°C or {current.temp_f}°F
        </Text>
        <Text style={styles.text}>Humidity: {current.humidity}%</Text>
        <Text style={styles.text}>Description: {current.condition.text}</Text>
        <TouchableOpacity onPress={getLocation}>
          <Text style={{...styles.buttontext,fontWeight:'600'}}>Refresh</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  container1:{
    elevation:2,
    backgroundColor:'##fffafa',
    padding:10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 17,
    marginBottom: 4,
    textAlign:'center'
  },
  image: {
    width:120,
    height: 120,
    resizeMode: "cover",
  },
  buttontext:{
    marginTop:15,
    textAlign:'center',
    padding:10,
    backgroundColor:'#85e085',
    color:'#fff',
    fontSize:17,
    borderRadius:25
  }
});

export default Climate;
