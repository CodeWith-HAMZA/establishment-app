import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import VectorIcon from "./shared/vector-icon";
 
const HomeHeader = () => {
  // Data for the "Places to go" section
  const categories = [
    { id: "1", name: "Restaurants", icon: "cutlery" },
    { id: "2", name: "Hotels", icon: "bed" },
    { id: "3", name: "Parks", icon: "tree" },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryCard}>
      <VectorIcon library="FontAwesome" name={item.icon} size={20} color="#000" />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Location Header */}
      <View style={styles.locationRow}>
        <View>
          <Text style={styles.locationLabel}>Location</Text>
          <TouchableOpacity style={styles.locationSelector}>
            <Text style={styles.locationText}>Theron Branch Suite</Text>
            <VectorIcon library="MaterialIcons" name="keyboard-arrow-down" size={18} color="#007AFF" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <VectorIcon library="MaterialIcons" name="chat-bubble-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Places to go Section */}
      <Text style={styles.sectionTitle}>Places to go</Text>
      <FlatList
        horizontal
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    flex: 1,
  },
  locationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  locationLabel: {
    fontSize: 14,
    color: "#666",
  },
  locationSelector: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginRight: 4,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#FF4D4D",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
  },
  categoryCard: {
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
    elevation: 2,
  },
  categoryText: {
    fontSize: 14,
    color: "#000",
    marginLeft: 8,
    fontWeight: "500",
  },
});

export default HomeHeader;
