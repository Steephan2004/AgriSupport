import { View, Text, FlatList, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { useState } from "react";
import { ScrollView} from "react-native-gesture-handler";

const DATA = [
  { id: "1", title: "Pradhan Mantri Kisan Samman Nidhi" },
  { id: "2", title: "Pradhan Mantri Kisan MaanDhan Yojana" },
  { id: "3", title: "Pradhan Mantri Fasal Bima Yojana" },
  { id: "4", title: "Modified Interest Subvention Scheme" },
  { id: "5", title: "Agriculture Infrastructure Fund" },
];

const Scheme = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState(null);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={[styles.title, { fontWeight: "700" }]}>{item.title}</Text>
      <TouchableOpacity
        onPress={() => {
          setSelectedScheme(item.title);
          setModalVisible(true);
        }}
      >
        <Text
          style={{
            alignItems: "center",
            textAlign: "center",
            marginTop: 20,
            fontSize: 17,
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 15,
          }}
        >
          View Details
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.heading, fontWeight: "700" }}>Schemes</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 20 }}>
              {selectedScheme}
            </Text>
            <ScrollView
              keyboardShouldPersistTaps="always"
            >
              <Text>This is the detailed information about {selectedScheme}.</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text
                  style={{
                    alignItems: "center",
                    textAlign: "center",
                    marginTop: 20,
                    fontSize: 17,
                    backgroundColor: "#85e085",
                    padding: 10,
                    borderRadius: 15,
                  }}
                >
                  Close
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#85e085",
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 16,
    height: "auto",
    borderRadius: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    backgroundColor: "#85e085",
    paddingTop: 40,
    paddingBottom: 15,
    color: "#fff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 350,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
});

export default Scheme;
