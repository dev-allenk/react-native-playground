/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler'
import React from 'react'
import { ScrollView, StatusBar, useColorScheme } from 'react-native'
import HomeScreen from './src/screens/Home'
import Post from './src/components/Post'
import FEED_DATA from './assets/data/feed'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <HomeScreen /> */}
      <ScrollView>
        {FEED_DATA.map(data => (
          <Post key={data.id} data={data} />
        ))}
      </ScrollView>
    </>
  )
}

export default App
