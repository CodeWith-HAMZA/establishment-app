import React from 'react';
import { StyleSheet, View, ViewStyle, TextStyle, Image, ImageStyle } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 
import Feather from 'react-native-vector-icons/Feather'; 
import Fontisto from 'react-native-vector-icons/Fontisto'; 


 export type IconLibrary = 'FontAwesome' | 'Fontisto' | 'Feather' | 'FontAwesome5' | 'SimpleLineIcons' | 'Ionicons' | 'MaterialIcons' | 'Entypo' | 'Octicons';

interface VectorIconProps {
  library?: IconLibrary;
  name?: string;
  size?: number;
  color?: string;
  style?: TextStyle | ImageStyle; 
  containerStyle?: ViewStyle;  
   
}

const VectorIcon: React.FC<VectorIconProps> = ({
  library,
  name,
  size = 26,
  color = '#B1B9C5',
  style, 
  containerStyle, 
}) => {
  // Map icon sets to their components
  const IconLibraries: Record<IconLibrary, any> = {
    FontAwesome,
    SimpleLineIcons,
    Octicons,
    Ionicons,
    Feather,
    MaterialIcons,
    Entypo,
    FontAwesome5,
    Fontisto
  };

   const IconComponent = IconLibraries[library || 'FontAwesome'];

   if (!IconComponent) {
    console.error(`Icon library "${library}" is not supported.`);
    return null;
  }
 
  return (

    <View style={[styles.container, containerStyle]}>
      <IconComponent  name={name} size={size} color={color} style={style} />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VectorIcon;
