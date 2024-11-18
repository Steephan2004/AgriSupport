import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import axios from "axios";

const SignupForm = ({ navigation }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  const requestOtp = () => {
    if (validatePhoneNumber(mobileNumber)) {
      const userData = {
        name: name,
        username: username,
        mobilenumber: mobileNumber,
        address: address,
        password: password,
      };
      axios.post("http://192.168.43.221:5001/register/", userData).then((res) => {
        console.log(res.data);
      }).catch(e=>{
        console.error(e);
      })

      setOtpSent(true);
      Alert.alert("OTP sent", "Please enter the OTP sent to your phone.");
    } else {
      Alert.alert("Invalid Number", "Please enter a valid mobile number.");
    }
  };

  const verifyOtpAndSubmit = () => {
    const mockOtp = "1234"; // In a real app, this would be dynamically generated and sent to the user.
    if (otp === mockOtp) {
      navigation.navigate("MainContainer");
    } else {
      Alert.alert("Invalid OTP", "Please enter the correct OTP.");
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff", paddingTop: 20 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          value={mobileNumber}
          keyboardType="phone-pad"
          onChangeText={setMobileNumber}
          maxLength={10}
        />
        <TextInput
          style={styles.addressInput}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
          multiline={true}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="New Password"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Icon
              name={isPasswordVisible ? "visibility" : "visibility-off"}
              size={24}
            />
          </TouchableOpacity>
        </View>

        {!otpSent && (
          <TouchableOpacity style={styles.otpButton} onPress={requestOtp}>
            <Text style={styles.buttonText}>Verify Mobile number</Text>
          </TouchableOpacity>
        )}

        {otpSent && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Enter OTP"
              value={otp}
              keyboardType="number-pad"
              onChangeText={setOtp}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={verifyOtpAndSubmit}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  input: {
    height: hp(7),
    width: wp(85),
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    color: "#32CD30",
    fontSize: 17.5,
    borderRadius: 5,
    marginBottom: 20,
  },
  addressInput: {
    height: hp(15), // Increased height for multiline input
    width: wp(85),
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    color: "#32CD30",
    fontSize: 17.5,
    borderRadius: 5,
    marginBottom: 20,
    textAlignVertical: "auto", // Align text to the top for multiline
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: hp(7),
    width: wp(85),
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  passwordInput: {
    flex: 1,
    fontSize: 17.5,
    color: "#32CD30",
  },
  otpButton: {
    backgroundColor: "#85e085",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 40,
    marginBottom: 10,
    marginTop: 10,
    width: wp(85),
  },
  submitButton: {
    backgroundColor: "#85e085",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 40,
    width: wp(85),
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});

export default SignupForm;
