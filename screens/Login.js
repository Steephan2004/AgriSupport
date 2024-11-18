import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Login = ({ navigation }) => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");

  const onChangeText = (inputText) => {
    setText(inputText);
  };
  const onChangeText1 = (inputText) => {
    setText1(inputText);
  };

  const onSubmit = () => {
    // Handle submission here, for example, you could send the text to a server or perform any other action
    console.log("Submitted Text:", text);
    navigation.navigate("MainContainer");
  };

  return (
    <View style={styles.container}>
      <View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Enter Phone Number"
            maxLength={10}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View>
        <View>
          <TextInput
            style={{ ...styles.input, marginBottom: 5 }}
            onChangeText={onChangeText1}
            value={text1}
            placeholder="Enter Password"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity>
          <Text style={{ marginBottom: 15, color: "#85e085", fontSize: 16 }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={onSubmit}>
          <Text style={styles.Button}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 20, color: "grey" }}>Or</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("NewAccount")}>
          <Text style={styles.Button}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingTop:300
  },
  input: {
    height: hp(7),
    width: wp(85),
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#32CD30",
    fontSize: 17.5,
  },
  Button: {
    fontWeight: "600",
    padding: 15,
    width: wp(85),
    backgroundColor: "#85e085",
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    borderRadius: 40,
    marginBottom: 10,
    marginTop: 10,
  },
  text: {
    color: "#32CD30",
    fontWeight: "800",
    fontSize: 20,
  },
});

export default Login;
