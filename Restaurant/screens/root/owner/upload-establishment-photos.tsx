import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const UploadEstablishmentPhotosScreen = () => {
  const [images, setImages] = useState<(string | undefined)[]>(Array(6).fill(undefined));

  const handleImagePick = (index: number) => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
      },
      (response) => {
        if (response.didCancel) {
          return;
        }
        if (response.errorMessage) {
          Alert.alert('Error', response.errorMessage);
          return;
        }
        const uri = response.assets?.[0]?.uri;
        if (uri) {
          const updatedImages = [...images];
          updatedImages[index] = uri;
          setImages(updatedImages);
        }
      }
    );
  };

  const handleSubmit = () => {
    if (images.some((image) => !image)) {
      Alert.alert('Error', 'All image slots must be filled before submission.');
      return;
    }
    Alert.alert('Success', 'All images uploaded successfully.');
    console.log('Uploaded Images:', images);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Upload Your Photos</Text>
      <Text style={styles.subtitle}>
        Upload some latest photos of your establishment to boost your visibility
      </Text>

      {/* Main Photo */}
      <TouchableOpacity onPress={() => handleImagePick(0)}>
        <Image
          source={images[0] ? { uri: images[0] } : require('./../../assets/images/placeholder.png')}
          style={[styles.mainPhoto, !images[0] && styles.placeholder]}
        />
        {!images[0] && <Text style={styles.mainPhotoLabel}>Main Photo</Text>}
      </TouchableOpacity>

      {/* Grid of Photos */}
      <View style={styles.grid}>
        {images.slice(1).map((image, index) => (
          <TouchableOpacity
            key={index}
            style={styles.gridItem}
            onPress={() => handleImagePick(index + 1)}
          >
            <Image
              source={require('./../../../assets/icons/place-holder-icon-upload.png')}
              style={[styles.gridPhoto, !image && styles.placeholder]}
            />
            {!image && <Text style={styles.uploadText}>Upload</Text>}
          </TouchableOpacity>
        ))}
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '6%',
    paddingTop: '8%',
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#777',
    marginBottom: 20,
  },
  mainPhoto: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 15,
  },
  placeholder: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainPhotoLabel: {
    position: 'absolute',
    top: '45%',
    left: '40%',
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    opacity: 0.8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '30%',
    aspectRatio: 1,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  gridPhoto: {
    width: '100%',
    height: '100%',
  },
  uploadText: {
    position: 'absolute',
    top: '40%',
    left: '30%',
    color: '#d50000',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default UploadEstablishmentPhotosScreen;
