import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import VectorIcon from '../../components/shared/vector-icon';
import ReusableBottomSheet from '../../components/shared/bottom-sheet';
import {PrimaryOutlinedButton} from '../../components/shared/buttons/outlined-primary-button-sm';
import {NavigationContainer, useNavigation, useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../utils/theme';
import Gallery from '../../components/gallery';

const EstablishmentLocationScreen = () => {
  const sheetRef = React.useRef();
  const theme = useTheme() as CustomTheme;
  const [search, setSearch] = useState('');
  const nav = useNavigation();
  useEffect(() => {
    sheetRef.current?.open();
  }, []);
  const images = [
    { id: 1, uri: "https://via.placeholder.com/150", large: true },
    { id: 2, uri: "https://via.placeholder.com/150", large: false },
    { id: 3, uri: "https://example.com/image3.jpg", large: false },
  ];

  return (
    <View style={styles.container}>
      {/* Placeholder for Map */}
      <View style={styles.mapPlaceholder}>
        <Text
          style={styles.mapPlaceholderText}
          onPress={() => sheetRef.current?.open()}>
          Map Placeholder (Click Here Triggering Sheet)
        </Text>
        {/* Search Box */}
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search establishments"
            value={search}
            onChangeText={setSearch}
          />
          <VectorIcon name="close" library="MaterialIcons" />
        </View>
      </View>
      {/* <Button title="Open Bottom Sheet" onPress={() => sheetRef.current?.open()} /> */}

      {/* Bottom Sheet */}
      <View style={styles.bottomSheet}>
        <ReusableBottomSheet ref={sheetRef}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <View style={styles.status}>
              <VectorIcon
                name="verified"
                library="MaterialIcons"
                size={20}
                color="#4CAF50"
              />
              <Text style={styles.headerTitle}>Hotel Inn</Text>
            </View>
            <TouchableOpacity onPress={() => sheetRef.current?.close()}>
              <VectorIcon
                library="MaterialIcons"
                name="close"
                size={24}
                color="#999"
              />
            </TouchableOpacity>
          </View>

          {/* Ratings and Info */}
          <Text style={styles.subtitle}>
            <VectorIcon
              library="FontAwesome"
              name="star"
              size={16}
              color="#FFC107"
            />{' '}
            4.7 (33 Reviews)
          </Text>
          <Text style={styles.info}>
            Hotel |{' '}
            <VectorIcon
              library="FontAwesome"
              style={{marginTop: '-1%', marginLeft: '2%'}}
              name="car"
              size={12}
              color="#999"
            />{' '}
            15 min
          </Text>

          {/* Buttons */}
          <View style={styles.actionRow}>
            
            <View style={{flexDirection: 'row', gap: 12}}>
              <PrimaryOutlinedButton
               onPress={() => {
                nav.navigate('PlaceDirections')
              }}
                textStyles={{color: '#fff'}}
                otherStyle={{backgroundColor: theme.colors.primary}}
                leftIcon={
                  <VectorIcon
                    library="MaterialIcons"
                    style={{marginTop: '-1%', color: '#fff'}}
                    name="directions"
                    size={20}
                    color="#999"
                  />
                }>
                Directions
              </PrimaryOutlinedButton>

              <PrimaryOutlinedButton
                onPress={() => {
                  // cnoso
                  nav.navigate('EstablishmentDetails')
                }}
                leftIcon={
                  <VectorIcon
                    library="FontAwesome"
                    style={{
                      marginTop: '-1%',
                      color: theme.colors.primary,
                      marginLeft: '2%',
                    }}
                    name="phone"
                    size={17}
                    color="#999"
                  />
                }>
                Call
              </PrimaryOutlinedButton>

              <PrimaryOutlinedButton
                leftIcon={
                  <VectorIcon
                    library="MaterialIcons"
                    style={{
                      marginTop: '-1%',
                      color: theme.colors.primary,
                      marginLeft: '2%',
                    }}
                    name="share"
                    size={17}
                    color="#999"
                  />
                }>
                Share
              </PrimaryOutlinedButton>
            </View>
            
          </View>

          {/* Gallery */}
                
                <Gallery images={images} />
         </ReusableBottomSheet>
      </View>
    </View>
  );
};

export default EstablishmentLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapPlaceholderText: {
    color: '#888',
    fontSize: 16,
    fontStyle: 'italic',
  },
  searchBox: {
    position: 'absolute',
    top: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 16,
    right: 16,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 6,
    marginHorizontal: 4,
    // paddingVertical: 16,
    fontSize: 14,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  bottomSheet: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  headerContainer: {
    flexDirection: 'row',

    marginTop: '-11%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  info: {
    fontSize: 12,
    color: '#999',
    marginBottom: 16,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9534F',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  actionText: {
    color: '#fff',
    marginLeft: 4,
    fontSize: 14,
  },
  galleryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
  },
});
