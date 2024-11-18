import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Text, View } from "react-native"; // Corrected import

// Screens
import MainPage from "./screens/MainPage";
import Store from "./screens/Store";
import Scheme from "./screens/Scheme";
import Climate from "./screens/Climate";
import Profile from "./screens/Profile";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { height: 65, paddingTop: 10 },
        tabBarIcon: ({ color, focused }) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Store") {
            iconName = "store";
          } else if (route.name === "Scheme") {
            iconName = "account-balance";
          } else if (route.name === "Climate") {
            iconName = "cloud";
          } else if (route.name === "Profile") {
            iconName = "person";
          }

          return (
            <View
              style={{
                width: focused? 70:50,
                height: focused?70:50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
                backgroundColor:focused?"#85e085":"#fff",
                transform: focused ? [{ scale: 1.5 }] : [{ scale: 1 }],
              }}
            >
              <Icon name={iconName} size={28} color={color} />
            </View>
          );
        },
        tabBarLabel: ({ focused }) => (
          <Text
            style={{
              textAlign: "center",
              fontWeight: focused ? "bold" : "normal",
              color: focused ? "#fff" : "grey",
            }}
          >
            {route.name}
          </Text>
        ),
      })}
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "grey",
        labelStyle: { fontSize: 15, paddingBottom: 10 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Scheme"
        component={Scheme}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Climate"
        component={Climate}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default MainContainer;
