import React from 'react'
import { useState } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import s from './style'
import SEARCH_DATA from '../../../assets/data/search'

import Entypo from 'react-native-vector-icons/Entypo'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import SCREENS from '../../navigations/path'

const DestinationSearchScreen = () => {
  const [textValue, setValue] = useState('')

  return (
    <View style={s.container}>
      <TextInput
        style={s.textInput}
        placeholder="Where are you going?"
        value={textValue}
        onChangeText={setValue}
      />

      <FlatList
        data={SEARCH_DATA}
        renderItem={({ item }) => <Destination key={item.id} data={item} />}
      />
    </View>
  )
}

const Destination: React.FC<{ data: typeof SEARCH_DATA[0] }> = ({ data }) => {
  const navigation = useNavigation()

  return (
    <Pressable
      style={s.destinationContainer}
      onPress={() => navigation.navigate(SCREENS.guests)}>
      <View style={s.iconContainer}>
        <Entypo name="location-pin" size={25} color={'#000'} />
      </View>
      <Text>{data.description}</Text>
    </Pressable>
  )
}

export default DestinationSearchScreen
