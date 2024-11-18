// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import MainContainer from "./navigation/MainContainer";
import NewAccount from "./screens/NewAccount";
import ProductDetails from "./navigation/screens/ProductDetails";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainContainer"
          component={MainContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewAccount"
          component={NewAccount}
          options={{
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#85e085" },
            headerTitleStyle: { textAlign: "center",left:70 },
          }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: "#85e085" },
            headerTitleStyle: { textAlign: "center",left:70 },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
