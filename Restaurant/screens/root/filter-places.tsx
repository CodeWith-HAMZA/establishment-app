import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Slider from '@react-native-community/slider';
import DropDownPicker from 'react-native-dropdown-picker';
import {useNavigation, useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../utils/theme';
import DropdownComponent from 'react-native-element-dropdown/lib/typescript/components/Dropdown';
import ReusableDropdown from '../../components/shared/dropdown';
import TextBox from '../../components/shared/text-box';
import VectorIcon from '../../components/shared/vector-icon';
import PrimaryButton from '../../components/shared/buttons/primary.button';
import {Header} from '@react-navigation/elements';
import ReusableSlider from '../../components/shared/range-slider';

const FilterPlacesScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Hyderabad', value: 'hyderbad'},
    {label: 'Karachi', value: 'karachi'},
  ]);
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [distance, setDistance] = useState(0); // default slider value
  const [establishmentType, setEstablishmentType] = useState('');
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const theme = useTheme() as CustomTheme;
  const navigation = useNavigation();
  const facilities = ['Building', 'Bathroom', 'Ramps', 'Bar', 'Wheelchairs'];

  const toggleFacility = facility => {
    if (selectedFacilities.includes(facility)) {
      setSelectedFacilities(selectedFacilities.filter(f => f !== facility));
    } else {
      setSelectedFacilities([...selectedFacilities, facility]);
    }
  };

  return (
    <>
      <Header
        back={{title: 'Back', href: 'Search'}}
        headerBackgroundContainerStyle={{
          borderBottomWidth: 0.8,
          borderColor: theme.colors.ghost + '10',
        }}
        title="Filters"
        headerTitleAlign="center"
        headerRight={() => {
          return (
            <Image
              source={require('./../../assets/icons/message.png')}
              style={{marginRight: '14%'}}
            />
          );
        }}
      />
      <ScrollView style={styles.container}>
        {/* State */}

        <Text style={[styles.label, {marginTop: '4%'}]}>State</Text>

        <TextBox
        
          placeholder="Enter State"
          onChangeText={() => {
            console.log('');
          }}
        />

        {/* City */}
        <Text style={[styles.label, {marginTop: '6%'}]}>City</Text>

        <ReusableDropdown
          placeholder="Select City"
          items={items}
          onChangeValue={() => {
            console.log('stheuthu');
          }}
        />

        {/* Distance */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '8%'}}>

        <Text style={{fontSize:16, fontWeight: '500'}}>Distance</Text>
        <Text style={{color: theme.colors.lightGrey+'99'}}>Within {Math.floor(distance)} km</Text>


        </View>

        <ReusableSlider
          onValueChange={val => {
            const num =  val.at(0) 
            setDistance(num || 0)
          }}
          value={distance}
          containerStyle={{
            
          }}

          
        />
         <Text style={[styles.label, {marginTop: '4%', marginBottom: '4%'}]}>
          Establishment Type
        </Text>
        <View style={[styles.typeContainer]}>
          <FlatList
            data={['Hotel', 'Park', 'Restaurant', 'Plots', 'Gym']}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[
                  styles.typeButton,
                  establishmentType === item && styles.activeTypeButton,
                ]}
                onPress={() => setEstablishmentType(item)}>
                <Text
                  style={[
                    styles.typeButtonText,
                    establishmentType === item && styles.activeTypeButtonText,
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <Text style={[styles.label, {marginBottom: '6%', marginTop: '4%'}]}>
          Available Facilities
        </Text>
        <View style={styles.facilitiesContainer}>
          {facilities.map(facility => (
            <TouchableOpacity
              key={facility}
              style={[
                styles.facilityButton,
                selectedFacilities.includes(facility) && styles.activeFacility,
                {borderColor: theme.colors.primary},
              ]}
              onPress={() => toggleFacility(facility)}>
              <Text
                style={[
                  styles.facilityText,
                  {color: theme.colors.primary},
                  selectedFacilities.includes(facility) && {
                    ...styles.activeFacilityText,
                    color: '#fff',
                  },
                ]}>
                {facility}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Save Changes */}

        <PrimaryButton
          onPress={() => {
            navigation.navigate('SearchResults');
          }}>
          Save Changes
        </PrimaryButton>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    // backgroundColor: 'green',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    fontSize: 14,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  picker: {
    height: 40,
    width: '100%',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderText: { 
    fontSize: 14,
    color: '#333',
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  typeButton: {
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#FBE0E6',
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  activeTypeButton: {
    backgroundColor: '#d9534f',
    borderColor: '#d9534f',
  },
  typeButtonText: {
    color: '#333',
    fontSize: 14,
  },
  activeTypeButtonText: {
    color: '#fff',
  },
  facilitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  facilityButton: {
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  activeFacility: {
    backgroundColor: '#d9534f',
    color: '#fff',
  },
  facilityText: {
    fontSize: 14,
  },
  activeFacilityText: {
    color: '#fff',
  },
  saveButton: {
    backgroundColor: '#d9534f',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default FilterPlacesScreen;
