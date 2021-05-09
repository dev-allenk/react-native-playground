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
import { StatusBar, useColorScheme } from 'react-native'
import HomeScreen from './src/screens/Home'
import Post from './src/components/Post'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <HomeScreen /> */}
      <Post />
    </>
  )
}

export default App
