import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import {testImageHotel} from '../../../constants';
import GhostButton from '../../../components/shared/buttons/ghost.button';
import {Header} from '@react-navigation/elements';
import {useNavigation, useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../../utils/theme';

const PhotoUploadScreen = () => {
  const theme = useTheme() as CustomTheme;

  const [mainPhoto, setMainPhoto] = useState(testImageHotel); // Main Photo state
  const [gridPhotos, setGridPhotos] = useState([
    {id: 1, uri: null},
    {id: 2, uri: null},
    {id: 3, uri: null},
    {id: 4, uri: null},
    {id: 5, uri: null},
    {id: 6, uri: null},
  ]);

  const nav = useNavigation();
  // Handler to pick an image and crop it
  const handleImagePick = updateImageCallback => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        updateImageCallback(image.path); // Callback to update state with the selected image path
      })
      .catch(error => {
        console.log('Image Picker Error:', error);
      });
  };

  // Update a specific grid image
  const handleGridImageUpdate = id => {
    handleImagePick(newImageUri => {
      setGridPhotos(prevPhotos =>
        prevPhotos.map(photo =>
          photo.id === id ? {...photo, uri: newImageUri} : photo,
        ),
      );
    });
  };

  return (
    <>
      <Header
        title="Your Photos"
        back={{href: 'back', title: 'Back'}}
        headerTitleAlign="center"
      />
      <View style={styles.container}>
        <ScrollView>
          {/* Main Photo Section */}
          <View style={styles.mainPhotoContainer}>
            <Image source={{uri: mainPhoto}} style={styles.mainPhoto} />
            <View style={styles.mainLabel}>
              <Text style={styles.mainLabelText}>Main Photo</Text>
            </View>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={() => handleImagePick(setMainPhoto)}>
              <Text style={styles.uploadButtonText}>Upload</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.gridContainer}>
            {gridPhotos.map(item => (
              <View
                key={item.id}
                style={[
                  styles.imageContainer,
                  {
                    borderStyle: 'dashed',
                    borderColor: 'red',
                    borderWidth: 1,
                    borderRadius: 14,
                  },
                ]}>
                <Image
                  source={
                    item.uri
                      ? {uri: item.uri}
                      : require('./../../../assets/icons/upload-placeholder.png')
                  }
                  style={[
                    styles.gridImage,
                    !item.uri && {width: '50%', bottom: '8%', left: '22%'},
                  ]}
                  resizeMode={!item.uri && 'contain'}
                />
                <TouchableOpacity
                  style={styles.uploadButtonSmall}
                  onPress={() => handleGridImageUpdate(item.id)}>
                  <Text style={styles.uploadButtonTextSmall}>Upload</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <Text
            style={{color: theme.colors.lightGrey + '90', textAlign: 'center'}}>
            Upload Some Photos Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
          </Text>
        </ScrollView>


        <GhostButton onPress={() => nav.navigate('MultiStepAccessibility')} otherStyle={{marginBottom: 24}}>Save Changes</GhostButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  mainPhotoContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  mainPhoto: {
    width: '100%',
    height: 180,
    borderRadius: 14,
  },
  mainLabel: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#333',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    opacity: 0.7,
    borderColor: '#fff',
    borderWidth: 1,
  },
  mainLabelText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  uploadButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#D9534F',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  uploadButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '30%',
    aspectRatio: 1,
    marginBottom: 14,
    position: 'relative',
  },
  gridImage: {
    width: '100%',
    height: '100%',
    borderRadius: 14,
  },
  uploadButtonSmall: {
    position: 'absolute',
    bottom: '8%',
    left: '20%',
    backgroundColor: '#D9534F',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  uploadButtonTextSmall: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default PhotoUploadScreen;
