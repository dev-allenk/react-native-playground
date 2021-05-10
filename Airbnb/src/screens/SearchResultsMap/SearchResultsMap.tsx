import React from 'react'
import { View, ImageBackground } from 'react-native'

export default function SearchResultsMapScreen() {
  return (
    <View>
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={require('../../../assets/images/map_sample.jpg')}
      />
    </View>
  )
}
