import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import s from './style'
import FEED_DATA from '../../../assets/data/feed'
import { useNavigation } from '@react-navigation/native'
import SCREENS from '../../navigations/path'

const Post: React.FC<{ data: typeof FEED_DATA[0] }> = ({ data }) => {
  const navigation = useNavigation()

  return (
    <Pressable onPress={() => navigation.navigate(SCREENS.postDetail)}>
      <View style={s.container}>
        <Image
          style={s.image}
          source={{
            uri: data.image,
          }}
        />
        <Text style={s.bedroomText}>
          {data.bed} bed {data.bedroom} bedroom
        </Text>
        <Text style={s.description} numberOfLines={2}>
          {data.title}
        </Text>

        <Text style={s.prices}>
          <Text style={s.oldPrice}>${data.oldPrice}</Text>
          <Text style={s.newPrice}> ${data.newPrice}</Text> / night
        </Text>
        <Text style={s.totalPrice}>${data.totalPrice} total</Text>
      </View>
    </Pressable>
  )
}

export default Post
