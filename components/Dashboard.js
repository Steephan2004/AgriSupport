import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon name="home" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Store")}>
          <Icon name="store" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.balanceIcon}
          onPress={() => navigation.navigate("Scheme")}
        >
          <Icon name="account-balance" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Climate")}>
          <Icon name="cloud" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon name="person" size={30} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 0.1,
    width: wp(100),
    borderRadius: 40,
  },
  iconContainer: {
    flex: 0,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    padding: 0,
  },
  balanceIcon: {
    backgroundColor: "#fff",
    borderRadius: 100,
    bottom: 40,
    padding: 20,
    borderColor: "black",
    borderWidth: 0.1,
  },
});

export default Dashboard;
