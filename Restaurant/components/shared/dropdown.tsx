import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View, Text, StyleSheetProperties, DimensionValue} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {CustomTheme} from '../../utils/theme';
import VectorIcon from './vector-icon';

interface DropdownProps {
  items: {label: string; value: string}[];
  placeholder?: string;
  onChangeValue: (value: string) => void;
  renderLeftIcon?: () => React.ReactNode;
  border?: boolean;
  containerStyle?: any;
}

const ReusableDropdown: React.FC<DropdownProps> = ({
  items,
  border = false,
  placeholder = 'Select ',
  onChangeValue,
  containerStyle,
  renderLeftIcon,
}) => {
  const [value, setValue] = useState<string | null>(null);
  const theme = useTheme() as CustomTheme;
  const renderItem = (item: {label: string; value: string}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && <Text>✔️</Text>}
      </View>
    );
  };

  return (
    <Dropdown
      style={[ styles.dropdown, containerStyle, !border ? {elevation: 0} : null]}
      placeholderStyle={[styles.placeholderStyle, {color: '#64748B99'}]}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={items}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      renderLeftIcon={() =>
        // Render left icon from prop
        renderLeftIcon ? renderLeftIcon() : null
      }
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
        onChangeValue(item.value);
      }}
      renderItem={renderItem}
    />
  );
};

export default ReusableDropdown;

const styles = StyleSheet.create({
  dropdown: {
    //  margin: 16,
    // width: 200,
    marginBottom: '4%',
    height: 56,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    // paddingVertical: '3%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
    // color: 'red'
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
