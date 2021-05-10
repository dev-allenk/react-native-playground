import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'

import { View, Text, Pressable, ImageBackground } from 'react-native'
import s from './style'
import { useNavigation } from '@react-navigation/native'
import SCREENS from '../../navigations/path'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={s.image}>
        <View style={s.imageInnerContainer}>
          <Pressable
            style={s.searchButton}
            onPress={() => navigation.navigate(SCREENS.destinationSearch)}>
            <Fontisto name="search" size={25} color={'#f15454'} />
            <Text style={s.buttonText}>Where are you going?</Text>
          </Pressable>

          <Text style={s.title}>Go Near</Text>

          <Pressable style={s.exploreButton}>
            <Text style={s.buttonText}>Explore nearby stays</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen
