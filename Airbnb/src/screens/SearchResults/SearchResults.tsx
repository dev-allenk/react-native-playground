import React from 'react'
import { View, FlatList } from 'react-native'
import Post from '../../components/Post'
import FEED_DATA from '../../../assets/data/feed'

const SearchResultsScreen = () => {
  return (
    <View>
      <FlatList
        data={FEED_DATA}
        renderItem={({ item }) => <Post key={item.id} data={item} />}
      />
    </View>
  )
}

export default SearchResultsScreen
