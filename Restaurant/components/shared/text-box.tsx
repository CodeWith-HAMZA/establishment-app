import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  StyleSheetProperties,
} from 'react-native';
import VectorIcon, {IconLibrary} from './vector-icon';
import {useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../utils/theme';

interface Props {
  icon?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (value: string) => void;
  library?: IconLibrary;
  rightIconBtn?: string;
  rightIconLibrary?: IconLibrary;
  onRightIconPress?: () => void;
  inputStyles?: object;
  value?: string;
  rightIconColor?: string;
}
const TextBox = ({
  icon,
  placeholder,
  library,
  rightIconLibrary,
  inputStyles,
  onRightIconPress,
  rightIconColor,
  rightIconBtn,
  secureTextEntry = false,
  value = '',
  onChangeText,
}: Props) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  const theme = useTheme() as CustomTheme;
  return (
    <View style={[styles.container, inputStyles]}>
      {icon && (
        <VectorIcon
          library={library || 'Octicons'}
          name={icon}
          size={20}
          style={styles.icon}
        />
      )}
      <TextInput
        defaultValue={value}
        style={[styles.input, {color: theme.colors.placeholderColor}]}
        placeholder={placeholder}
        secureTextEntry={isSecure}
        placeholderTextColor="#aaa"
        onChangeText={onChangeText}
      />

      {rightIconBtn && (
        <TouchableOpacity onPress={onRightIconPress}>
          <VectorIcon
            name={rightIconBtn}
            color={rightIconColor || theme.colors.ghost}
            library={rightIconLibrary}
            size={22}
          />
        </TouchableOpacity>
      )}

      {secureTextEntry && (
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
          {isSecure ? (
            <VectorIcon name={'eye-closed'} library="Octicons" size={20} />
          ) : (
            <Image
              source={require('./../../assets/icons/visible-eye.png')}
              tintColor={theme.colors.icon}
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '100%',
    minWidth: '81%',
    borderWidth: 1,
    // flex: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default TextBox;
