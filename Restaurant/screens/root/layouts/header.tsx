import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VectorIcon from '../../../components/shared/vector-icon'
import { useNavigation } from '@react-navigation/native'

const RootTopbar = () => {
  const navigation =useNavigation()
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    <VectorIcon name='arrow-back' library='Ionicons' color='#000' />
            <Text onPress={() => {
            navigation.navigate('FilterPlaces')
          }} style={{ fontWeight: '600', fontSize: 18, flex: 1, textAlign: 'center' }}>Filters</Text>
          <Image  source={require('./../../assets/icons/message.png')} style={{ marginLeft: 'auto' }} />
        </View>
  )
}

export default RootTopbar

const styles = StyleSheet.create({})