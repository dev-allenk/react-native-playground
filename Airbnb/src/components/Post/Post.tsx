import React from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'
import s from './style'

const Post = () => {
  return (
    <SafeAreaView>
      <View style={s.container}>
        <Image
          style={s.image}
          source={{
            uri:
              'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
          }}
        />
        <Text style={s.bedroomText}>1 bed 1 bedroom</Text>
        <Text style={s.description} numberOfLines={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          excepturi voluptate! Doloremque enim, rerum similique laborum
          voluptatibus eius hic saepe?
        </Text>

        <Text style={s.prices}>
          <Text style={s.oldPrice}>$36</Text>
          <Text style={s.newPrice}> $30</Text> / night
        </Text>
        <Text style={s.totalPrice}>$200 total</Text>
      </View>
    </SafeAreaView>
  )
}

export default Post
