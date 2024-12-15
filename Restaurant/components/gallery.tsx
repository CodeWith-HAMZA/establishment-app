import React from "react";
import { ScrollView, StyleSheet, View, Image, Dimensions } from "react-native";

const Gallery = ({images}) => {
  
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {images.map((image, index) => (
        <View
          key={image.id}
          style={[image.large ? styles.largeImage : styles.smallImage, index > 0 && { marginLeft: 10 }]}
        >
          <Image source={{ uri: image.uri }} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
};

const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  largeImage: {
    width: screenWidth * 0.6, // 60% of the screen width
    height: screenWidth * 0.7, // Keep it square
    borderRadius: 10,
    overflow: "hidden",
  },
  smallImage: {
    width: screenWidth * 0.3, // 30% of the screen width
    height: screenWidth * 0.3, // Keep it square
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Gallery;
