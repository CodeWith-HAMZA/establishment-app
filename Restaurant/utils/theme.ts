import { DefaultTheme } from "@react-navigation/native";

export const myCustomTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
      secondary: '#FBE0E6',
      primary: '#B32425',
      ghost: '#181818',
      icon: '#B1B9C5',
      lightGrey: '#436F86',
      placeholderColor: '#333'
    },
  };


export type CustomTheme = typeof myCustomTheme;