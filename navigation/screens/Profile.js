import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Profile = () => {
  const [image, setImage] = useState(require("../assets/profile.png")); // Use your own image

  const pickImage = async () => {
    // Request permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // Launch the image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage({ uri: result.assets[0].uri }); // Set the selected image URI
    }
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.container1}>
          <TouchableOpacity
            onPress={pickImage}
            style={{ position: "relative" }}
          >
            <Image source={image} style={styles.image} />
            <View style={styles.overlay}>
              <Icon name="brush" size={30} color="#000" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView scrollEnabled={true}>
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity style={styles.buttons}>
            <Icon name="edit" size={30} />
            <Text style={styles.buttonsText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttons}>
            <Icon name="pages" size={30} />
            <Text style={styles.buttonsText}>My Posts</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttons}>
            <Icon name="language" size={30} />
            <Text style={styles.buttonsText}>Language</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttons}>
            <Icon name="security" size={30} />
            <Text style={styles.buttonsText}>Change Password</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttons}>
            <Icon name="help" size={30} />
            <Text style={styles.buttonsText}>About</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{...styles.buttons,borderBottomWidth: 0}}>
            <Icon name="login" size={30} />
            <Text style={styles.buttonsText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#85e085",
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    height: hp(40),
  },
  container1: {
    marginTop: 80,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "#555",
  },
  overlay: {
    position: "absolute",
    bottom: 20, // Position the icon at the bottom-right
    right: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
  },
  buttons: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#85e085",
    
  },
  buttonsText: {
    fontSize: 18,
    padding: 20,
    width: wp(80),
  },
});

export default Profile;
