import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import TextBox from '../../components/shared/text-box';
import VectorIcon from '../../components/shared/vector-icon';
import ReusableBottomSheet from '../../components/shared/bottom-sheet';

const PlaceDirectionsScreen = () => {
  const sheetRef = useRef()
  useEffect(() => {
     sheetRef.current?.open();
  }, [ ])
  
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        {/* Input Fields */}
        <View style={{flexDirection: 'row', alignItems: '', gap: 4}}>
          <View style={{paddingBottom: '14%'}}>
            <Image
              source={require('../../assets/icons/red-dot.png')}
              style={{width: 26, top: '12%'}}
              resizeMode="contain"
            />
            

            <Image
              source={require('../../assets/icons/line.png')}
              style={{height: 30, left: '40%', marginTop: 4}}
              resizeMode="stretch"
            />
            <Image
              source={require('../../assets/icons/marker.png')}
              style={{width: 26, marginTop: 'auto'}}
              resizeMode="contain"
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputBox}>
              <TextBox
                inputStyles={{width: '85%', marginVertical: 6}}
                placeholder="Your Location"
              />
              <Image source={require('../../assets/icons/message.png')} />
            </View>

            <View style={styles.inputBox}>
              <TextBox
                inputStyles={{width: '85%', marginVertical: 6}}
                placeholder="Hotel Inn"
              />

              <Image source={require('../../assets/icons/arrows.png')} />
            </View>
          </View>
        </View>

        {/* Duration Options */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.durationScroll}>
          <TouchableOpacity style={styles.durationBoxActive}>
            <Image source={require('../../assets/icons/car.png')} />
            <Text style={styles.durationTextActive}>11min</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.durationBox}>
          <Image source={require('../../assets/icons/bus.png')} />
            <Text style={styles.durationText}>33min</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.durationBox}>
          <Image source={require('../../assets/icons/walking.png')} />

            <Text style={styles.durationText}>34min</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.durationBox}>
          <Image source={require('../../assets/icons/cycle.png')} />

            <Text style={styles.durationText}>11min</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Map Placeholder */}
      <View style={styles.mPlaceDirectionsScreenlaceholder}>
        
        <Text onPress={() => sheetRef.current?.open()} style={styles.mapText}>Map Placeholder</Text>
      </View>

      {/* Bottom Slide-Up Section */}
      <ReusableBottomSheet height='26%' ref={sheetRef}>
        <View style={{marginTop: '-8%'}}>
         <Text style={styles.bottomTime}>11 min <Text style={{color: 'grey'}}>(2.5 km)</Text></Text>
        <Text style={[styles.bottomAddress,{ color: 'grey', marginBottom: '8%'}]}>
          Comte De Santa Clara 15, 3341, Barcelona, Spain
        </Text>
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.startButton}>
            <Image source={require('../../assets/icons/arrow2.png')} /> 
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
          <Image source={require('../../assets/icons/share.png')} /> 

            <Text style={styles.shareButtonText}>Share</Text>
          </TouchableOpacity>
        </View>
   </View>
      </ReusableBottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    padding: 20,
    backgroundColor: '#fff',
    zIndex: 1,
    elevation: 5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    // marginBottom: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ddd',
    // paddingBottom: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    marginLeft: 10,
  },
  durationScroll: {
    flexDirection: 'row',
  },
  durationBox: {
    marginRight: 10,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    borderRadius: 20,
  },
  durationBoxActive: {
    marginRight: 10,
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: '#0000001F',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    borderRadius: 20,
  },
  durationText: {
    fontSize: 14,
    color: '#333',
  },
  durationTextActive: {
    fontSize: 14,
    color: '#B32425',
  },
  mPlaceDirectionsScreenlaceholder: {
    flex: 1,
    backgroundColor: '#0000001F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    fontSize: 18,
    color: '#fff',
  },
  bottomCard: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 10,
  },
  bottomTime: {
    fontSize: 18,
    fontWeight: 'semibold',
    marginBottom: 5,
  },
  bottomAddress: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  startButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#B32425',
    padding: 15,
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginRight: 10,
  },
  startButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',

  },
  shareButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#B32425',
    borderWidth: 1,
    gap: 10,
    backgroundColor: '#fff',
    padding: 15,
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginRight: 10,
  },
  shareButtonText: {
    fontSize: 18,
    color: '#B32425',
    fontWeight: '500',
  },
});

export default PlaceDirectionsScreen;
