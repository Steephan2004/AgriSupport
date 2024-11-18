import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const posts = [
  {
    id: "1",
    username: "farmer_123",
    image: { uri: "https://via.placeholder.com/600x400" }, // Online placeholder image
    likes: 120,
    caption: "Harvesting season is here!",
    profilePic: { uri: "https://via.placeholder.com/100" }, // Online placeholder profile picture
  },
  {
    id: "2",
    username: "agri_life",
    image: { uri: "https://via.placeholder.com/600x400" }, // Online placeholder image
    likes: 98,
    caption: "Fresh produce from the farm.",
    profilePic: { uri: "https://via.placeholder.com/100" }, // Online placeholder profile picture
  },
  {
    id: "3",
    username: "agri_life",
    image: { uri: "https://via.placeholder.com/600x400" }, // Online placeholder image
    likes: 98,
    caption: "Fresh produce from the farm.",
    profilePic: { uri: "https://via.placeholder.com/100" }, // Online placeholder profile picture
  },
  {
    id: "4",
    username: "agri_life",
    image: { uri: "https://via.placeholder.com/600x400" }, // Online placeholder image
    likes: 98,
    caption: "Fresh produce from the farm.",
    profilePic: { uri: "https://via.placeholder.com/100" }, // Online placeholder profile picture
  },
  // Add more posts here with placeholders
];

const InstagramHome = () => {
  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={item.profilePic} style={styles.profilePic} />
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <Image source={item.image} style={styles.postImage} />
      <View style={styles.postFooter}>
        <View style={styles.iconsRow}>
          <Icon name="favorite-border" size={30} style={styles.icon} />
          <Icon name="chat-bubble-outline" size={30} style={styles.icon} />
        </View>
        <Text style={styles.likes}>{item.likes} likes</Text>
        <Text style={styles.caption}>
          <Text style={styles.username}>{item.username} </Text>
          {item.caption}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Agri Support</Text>
      </View>
      <View style={{marginBottom:185}}>
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Icon name="add" size={60} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: "#85e085",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  headerIcon: {
    color: "#000",
  },
  postContainer: {
    marginBottom: hp(2),
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: wp(3),
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  postImage: {
    width: wp(100),
    height: hp(40),
    backgroundColor: "#f0f0f0",
  },
  postFooter: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
  iconsRow: {
    flexDirection: "row",
    marginBottom: hp(1),
  },
  icon: {
    marginRight: wp(4),
  },
  likes: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: hp(0.5),
  },
  caption: {
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#85e085",
    position: "absolute",
    marginTop: 650,
    marginLeft: 300,
    width: wp(20),
    height: hp(10),
    borderRadius: 100,
  },
  navIcon: {
    color: "#fff",
  },
});

export default InstagramHome;
