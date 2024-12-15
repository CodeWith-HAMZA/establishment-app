import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EstablishmentList from '../../components/lists/establishment-list'
import { Header } from '@react-navigation/elements'
import { useTheme } from '@react-navigation/native'
import { CustomTheme } from '../../utils/theme'

const SearchResultsScreen = () => {
  const theme =useTheme() as CustomTheme
  return (

    // we can pass items as props to the component to render the list of establishments  eg. items={establishments}
    <>
    <Header
        back={{title: 'Back', href: 'FilterPlaces'}}
          title=" Results"
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
      <EstablishmentList />
    </>
  )
}

export default SearchResultsScreen

const styles = StyleSheet.create({})