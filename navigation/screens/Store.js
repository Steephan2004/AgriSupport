import { Description } from "@mui/icons-material";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

// Sample data
const categories = [
  "Seeds",
  "Fertilizers",
  "Pesticides",
  "Tools",
  "Irrigation",
  "Machinery",
  "Organic Products",
];

const products = [
  {
    id: "1",
    title: "Seeds",
    price: "₹299",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    title: "Fertilizers",
    price: "₹999",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    title: "Tool",
    price: "₹499",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    title: "Oranic Product",
    price: "₹149",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "5",
    title: "Oranic Product",
    price: "₹149",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "6",
    title: "Oranic Product",
    price: "₹149",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "7",
    title: "Oranic Product",
    price: "₹149",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "8",
    title: "Oranic Product",
    price: "₹149",
    image: "https://via.placeholder.com/150",
  },
];

const Store = ({ navigation }) => {
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.product} onPress={()=>navigation.navigate("ProductDetails",{product:item})}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Agri Store</Text>
        <TextInput style={styles.searchBar} placeholder="Search for products" />
      </View>

      <ScrollView>
        <View style={styles.categoryContainer}>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
          />
        </View>

        <View style={styles.productContainer}>
          <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.productRow}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    paddingTop: 50,
    backgroundColor: "#85e085",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  categoryContainer: {
    marginVertical: 10,
  },
  categoryList: {
    paddingHorizontal: 15,
  },
  categoryItem: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryText: {
    fontSize: 16,
    color: "#333",
  },
  productContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  productRow: {
    justifyContent: "space-between",
  },
  product: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: "#555",
  },
});

export default Store;
