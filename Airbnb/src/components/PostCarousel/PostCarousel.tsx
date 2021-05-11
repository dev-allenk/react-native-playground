import React from 'react'
import { View, Text, Image, FlatList, Pressable } from 'react-native'
import s from './style'
import FEED_DATA from '../../../assets/data/feed'
import { useWindowDimensions } from 'react-native'

const PostCarousel: React.FC = () => {
  const screenWidth = useWindowDimensions().width

  return (
    <View style={s.carouselWrapper}>
      <FlatList
        data={FEED_DATA}
        renderItem={({ item }) => <SimplePost key={item.title} data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={screenWidth - 60}
        decelerationRate="fast"
      />
    </View>
  )
}

function SimplePost({ data }: { data: typeof FEED_DATA[0] }) {
  return (
    <Pressable style={s.postContainer}>
      <View style={s.innerContainer}>
        <Image
          style={s.image}
          source={{
            uri: data.image,
          }}
        />

        <View style={s.textContainer}>
          <Text style={s.bedroomText}>
            {data.bed} bed {data.bedroom} bedroom
          </Text>
          <Text style={s.description} numberOfLines={2}>
            {data.title}
          </Text>

          <Text style={s.prices}>
            <Text style={s.newPrice}> ${data.newPrice}</Text> / night
          </Text>
        </View>
      </View>
    </Pressable>
  )
}

export default PostCarousel
